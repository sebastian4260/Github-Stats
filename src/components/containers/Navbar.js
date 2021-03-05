/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
import Icon from "../UI/Icon";

const StyledDiv = styled.div`
  height: 66px;
  padding: 8px 0;
  display: flex;
  justify-content: center;
  background: #f2f2f2;
  box-shadow: 0px -2px 0px rgba(0, 0, 0, 0.25);
  .icons-container {
    width: 250px;
    height: 50px;
    display: flex;
    justify-content: space-between;
  }
`;

function Navbar({ css }) {
  const location = useLocation();
  const selected = location.pathname;
  const selectedOptions = {
    home: "/",
    search: "/search",
    star: "/favorites",
  };
  const icons = ["home", "search", "star"];
  return (
    <StyledDiv css={css}>
      <div className="icons-container">
        {icons.map((icon) => (
          <Link to={selectedOptions[icon]} key={icon}>
            <Icon
              type={icon}
              fill={selected === selectedOptions[icon] ? "#828282" : "#BDBDBD"}
              size={50}
            />
          </Link>
        ))}
      </div>
    </StyledDiv>
  );
}

export default Navbar;
