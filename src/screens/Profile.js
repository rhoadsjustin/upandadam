import React from 'react';
import { View, Text } from 'react-native';
import { ListItem, Left, Body, Thumbnail, Right, Content, Accordion } from 'native-base';
const dataArray = [
    { title: "Personal Stats", content: "Lorem ipsum dolor sit amet" },
    { title: "Goals", content: "Lorem ipsum dolor sit amet" },
  ];
const adam = require('../assets/adamsFace.png');
export default function Profile() {
    return (
    <View>
        <ListItem avatar>
              <Left>
                <Thumbnail source={{ adam }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <Content padder>
          <Accordion dataArray={dataArray} expanded={0}/>
        </Content>
    </View>
    );
}