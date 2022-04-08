import React from 'react';
import styled, { useTheme } from 'styled-components';
import { ActivityIndicator } from 'react-native-paper';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingIndicator = () => {
  const theme = useTheme();
  return (
    <Container>
      <ActivityIndicator
        animating
        color={theme.colors.ui.secondary}
        size={50}
      />
    </Container>
  );
};
