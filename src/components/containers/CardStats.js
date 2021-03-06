import styled from "@emotion/styled";

const sizes = {
  default: { width: "140px" , height: "140px" },
  small: { width: "300px" , height:"56px" },
  
};


const StyledCardStats = styled.div`
  width: ${(props) =>
    sizes[props.size] ? sizes[props.size].width : sizes.default.width};
  height: ${(props) =>
    sizes[props.size] ? sizes[props.size].height : sizes.default.height};  
  background: #ffffff;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 13px;
`;

function CardStats({ children, size }) {
  return <StyledCardStats size={size}>{children}</StyledCardStats>;
}

export default CardStats;
