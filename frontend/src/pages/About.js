import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <BaseContainer>
      <SectionGreen>
        <h1>Om / About</h1>
        <SectionAbout>
          <h2>Om Sagomaskinen</h2>
          <p>
            Med sagomaskinen kan du bygga ihop din egen saga. Du får göra olika
            val, och grejerna och figurerna du väljer dyker upp i sagan. Det
            kommer en liten bit text i taget, och i slutet kan du läsa hela
            sagan. Efter det kan du bygga en till saga, och en till och en till
            och en till.
          </p>

          <h3>Vem har gjort Sagomaskinen?</h3>
          <p>
            Vi som ligger bakom den här sidan är Ida Aspen och Maria Petersson.
            Vi är webbutvecklare och sagomaskinen är vårt slutprojekt under
            Technigo frontend bootcamp. Idén till sagomaskinen kommer från våra
            barn. De har fått vara med hitta på olika val som ska göras i sagan,
            och barnens namn har också smugit sig in i några av valen.
            Sagomaskinen är byggd med React redux, Node.js, RESTful API,
            MongoDB, mongoose, cloudinary och styled components.
          </p>
        </SectionAbout>
        <AboutImg>
          <div>
            <img
              src="https://res.cloudinary.com/cloudinary-story/image/upload/v1644397466/storyimg/h1qtfcrwz9dve7bl77dh.jpg"
              alt="Ida Aspen"
            />
            <p>Ida Aspen</p>
            <p>
              <a href="mailto:idaaspen@outlook.com">Mail </a>
              <a
                href="https://www.linkedin.com/in/idaaspen/"
                tabindex="0"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin{' '}
              </a>
              <a
                href="https://github.com/IdaAspen"
                tabindex="0"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/cloudinary-story/image/upload/v1644397601/storyimg/xi2pdqemgz0kjob5vtlp.jpg"
              alt="Maria Petersson"
            />
            <p>Maria Petersson</p>
            <p>
              <a href="mailto:maria@wearebridget.com">Mail </a>
              <a
                href="https://www.linkedin.com/in/maria-petersson-copy-frontend-developer/"
                tabIndex="0"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin{' '}
              </a>
              <a
                href="https://github.com/hejmaria"
                tabIndex="0"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </p>
          </div>
        </AboutImg>
        <SectionAbout>
          <h2>About Sagomaskinen</h2>
          <p>
            Sagomaskinen means The story machine, and allows you to build your
            own story. You can choose between different characters, things and
            places - and your choices show up in the story. In the end you can
            read the finished result - and the you can build another one, and
            another one, and another one.
          </p>

          <h3>Who made this?</h3>
          <p>
            We who built Sagomaskinen are Ida Aspen and Maria Petersson. We are
            frontend developers and this is our final project in the Technigo
            frontend bootcamp. The idea to this project comes from our kids.
            They have been a part in choosing som of the element and any you
            might spot their names in the storyline. This site is built with
            React redux, Node.js, RESTful API, MongoDB, mongoose, cloudinary and
            styled components.
          </p>
        </SectionAbout>
      </SectionGreen>
    </BaseContainer>
  );
};

export default About;

const BaseContainer = styled.div`
  display: grid;
  padding: 2%;
  width: 80%;
  margin: 0 auto;

  h3 {
    margin-left: 2%;
  }
  @media (max-width: 765px) {
    width: 90%;
  }
`;
const SectionAbout = styled.div`
  padding: 5% 0%;
`;

const AboutImg = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;

  img {
    width: 150px;
    height: 150px;

    border-radius: 50%;
    box-shadow: 1px 1px 5px 0px rgb(0 0 0 / 50%);

    @media (max-width: 767px) {
      width: 100px;
      height: 100px;
    }
  }
  p {
    margin: 0%;
  }
  a {
    color: var(--focus);
    text-decoration: none;
  }

  a:hover {
    color: var(--background);
  }
  @media (max-width: 765px) {
    font-size: 10px;
  }
`;

const SectionGreen = styled.div`
  padding: 3% 9% 3%;
  border-radius: 10px;
  box-shadow: 0 2px 4px 2px rgb(66 66 66 / 16%);
  min-height: 60vh;
  background-color: var(--green);

  h1 {
    padding-top: 5%;
  }

  h3 {
    margin: 1%;
  }

  p {
    padding-bottom: 5%;

    @media (max-width: 765px) {
      font-size: 12px;
    }
  }
`;
