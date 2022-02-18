import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import cloudinaryFramework from 'cloudinary';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import character from './data/character.json';
import friend from './data/friend.json';
import friendName from './data/friendName.json';
import place from './data/place.json';
import sound from './data/sound.json';
import tools from './data/tools.json';
import feeling from './data/feeling.json';

dotenv.config();

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/finalproject';
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
mongoose.Promise = Promise;

// //Image upload storage cloudinary
const cloudinary = cloudinaryFramework.v2;
cloudinary.config({
  cloud_name: 'cloudinary-story', // this needs to be whatever you get from cloudinary
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'storyimg',
    allowedFormats: ['jpg', 'png']
    // transformation: [{ width: 500, height: 500, crop: 'limit' }],
  }
});
const parser = multer({ storage });

// create a user schema with mongoose and use crypto for accessToken
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  storyCollection: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'StoryCollection'
    }
  ],
  password: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex')
  }
});

const User = mongoose.model('User', UserSchema);

// Schema for showing a users own saved stories
const StoryCollectionSchema = mongoose.Schema({
  description: Object,
  character: Object
});

const StoryCollection = mongoose.model(
  'StoryCollection',
  StoryCollectionSchema
);

// Schema for dynamicData.json
const ElementSchema = new mongoose.Schema({
  id: Number,
  name: String,
  image: String
});

const Element = mongoose.model('Element', ElementSchema);

// schema for uploaded images
const StoryImg = mongoose.model('StoryImg', {
  name: String,
  imageUrl: String
});

const port = process.env.PORT || 8080;
const app = express();

// Allow all domains
app.use(cors());

app.use(express.json());

// Error handling if the server is not running
app.use((req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    next();
  } else {
    res.status(503).json({ error: 'Service unavailable' });
  }
});

// Function for checking if user is logged in
const authenticateUser = async (req, res, next) => {
  const accessToken = req.header('Authorization');

  try {
    const user = await User.findOne({ accessToken });
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(401).json({ response: 'Please log in', success: false });
    }
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
};

app.get('/', (req, res) => {
  res.send({
    Message:
      'This is the backend of the final project by Maria Petersson and Ida Aspen. Please visit <a href="https://sagomaskinen.netlify.app">frontend</a> for the deployed page and <a href="https://github.com/IdaAspen/final-project-maria-ida">GitHub</a> for the repository.',
    Contributors:
      '<a href="https://github.com/IdaAspen">Ida Aspen</a> & <a href="https://github.com/hejmaria">Maria Petersson</a>'
  });
});

app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    const salt = bcrypt.genSaltSync();
    const strongPassword =
      /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,20}$/;

    // checking if password match strongPassword = regex
    if (password.match(strongPassword)) {
      const newUser = await new User({
        username,
        password: bcrypt.hashSync(password, salt)
      }).save();
      res.status(201).json({
        response: {
          userId: newUser._id,
          username: newUser.username,
          accessToken: newUser.accessToken
          // add storyCollection?
        },
        success: true
      });
    } else {
      throw 'Password must contain at least 8 characters, at least one letter, one number and one special character';
    }
  } catch (error) {
    res
      .status(400)
      .json({ response: 'problem with the signup', success: false });
  }
});

// POST request for signing in, match username and password
// if you include accessToken in your request = you are logged in
app.post('/signin', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        response: {
          userId: user._id,
          username: user.username,
          accessToken: user.accessToken
          // add storyCollection
        },
        success: true
      });
    } else {
      res.status(404).json({
        response: "Username or password doesn't match.",
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
});

// endpoint for images iported with cloudinary
app.post('/storyimg', parser.single('image'), async (req, res) => {
  try {
    const storyimg = await new StoryImg({
      name: req.body.filename,
      imageUrl: req.file.path
    }).save();
    res.json(storyimg);
  } catch (err) {
    res.status(400).json({ errors: err.errors });
  }
});

app.post('/storycollection', authenticateUser);
app.post('/storycollection', async (req, res) => {
  const { description, character } = req.body;
  console.log(description, req.user);
  try {
    const newStoryCollection = await new StoryCollection({
      description,
      character
    }).save();
    const user = await User.findByIdAndUpdate(req.user._id, {
      $push: {
        storyCollection: newStoryCollection
      }
    });
    res.status(201).json({ response: newStoryCollection, success: true });
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
});

// get bookshelf
app.get('/storycollection/userid/:userid', async (req, res) => {
  const { userId, storyCollectionId } = req.params;
  console.log(userId, storyCollectionId);
  try {
    const filteredUser = await User.findById(userId);

    if (filteredUser) {
      const filteredStoryCollection = await StoryCollection.findById(
        storyCollectionId
      );
      res
        .status(200)
        .json({ response: filteredStoryCollection, success: true });
    } else {
      res.status(404).json({ response: error, success: false });
    }
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
});

// PATCH req for adding a story-id to the user's id (the save-my-story-moment-button in the end)
app.patch(
  '/user/:userId/storycollection/:storyCollectionId',
  async (req, res) => {
    const { userId, storyCollectionId } = req.params;

    try {
      const filteredUser = await User.findById(userId);

      if (filteredUser) {
        const filteredStoryCollection = await StoryCollection.findById(
          storyCollectionId
        );
        //pushes the new story in to the user's collection"
        if (filteredStoryCollection) {
          const updateUser = await User.findByIdAndUpdate(
            userId,
            {
              $push: {
                storyCollection: filteredStoryCollection
              }
            },
            { new: true }
          );

          res.status(200).json({ response: 'User is updated', success: true });
        } else {
          res.status(404).json({ response: 'Story not found', success: false });
        }
      } else {
        res.status(404).json({ response: 'User not found', success: false });
      }
    } catch (error) {
      res
        .status(400)
        .json({ response: 'Some kind of error, sorry', success: false });
    }
  }
);

app.get('/character', async (req, res) => {
  try {
    res.status(200).json({ response: character, success: true });
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
});

app.get('/friend', async (req, res) => {
  try {
    res.status(200).json({ response: friend, success: true });
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
});

app.get('/friendname', async (req, res) => {
  try {
    res.status(200).json({ response: friendName, success: true });
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
});

app.get('/place', async (req, res) => {
  try {
    res.status(200).json({ response: place, success: true });
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
});

app.get('/sound', async (req, res) => {
  try {
    res.status(200).json({ response: sound, success: true });
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
});

app.get('/tool', async (req, res) => {
  try {
    res.status(200).json({ response: tools, success: true });
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
});

app.get('/feeling', async (req, res) => {
  try {
    res.status(200).json({ response: feeling, success: true });
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
});

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`);
});
