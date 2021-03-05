import styled from "@emotion/styled";

const StyledImg = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#333")};
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: white;
    font-weight: bold;
    font-size: 30px;
  }
`;

function Avatar({ src, placeholder }) {
  return <StyledImg src={src}>{!src && <p>{placeholder}</p>}</StyledImg>;
}

export default Avatar;
