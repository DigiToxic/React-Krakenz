import React from "react";
import styled from "styled-components";

function Body() {
  return (
    <Container>
      <Head>
        <img
          src="/images/Krakenz.png"
          alt=""
        />
      </Head>
    </Container>
  );
}

export default Body;

const Container = styled.div`
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 500px;
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

  @media (max-width: 1540px) {
    height: 586px;
  }

  @media (max-width: 1500px) {
    height: 499px;
  }

  @media (max-width: 1030px) {
    height: 504px;
  }

  @media (max-width: 530px) {
    height: 508px;
  }

  @media (max-width: 521px) {
    img {
      width: 400px;
    }
  }

  @media (max-width: 431px) {
    img {
      width: 350px;
    }
  }
`;