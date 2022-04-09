import React from 'react';
import { Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import styled from 'styled-components/native';

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;
const Image = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 6px;
`;
const WebViewImage = styled(WebView)`
  width: 120px;
  height: 120px;
`;
const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.button};
`;

export const MapCallout = ({ restaurant }) => {
  return (
    <Container>
      {
        Platform.OS === 'android' ? (
          <WebViewImage
            source={{ html: `<img src='${restaurant.photos[0]}' />` }}
          />
        ) : <Image source={{ uri: restaurant.photos[0] }} />
      }
      <Subtitle>{restaurant.name}</Subtitle>
    </Container>
  );
};
