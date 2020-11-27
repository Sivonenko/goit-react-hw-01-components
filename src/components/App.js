import React from 'react'

import Profile from './Profile'
// import Statistics from './Statistics'
// import FriendList from './FriendList'
// import Transaction from './Transactions'

import userData from "../data/user.json";
// import statsData from '../data/statistical.json'
// import friends from '../data/friends.json'
// import transactions from '../data/transactions.json'

const App = () => {
  return (
    
           <>
            <Profile name={userData.name}
                tag={userData.tag}
                location={userData.loation}
                avatar={userData.avatar}
                stats={userData.stats}
              />
             </>
        
    );
};

export default App;
