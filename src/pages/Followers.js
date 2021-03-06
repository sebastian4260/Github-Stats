import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Navbar from '../components/containers/Navbar';
import Card from '../components/containers/Card';
import Avatar from '../components/UI/Avatar';
import { ContentSmall } from '../components/text/Content';
import { Heading1 } from "../components/text/Heading";


const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 60px;
  gap: 60px;
  & > .cards-container {
    display: grid;
    grid-template-rows: repeat(300px, 56px);
    width: 100%;
    grid-gap: 16px;
    justify-content: center;
  }
`;

function Followers() {
  const [followers] = useState(
    JSON.parse(localStorage.getItem('followers')) || []
  );

  useEffect(() => {
    localStorage.setItem('followers', JSON.stringify(followers));
  }, [followers]);

  return (

    <StyledDiv>
      <Heading1
        style={css`
          width: 264px;
          position: fixed;
          top: 0;
          width: 100%;
        `}
      >
        Followers
      </Heading1>
      
      
      <div className="cards-container">
        {followers.map((follower) => (
          <Card key={follower.id} size="small">
            <Avatar size="small" src={follower.avatar_url} placeholder="DA" />
            <ContentSmall>{follower.name}</ContentSmall>
            <ContentSmall>{follower.username}</ContentSmall>

            
          </Card>
        ))}
      </div>
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

export default Followers;