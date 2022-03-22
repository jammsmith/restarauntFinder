import styled from 'styled-components';

export const View = styled.View`
  ${({ row }) => row && 'flex-direction: row'}
`;
