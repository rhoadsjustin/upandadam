import React from 'react';
import { View, Text, Image } from 'react-native';
import { ListItem, Left, Body, Thumbnail, Right, Content, Accordion, H1 } from 'native-base';
const dataArray = [
    { title: "Personal Stats", content: "Lorem ipsum dolor sit amet" },
    { title: "Goals", content: "Lorem ipsum dolor sit amet" },
  ];
const adam = require('../assets/adamsFace.png');
export default function Profile() {
    return (
    <View style={{ padding: 40 }}>
        <Left>
          <Image source={ adam } />
        </Left>
        <ListItem avatar>
              <Body>
                <H1>Adam Meadows</H1>
                <Text note>Age: 28</Text>
                <Text note>Height: 4' 11"</Text>
                <Text note>Weight: 210</Text>
                <Text note>Steps: 4,235</Text>
              </Body>
            </ListItem>
            {/* <Content padder>
          <Accordion dataArray={dataArray} expanded={0}/>
        </Content> */}
    </View>
    );
}