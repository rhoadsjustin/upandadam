import React, { useState, useEffect } from 'react';
import { H1, Content } from 'native-base';
import Leaderboard from 'react-native-leaderboard';
import { View } from 'react-native';
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
            <View style={{ padding: 20, alignSelf: 'center' }}>
            <H1>Live Challenge Leaderboard</H1>
            </View>
        <Leaderboard
          data={data}
          sortBy='highScore' 
          labelBy='userName'/>
        </View>
    );
};