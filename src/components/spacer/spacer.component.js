import React from 'react';
import styled, { useTheme } from 'styled-components/native';

const sizeVariant = {
  none: 0,
  small: 1,
  medium: 2,
  large: 3,
  xLarge: 4
};

const positionVariant = {
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
  all: 'margin'
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}: ${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ children, position, size }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);

  return (
    <SpacerView variant={variant}>{children}</SpacerView>
  );
};

Spacer.defaultProps = {
  position: 'all',
  size: 'small'
};
