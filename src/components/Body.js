import React from "react";
import styled from "styled-components";

function Body() {
  return (
    <Container>
      <Head>
        <img src="/images/Krakenz.png" alt="" />
      </Head>
    </Container>
  );
}

export default Body;

const Container = styled.div`
@media (max-width: 2200px) {
  height: 800px;
}

@media (max-width: 1880px) {
  height: 715px;
}
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 500px;
  }

  @media (max-width: 2200px) {
    height: 800px;
  }

  @media (max-width: 1880px) {
    height: 580px;
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
