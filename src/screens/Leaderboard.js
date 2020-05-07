import React, { useState, useEffect } from 'react';
import { H1, Card, CardItem, Body, Left, Thumbnail } from 'native-base';
import Leaderboard from 'react-native-leaderboard';
import { View, Text } from 'react-native';
import colors from '../assets/colors';
const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
const adam = require('../assets/adamsFace.png');

export default function LeaderboardScreen() {
    const [data] = useState([
        {userName: 'Adam', highScore: getRandomInt(200)},
        {userName: 'Jenny', highScore: 120},
        {userName: 'Jim', highScore: 67},
        {userName: 'Jimmy', highScore: 112},
        {userName: 'Joe', highScore: 23},
        {userName: 'Addy', highScore: 109},
        {userName: 'Adaly', highScore: 60},
        {userName: 'Adamame', highScore: 180},
    ]);
    return (
        <View>
            <View style={{ padding: 20, alignSelf: 'center', flex: 1 }}>
            <H1>Live Challenge Leaderboard</H1>
            </View>
        <Leaderboard
          data={data}
          sortBy='highScore' 
          labelBy='userName'
           oddRowColor={ colors.blue }
           evenRowColor={ colors.white }
          />

        <View>
        <Card style={{ alignSelf: 'center', width: 300, marginTop: 100 }}>
            <CardItem>
              <Left>
                <Thumbnail source={adam} />
                <Body>
                  <Text>Quarantine Adam</Text>
                  <Text note>Crushing It</Text>
                </Body>
              </Left>
            </CardItem>
            </Card> 
        </View>
        </View>
    );
};