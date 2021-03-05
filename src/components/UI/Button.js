import styled from "@emotion/styled";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  height: 36px;
  background: #2d9cdb;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  border: none;
  outline: none;
  transition: background 200ms;
  &:hover {
    background: #2db2db;
  }
`;

function Button(props) {
  return <StyledButton {...props} />;
}

export default Button;
