import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Footer } from '../components/Footer';
import { DetailTune } from '../components/DetailTune';
import { Header } from '../components/Header';

export const DetailedTunesScreen = () => {
  const { tune } = useParams();
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
        <DetailTune tune={tune} />
      </InnerContainer>
      <Footer />
    </Container>
  );
};

const InnerContainer = styled.div`
  margin: 0 auto;
  height: 100%;

  /* Mobil */
  @media (min-width: 0px) and (max-width: 767px) {
    min-width: 200px;
    max-width: 300px;
  }

  /* Liten Dator - */
  @media (min-width: 992px) {
    min-width: 500px;
    max-width: 700px;
  }

  /* Stor Dator - */
  @media (min-width: 1200px) {
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;
