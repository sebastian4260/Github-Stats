/** @jsxImportSource @emotion/react */
import {
  RiHome2Fill,
  RiStarFill,
  RiStarLine,
  RiUserHeartFill,
  RiSearchFill,
} from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { css } from "@emotion/react";

const iconSet = {
  home: RiHome2Fill,
  star: RiStarFill,
  starLine: RiStarLine,
  followers: FaUsers,
  followings: RiUserHeartFill,
  search: RiSearchFill,
  github: FaGithub,
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
