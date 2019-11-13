import React from 'react';
import NavBar from './NavBar';
import FriendList from './FriendList';
import Feed from './Feed';

function App() {
  return (
    <div>
      <style jsx>{`
        .flex-container {
          display: flex;
          align-items: stretch;
        }
        .contentContainer {
          margin: 10px;
          text-align: center;
          font-size: 30px;
        }
        .flexLeft {
          flex-grow: 3;
        }
        .flexCenter {
          flex-grow: 4;
        }

        .flexRight {
          flex-grow: 3;
        }
        FriendList {
         width: 100%; 
        }

      `}</style>
      <h1>Welcome to Cage Book</h1>
      <NavBar/>
      <div className='flex-container'>
        <div className='contentContainer flexLeft'>
          <FriendList />
        </div>
        <div className='contentContainer flexCenter'>
          <Feed/>
        </div>
        <div className='contentContainer flexRight'>
          <FriendList/>
        </div>
      </div>
    </div>
  );
}

export default App;