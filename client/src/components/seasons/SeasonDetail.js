import { connect } from 'react-redux';
import React from 'react';
import SeasonLeaderboard from './SeasonLeaderboard';
import Spinner from '../layout/Spinner';
import Matches from './Matches';

const SeasonDetail = ({
  season: { currentSeason }
}) => {

  return (
    <div>
      {currentSeason ? (
          <div>
            <h1>Season: {currentSeason.name}</h1>
            
            <div className="row">
              <div className="col s6">
                <SeasonLeaderboard />
              </div>
              <div className="col s6">
                <Matches />
              </div>
            </div>
          </div>
      ) : (
        <Spinner />
      )}
      </div>
  );
};

const mapStateToProps = state => ({
  season: state.season
});

export default connect(
  mapStateToProps,
  null
)(SeasonDetail);
