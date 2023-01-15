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
          <img src="/Lore/Day1.png" alt="" className="Day" />
        </Image1>
        <Image2>
          <img src="/Lore/Day3.png" alt="" className="Day" />
        </Image2>
        <Image3>
          <img src="/Lore/Day6.png" alt="" className="Day" />
        </Image3>
        <Image4>
          <img src="/Lore/Day15.png" alt="" className="Day" />
        </Image4>
        <Image5>
          <img src="/Lore/Day24.png" alt="" className="Day" />
        </Image5>
        <Image6>
          <img src="/Lore/Day32.png" alt="" className="Day" />
        </Image6>
        <Image7>
          <img src="/Lore/Day... .png" alt="" className="Day" />
        </Image7>
        <Paper>
          <p>
            The captain strolled across his chambers to where the locket had sat
            for the many weeks they were at sea. He picked it up and clasped it
            within the palm of his hand. No vibration. No hum. Only the
            deafening silence that had now filled the air. He eyed the face of
            the locket; It's shiny surface glistened in the rays of light
            projecting through the porthole. <br /> <br /> He stepped out onto
            the main deck and gazed out to the horizon - the sun was setting.
            What could this mean? Why had the locket stopped humming now of all
            moments?! <br /> <br /> Suddenly, a sense of pressure filled his
            chest. He could feel the hum. The same hum that the locket had
            resonated with, but now deep within him. The captain placed his hand
            on his chest. <br /> <br /> "You seek treasure?", a deep voice
            asked. He looked around, unsure of its source. "Surely this is all
            in my head", he thought. "I'm going mad." <br /> <br /> "Are you?",
            questioned the voice again. "You continue on this journey but for
            what? You blindly chase greed in spite of those around you. They
            starve yet you continue to feed them the fruits of your foolish
            lies." <br /> <br /> The captain's chest began to fill with a heavy
            sense of dread. The feeling of impending doom grew within him.{" "}
            <br /> <br /> The voice continued, each word booming with an
            ear-splitting vibration. "If you listen closely, the sound of the
            locket's gentle hum may guide you to riches beyond your wildest
            dreams". The captain could no longer catch his breath. Long,
            writhing shadows grew around him, appearing to engulf the entire
            ship in darkness. <br /> <br /> "But not before the beholder faces
            true judgement…" <br /> <br /> After months of enduring the stormy
            seas in search of the fabled Memeland, the moment of judgement was
            now... <br /> <br /> The voice bellowed once more: <br /> <br />{" "}
            "You are UNWORTHY!"
          </p>
          <img src="/Lore/Carnage.gif" alt="" className="Krakenz" />
        </Paper>
      </Lore>
    </Container>
  );
}

export default Body;

const Container = styled.div`
  min-height: 586px;
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

  @media (max-width: 403px) {
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

  @media (max-width: 980px) {
    margin-bottom: 300px;
  }
`;

const Image7 = styled.div`
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
`;

const Paper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  color: white;
  height: 1600px;
  border-radius: 100px;
  margin-right: 10px;
  margin-left: 10px;

  p {
    width: 95%;
    font-size: 17px;
    font-family: Kongtext;
    line-height: 30px;
    text-align: center;
  }

  @media (max-width: 1630px) {
    height: 1650px;
  }

  @media (max-width: 1541px) {
    height: 1700px;
  }

  @media (max-width: 1326px) {
    height: 1750px;
  }

  @media (max-width: 1308px) {
    height: 1800px;
  }

  @media (max-width: 1218px) {
    height: 1850px;
  }

  @media (max-width: 1094px) {
    height: 1900px;
  }

  @media (max-width: 1023px) {
    height: 1950px;
  }

  @media (max-width: 1005px) {
    height: 2050px;
  }

  @media (max-width: 970px) {
    height: 1900px;

    p {
      font-size: 15px;
    }
  }

  @media (max-width: 904px) {
    height: 1950px;
  }

  @media (max-width: 888px) {
    height: 2050px;
  }

  @media (max-width: 888px) {
    height: 1900px;

    p {
      font-size: 13px;
    }
  }

  @media (max-width: 816px) {
    height: 1850px;
  }

  @media (max-width: 787px) {
    height: 1900px;
  }

  @media (max-width: 772px) {
    height: 2000px;
  }

  @media (max-width: 746px) {
    height: 2050px;
  }

  @media (max-width: 675px) {
    height: 2000px;

    p {
      font-size: 12px;
    }
  }

  @media (max-width: 639px) {
    height: 2000px;
  }

  @media (max-width: 626px) {
    height: 2050px;
  }

  @media (max-width: 585px) {
    height: 2075px;
  }

  @media (max-width: 563px) {
    height: 2100px;
  }
  
  @media (max-width: 550px) {
    height: 2150px;
  }

  @media (max-width: 537px) {
    height: 2200px;
  }

  @media (max-width: 487px) {
    height: 2300px;
  }

  @media (max-width: 449px) {
    height: 2400px;
  }

  @media (max-width: 436px) {
    height: 2450px;
  }

  @media (max-width: 424px) {
    height: 2500px;
  }

  @media (max-width: 399px) {
    height: 2600px;
  }
`;
