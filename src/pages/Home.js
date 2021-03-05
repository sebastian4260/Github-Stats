import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Heading1 } from "../components/text/Heading";
import gh from "../assets/image1.png";
import Navbar from "../components/containers/Navbar";
import Button from "../components/UI/Button";

const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;

function Home({ history }) {
  return (
    <StyledDiv>
      <Heading1
        style={css`
          width: 264px;
        `}
      >
        Welcome to Github Users
      </Heading1>
      <img src={gh} />
      <Button onClick={(e) => history.push("/search")}>Continue</Button>
      <Navbar
        css={css`
          position: fixed;
          bottom: 0;
          width: 100%;
        `}
      />
    </StyledDiv>
  );
}

export default Home;
