import React from "react";

import Profile from './Profile'
import Statistics from "./Statistics";
import FriendList from './FriendList'
import Transactions from './Transactions'

import userData from "../data/user.json";
import statsData from "../data/statistical.json";
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'

const App = () => {
  return (
    <>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics items={statsData} />
      <FriendList friends={friends} />
      <Transactions transactions={transactions}/>
    </>
  );
};

export default App;
