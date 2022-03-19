import React from 'react';
import { Card as NativePaperCard } from 'react-native-paper';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';

import star from '../../../../assets/star';
import openNow from '../../../../assets/openNow';

const Card = styled(NativePaperCard)`
  margin-bottom: ${({ theme }) => theme.space[2]};
`;
const Info = styled.View`
  padding: ${({ theme }) => theme.space[1]} 0;
`;
const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
`;
const Title = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.title};
`;
const Address = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.body};
`;
const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const SectionEnd = styled.View`
  flex-direction: row;
`;
const Rating = styled.View`
  flex-direction: row;
  padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[0]};
`;
const TempClosed = styled.Text`
  color: ${({ theme }) => theme.colors.text.error};
  font-family: ${({ theme }) => theme.fonts.body};
`;

export const RestaurantComponent = ({ restaurant = {} }) => {
  // Set defaults
  const {
    name = 'Some Restaraunt',
    icon,
    photos = ['https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80'],
    address = 'restaurant address',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <Card elevation={5}>
      <Card.Cover source={{ uri: photos[0] }} />
      <Card.Content>
        <Info>
          <Title>{name}</Title>
          <Section>
            <Rating>
              {
                ratingArray.map((item, index) => <SvgXml key={index} xml={star} height={20} width={20} />)
              }
            </Rating>
            <SectionEnd>
              {
                isClosedTemporarily
                  ? <TempClosed variant='label'>CLOSED TEMPORARILY</TempClosed>
                  : <SvgXml xml={openNow} height={20} width={20} />
              }
            </SectionEnd>
          </Section>
          <Address>{address}</Address>
        </Info>
      </Card.Content>
    </Card>
  );
};
