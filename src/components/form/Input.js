import styled from "@emotion/styled";

const StyledInput = styled.input`
  padding: 4px 8px;
  background: #ffffff;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
  border: 1px solid transparent;
  transition: border 200ms;
  &:focus {
    outline: none;
    border: 1px solid #2d9cdb;
  }
`;

function Input(props) {
  return <StyledInput {...props} />;
}

export default Input;
