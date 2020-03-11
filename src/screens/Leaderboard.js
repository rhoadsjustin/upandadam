import React from 'react';
import Leaderboard from 'react-native-leaderboard';
const data = [
    {userName: 'Joe', highScore: 52},
    {userName: 'Jenny', highScore: 120},
    {userName: 'Jim', highScore: 67},
    {userName: 'Jimmy', highScore: 112},
];
    

export default function LeaderboardScreen() {
    return (
        <Leaderboard 
          data={data} 
          sortBy='highScore' 
          labelBy='userName'/>);
};