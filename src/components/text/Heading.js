import styled from "@emotion/styled";

const StyledH1 = styled.h1`
  font-weight: normal;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  ${(props) => props.style};
`;

const StyledH2 = styled.h2`
  font-weight: normal;
  font-size: 28px;
  line-height: 35px;
  text-align: center;
  ${(props) => props.style};
`;

function Heading1({ children, style }) {
  return <StyledH1 style={style}>{children}</StyledH1>;
}

function Heading2({ children, style }) {
  return <StyledH2 style={style}>{children}</StyledH2>;
}

export { Heading1, Heading2 };
