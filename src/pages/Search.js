import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Navbar from '../components/containers/Navbar';
import Input from '../components/form/Input';
import Icon from '../components/UI/Icon';
import { Content, ContentLargeBold } from '../components/text/Content';
import Avatar from '../components/UI/Avatar';
import CardStats from '../components/containers/CardStats';
import { Heading2 } from '../components/text/Heading';
import GithubService from '../services/github_service';
import { getFavorite, toggleFavorite } from '../helpers/favorites';

const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
  gap: 16px;
  & > .results {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    & > .username {
      display: flex;
      gap: 4px;
    }
    & > .follow-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 17px 16px;
      margin-bottom: 80px;
    }
  }
`;

function getLocationQuery(location) {
  const values = location.search.slice(1);
  const [_, value] = values.split('=');
  return value || '';
}

function Search({ history, location }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [query, setQuery] = useState(getLocationQuery(location));
  let [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );

  useEffect(() => {
    async function fetchUser() {
      const gs = new GithubService();
      setLoading(true);
      setData(await gs.profile(query));
      history.push(`/search?user=${query}`);
      setLoading(false);
    }

    let timerID;

    if (query !== '') {
      timerID = setTimeout(fetchUser, 1000);
    }

    return () => clearTimeout(timerID);
  }, [query]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const NoData = () => (
    <>
      <Icon type="github" size={120} />
      <ContentLargeBold>
        {loading ? 'Retrieving user...' : 'No users...'}
      </ContentLargeBold>
    </>
  );

  const ProfileView = () => {
    const iconsSet = [
      {
        type: 'followers',
        size: 50,
        color: '#2D9CDB',
        heading: data.followers,
        content: 'followers',
      },
      {
        type: 'followings',
        size: 50,
        color: '#F2994A',
        heading: data.following,
        content: 'followings',
      },
      {
        type: 'repository',
        size: 50,
        color: '#219653',
        heading: data.public_repos,
        content: 'public repos',
      },
      {
        type: 'code',
        size: 50,
        color: '#828282',
        heading: data.public_gists,
        content: 'public gists',
      },
    ];
    return (
      <>
        <Avatar src={data.avatar_url} placeholder={'NU'} />
        <div className="username">
          <ContentLargeBold>{data.name}</ContentLargeBold>
          <Icon
            onClick={() => toggleFavorite(favorites, data, setFavorites)}
            type={getFavorite(favorites, data) ? 'star' : 'starLine'}
            size={25}
            fill="#F2C94C"
          />
        </div>
        <Content
          css={css`
            min-height: 60px;
          `}
        >
          {data.bio}
        </Content>
        <div className="follow-container">
          {iconsSet.map((icon) => (
            <CardStats>
              <Icon type={icon.type} size={icon.size} fill={icon.color} />
              <Heading2>{icon.heading}</Heading2>
              <Content>{icon.content}</Content>
            </CardStats>
          ))}
        </div>
      </>
    );
  };

  return (
    <StyledDiv>
      <Input value={query} onChange={(e) => setQuery(e.target.value)} />
      <div className="results">
        {!data && <NoData />}
        {data && <ProfileView />}
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

export default Search;
