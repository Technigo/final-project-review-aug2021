import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Profile } from '../components/Profile';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TunesIncommon } from '../components/TunesIncommon';

export const DetailedMemberScreen = () => {
  const { member } = useParams();
  const navigate = useNavigate();

  const accessToken = useSelector((store) => store.member.accessToken);

  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    }
  }, [accessToken, navigate]);

  return (
    <Container>
      <Header />
      <InnerContainer>
        <Profile member={member} />
      </InnerContainer>
      <Img>
        <div className="overlay">
          <InnerContainer>
            <TunesIncommon member={member} />
          </InnerContainer>
        </div>
      </Img>

      <Footer />
    </Container>
  );
};

const Img = styled.div`
  background-image: url('/yan-ming.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0px;

  .overlay {
    background-color: #04040469;

    margin: 0px;
    width: 100%;
    height: 100%;
  }

  /* Liten Dator - */
  @media (min-width: 992px) {
    .overlay {
      background-color: #04040469;

      margin: 0px;
      width: 100%;
      height: 100%;
      padding-top: 200px;
      padding-bottom: 200px;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;
const InnerContainer = styled.div`
  min-width: 334px;
  max-width: 500px;
  margin: 0 auto;
  height: 100%;
  /* background-color: #ff885e; */
  /* border: 3px solid red;*/
  @media (min-width: 0px) and (max-width: 767px) {
    min-width: 200px;
    max-width: 300px;
  }

  /* Liten Dator - */
  @media (min-width: 992px) {
  }

  /* Stor Dator - */
  @media (min-width: 1200px) {
  }
`;
