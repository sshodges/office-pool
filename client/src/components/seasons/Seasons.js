import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SeasonDetail from './SeasonDetail';
import SeasonItem from './SeasonItem';
import Spinner from '../layout/Spinner';
import { getSeasons } from '../../actions/seasonAction';

const Seasons = ({
  season: { seasons, loading },
  tournament: {
    currentTournament: { _id, tournamentName, tournamentType }
  },
  getSeasons
}) => {
  useEffect(() => {
    getSeasons(_id);
  }, []);
  return (
    <div className='row'>
      {seasons ? (
        <div>
          <h1>{tournamentName}</h1>
          <h3>{tournamentType}</h3>

          <ul className="pagination">
            {seasons.map(season => (
                <SeasonItem season={season}  />
            ))}
          </ul>

          <SeasonDetail />
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  season: state.season,
  tournament: state.tournament
});

export default connect(
  mapStateToProps,
  { getSeasons }
)(Seasons);
