import styled from '@emotion/styled';

const sizes = {
  small: { width: '40px' },
  default: { width: '120px' },
};

const StyledImg = styled.div`
  width: ${(props) =>
    sizes[props.size] ? sizes[props.size].width : sizes.default.width};
  height: ${(props) =>
    sizes[props.size] ? sizes[props.size].width : sizes.default.width};
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#333')};
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: white;
    font-weight: bold;
    font-size: 30px;
  }
`;

function Avatar({ src, placeholder, size }) {
  return (
    <StyledImg size={size} src={src}>
      {!src && <p>{placeholder}</p>}
    </StyledImg>
  );
}

export default Avatar;
