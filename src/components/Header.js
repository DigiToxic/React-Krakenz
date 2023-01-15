import React, { useState } from "react";
import styled from "styled-components";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container id="Head">
      <Button>
        <a href="/">
          <img src="/images/capitainz.png" alt="" className="Capitainz" />
        </a>
        <a href="/mint">
          <img src="/images/mint.png" alt="" className="mint" />
        </a>
      </Button>

      <OpenWrapper>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          color="white"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setBurgerStatus(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
      </OpenWrapper>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            height="50px"
            width="50px"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setBurgerStatus(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </CloseWrapper>
        <a href="/">
          <li onClick={() => setBurgerStatus(false)}>Captainz Notes</li>
        </a>
        <a href="/mint">
          <li onClick={() => setBurgerStatus(false)}>Mint</li>
        </a>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: end;
`;

const Button = styled.div`
  display: flex;
  justify-content: end;

  @media (max-width: 1101px) {
    display: none;
  }
`;

const OpenWrapper = styled.div`
  display: none;

  svg {
    width: 75px;
    height: 75px;
  }

  @media (max-width: 1101px) {
    display: initial;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgb(2, 7, 93);
  color: white;
  width: 35%;
  z-index: 2;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s;
  display: none;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    font-weight: bold;
  }

  img {
    width: 40px;
    margin-right: 20px;
    margin-top: 40px;
  }

  @media (max-width: 1101px) {
    display: initial;
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: end;
`;
