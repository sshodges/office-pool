import React from 'react';
import Tournaments from '../tournaments/Tournaments';

const Dashboard = () => {
  return (
    <div>
      <h1>Tournaments</h1>
      <div className='fixed-action-btn'>
        <a
          href='#add-tournament-modal'
          className='btn-floating btn-large blue darken-2 modal-trigger'
        >
          <i className='large material-icons'>add</i>
        </a>
      </div>

      <Tournaments />
    </div>
  );
};

export default Dashboard;
