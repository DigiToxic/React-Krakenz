import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Body() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    // update the position state variable to the new position
    setPosition({ x: 0, y: -325 });
  };

  useEffect(() => {
    // apply the transition when the position state variable updates
    const element = document.getElementById("my-element");
    element.style.transition = "all 0.5s";
    element.style.transform = `translate(${position.x}px, ${position.y}px)`;
  }, [position]);

  return (
    <Container>
      <Head onClick={() => setIsVisible(true)}>
        <img
          id="my-element"
          src="/images/Krakenz.png"
          onClick={handleClick}
          alt=""
        />
      </Head>

      <Lore isVisible={isVisible}>
        <Image1>
          <img src="/Lore/Day1.png" alt="" />
        </Image1>
        <Image2>
          <img src="/Lore/Day3.png" alt="" />
        </Image2>
        <Image3>
          <img src="/Lore/Day6.png" alt="" />
        </Image3>
        <Image4>
          <img src="/Lore/Day15.png" alt="" />
        </Image4>
        <Image5>
          <img src="/Lore/Day24.png" alt="" />
        </Image5>
        <Image6>
          <img src="/Lore/Day32.png" alt="" />
        </Image6>
      </Lore>
    </Container>
  );
}

export default Body;

const Container = styled.div`
  width: 100%;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 585px;

  img {
    width: 500px;
    cursor: pointer;
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

const Lore = styled.div`
  flex-direction: column;
  margin-top: -550px;
  display: ${(props) => (props.isVisible ? "flex" : "none")};

  img {
    width: 500px;
    margin-bottom: 50px;
  }

  @media (max-width: 980px) {
    align-items: center;
  }

  @media (max-width: 501px) {
    img {
      width: 400px;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 401px) {
    img {
      width: 350px;
    }
  }
`;

const Image1 = styled.div`
  display: flex;
  justify-content: start;
  margin-left: 200px;

  @media (max-width: 1385px) {
    margin-left: 100px;
  }

  @media (max-width: 1200px) {
    margin-left: 50px;
  }

  @media (max-width: 1081px) {
    margin-left: 0px;
  }

  @media (max-width: 980px) {
    margin-bottom: 300px;
  }
`;

const Image2 = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 200px;
  margin-top: -300px;

  @media (max-width: 1385px) {
    margin-right: 100px;
  }

  @media (max-width: 1200px) {
    margin-right: 50px;
  }

  @media (max-width: 1081px) {
    margin-right: 0px;
  }

  @media (max-width: 980px) {
    margin-bottom: 300px;
  }
`;

const Image3 = styled.div`
  display: flex;
  justify-content: start;
  margin-left: 200px;
  margin-top: -300px;

  @media (max-width: 1385px) {
    margin-left: 100px;
  }

  @media (max-width: 1200px) {
    margin-left: 50px;
  }

  @media (max-width: 1081px) {
    margin-left: 0px;
  }

  @media (max-width: 980px) {
    margin-bottom: 300px;
  }
`;

const Image4 = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 200px;
  margin-top: -300px;

  @media (max-width: 1385px) {
    margin-right: 100px;
  }

  @media (max-width: 1200px) {
    margin-right: 50px;
  }

  @media (max-width: 1081px) {
    margin-right: 0px;
  }

  @media (max-width: 980px) {
    margin-bottom: 300px;
  }
`;

const Image5 = styled.div`
  display: flex;
  justify-content: start;
  margin-left: 200px;
  margin-top: -300px;

  @media (max-width: 1385px) {
    margin-left: 100px;
  }

  @media (max-width: 1200px) {
    margin-left: 50px;
  }

  @media (max-width: 1081px) {
    margin-left: 0px;
  }

  @media (max-width: 980px) {
    margin-bottom: 300px;
  }
`;

const Image6 = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 200px;
  margin-top: -300px;

  @media (max-width: 1385px) {
    margin-right: 100px;
  }

  @media (max-width: 1200px) {
    margin-right: 50px;
  }

  @media (max-width: 1081px) {
    margin-right: 0px;
  }
`;