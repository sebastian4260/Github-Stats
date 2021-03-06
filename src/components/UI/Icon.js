/** @jsxImportSource @emotion/react */
import {
  RiHome2Fill,
  RiStarFill,
  RiStarLine,
  RiUserHeartFill,
  RiGitRepositoryFill,
  RiCodeBoxFill,
  RiSearchFill,
} from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { IoIosGitBranch } from 'react-icons/io';
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';

import { css } from '@emotion/react';

const iconSet = {
  home: RiHome2Fill,
  star: RiStarFill,
  starLine: RiStarLine,
  followers: HiUserGroup,
  followings: RiUserHeartFill,
  search: RiSearchFill,
  github: FaGithub,
  repository: RiGitRepositoryFill,
  code: RiCodeBoxFill,
  branch: IoIosGitBranch,
  back: IoChevronBackSharp,
  forward: IoChevronForwardSharp,
};

function Icon({ type, fill, size, onClick }) {
  const ComponentToRender = iconSet[type];
  return (
    <ComponentToRender
      onClick={onClick}
      css={css`
        fill: ${fill};
        font-size: ${size}px;
      `}
    />
  );
}

export default Icon;
