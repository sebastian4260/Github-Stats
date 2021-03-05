import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Navbar from "../components/containers/Navbar";
import Card from "../components/containers/Card";
import Avatar from "../components/UI/Avatar";
import Icon from "../components/UI/Icon";
import { ContentSmall } from "../components/text/Content";
import { toggleFavorite } from "../helpers/favorites";

const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  gap: 60px;
  & > .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 106px);
    width: 100%;
    grid-gap: 16px;
    justify-content: center;
  }
`;

function Favorites() {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <StyledDiv>
      <div className="cards-container">
        {favorites.map((favorite) => (
          <Card key={favorite.id} size="small">
            <Avatar src={favorite.avatar_url} placeholder="DA" />
            <ContentSmall>{favorite.name}</ContentSmall>
            <Icon
              onClick={() => toggleFavorite(favorites, favorite, setFavorites)}
              type="star"
              fill="#F2C94C"
              size={24}
            />
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

export default Favorites;
