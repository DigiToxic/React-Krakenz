import React from 'react'
import styled from "styled-components";

function Soon() {
  return (
    <Container>
    <Door>
      <p>Mint soon...</p>
    </Door>
  </Container>
  )
}

export default Soon

const Container = styled.div`
  text-align: center;
  height: 586px;
  
  p {
    font-size: 20px;
    font-family: Kongtext;
  }

  @media (max-width: 2200px) {
    height: 909px;
  }

  @media (max-width: 1880px) {
    height: 715px;
  }

  @media (max-width: 1710px) {
    height: 668px;
  }

  @media (max-width: 1500px) {
    height: 502px;
  }

  @media (max-width: 1101px) {
    height: 499px;
  }

  @media (max-width: 1030px) {
    height: 514px;
  }
`;

const Door = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 600px;
  background-image: url("https://static.wixstatic.com/media/a67ef4_6805d7716e864acc9dc32ec420c87f29~mv2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 900px;

  @media (max-width: 2200px) {
    background-size: 1200px;
    height: 900px;
  }

  @media (max-width: 1881px) {
    background-size: 1000px;
    height: 700px;
  }

  @media (max-width: 1720px) {
    background-size: 1000px;
  }

  @media (max-width: 1500px) {
    background-size: 800px;
    height: 550px;
  }

  @media (max-width: 1101px) {
    background-size: 700px;
    height: 500px;
  }

  @media (max-width: 921px) {
    background-size: 700px;
  }

  @media (max-width: 440px) {
    background-size: 700px;
  }
`;