import styled from 'styled-components';

export const Container = styled.div`
  
  width: 500px;
  height: auto;
  margin-top: ${p => p.theme.space[6]}px;
  margin-left: auto;
  margin-right: auto;
  
`;

export const Title = styled.h1`
  
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-align: center;
`;
