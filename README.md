Kara Howes: THEK-FRIENDS

Every year thousands of Children start the Swiss School system. The Thek (SchulThek - Swiss German for rucksack) is an integral part of the process. And an expensive one. These bags can cost 200-300 CHF (rougly 200-250 Euros). I wanted to build a resource where people could donate their used bags and give them a new home: to reduce waste and the financial burden for many families.
This project was built for the Final project of the Technigo Frontend Development Bootcamp. It was built during 4 weeks, by Kara Howes. It is a multi-page application, wherein the Frontend(FE) was built using React, Redux and styled with Styled Components. The backend (BE) was built using Node.js, Express and Mongoose. The application was deployed using Heroku, MongoDB and Netlify.

-------- FEATURES------------

MODELS:

- Member
- Bag
- Inspiration


(REST-Ful) ENDPOINTS:

 For members: 
- /signup - POST request to allow a user to register
- /signin - POST request allows a member to sign in, with an access token as Header
- /members - GET request allows access to all members. Authentication required.
- /member/:memberId - GET request - necessary for profile page. Authentication required.

For bags:

- /bags - GET and POST request, allows members to receive and send data. Authentication required.
- /bag/:_id GET request - to access information on one bag
- /deleteBag/:_id - DELETE request, autenticated user can delete a bag
- /searchBags - a GET request, authenticated user can search the bags database using queries, to return a particular coloured-bag from a partilcular Location.
- /bags/:memberId - GET request, a member can view the bag they have added to the system
- /reserveBag - POST request, an aunthenticated member can reserve a bag. This is confirmed by email to the recipient

For affirmations:

- /inspiration - GET request which returns one random affirmation.

---------THE APPROACH ------------

The idea was to create a resource whereby authenticated users could access the bags in the database, or indeed add to the bags collection. Therefore it is necessary for the User to create an account and therefore become a Thek-Friend. Depending on the users Status (donor or recipient), their profile page (and therefore what they can access) differs:

 - A donor can add a bag to the collection, view any bags they have added and view all of the bags in the collection.
 - A recipient can pick their bag from the collection and view all bags. 

 In addition, I wanted to build a child-appropriate affirmation generator. I hard-coded the json data, seeded the database and built a function for any user (authentication not required) to access the affirmations.
 
 The Thek-Friends website includes and Introduction page, About section, Register/Log-in page and an Inspiration/Affirmation page. Navigation to these pages is by useNavigate from the React-Router-Dom package.

 The BE of this project was built using Node.js, Express, Mongoose and a few libraries (Nodemailer, crypto) The Database was built using MongoDB.
 The FE was built using React, Redux and various libraries (StyledComponents, Lottie Animations, Sweetalert, Moment). 

The accessibility of the website was checked using the WAVE Chrome extension, which checked the HTML of the website.

I would like to thank Amanda Tilly for allowing me too use her Hamburger/Menu reuseable component, Linnea Isebrink for introducing me to the SweetAlert library and to all of my fellow Hippos for their help, advice and support throughout the Bootcamp.

----- TECH & TOOLS -----

Tech:

JavaScript ES6
React
Redux
React router
Node express
MongoDB / Mongoose
Styled components
Lottie,
SweetAlert,
Moment,
Nodemailer
Crypto

Tools:

Postman
VS Code
GitHub
MongoDB Compass
Figma
Slack
Stack Overflow

----------DEPLOYMENT------------
BE:
https://kh-thek-friends.herokuapp.com/

FE:
https://thek-friends.netlify.app/




