import styled from "styled-components";
const generateFontColor = (color, alpha = 1) => {
  if (color === 'white') {
    return `rgba(255,255,255,${Number(alpha)})`
  }
  else if (color === 'dark') {
    return `rgba(255,255,255,${Number(alpha)})`
  }
}
export const Text = styled.p`
  font-size:${props => `var(--${props.size})`};
  font-weight:${props => `var(--${props.weight})`};
  line-height:${props => `var(--${props.lineHeight})`};
  color:${props => generateFontColor(props.color, props.alpha)}
`;
