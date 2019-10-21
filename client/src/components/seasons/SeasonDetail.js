import React from 'react';
import SeasonLeaderboard from './SeasonLeaderboard';
import Matches from './Matches';

const SeasonDetail = () => {
  return (
    <div>
      <h1>Season: Season123</h1>
      <div className="row">
        <div className="col s6">
          <SeasonLeaderboard />
        </div>
        <div className="col s6">
          <Matches />
        </div>
      </div>
    </div>
  );
};

export default SeasonDetail;
