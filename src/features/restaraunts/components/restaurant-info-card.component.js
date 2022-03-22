import React from 'react';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';

import { View } from '../../../components/layout/view.component';
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import star from '../../../../assets/star';
import openNow from '../../../../assets/openNow';

import { Section, Icon } from './restaurant-info-card.styles';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
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
    <Spacer position='bottom' size='medium'>
      <Card elevation={5}>
        <Card.Cover source={{ uri: photos[0] }} />
        <Card.Content>
          <Spacer position='top' size='small'>
            <Text variant='label'>{name}</Text>
            <Section row>
              <Spacer position='top' size='small'>
                <View row>
                  {
                    ratingArray.map((item, index) => <SvgXml key={index} xml={star} height={20} width={20} />)
                  }
                </View>
              </Spacer>
              <View row>
                {
                  isClosedTemporarily && <Text variant='error'>CLOSED TEMPORARILY</Text>
                }
                {
                  !isClosedTemporarily && isOpenNow && <SvgXml xml={openNow} height={20} width={20} />
                }
                <Spacer position='left' size='large'>
                  <Icon source={{ uri: icon }} />
                </Spacer>
              </View>
            </Section>
            <Spacer position='top' size='small'>
              <Text variant='label'>{address}</Text>
            </Spacer>
          </Spacer>
        </Card.Content>
      </Card>
    </Spacer>
  );
};
