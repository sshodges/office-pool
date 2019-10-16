import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentTournament } from '../../actions/tournamentAction';

const TournamentItem = ({ tournament, setCurrentTournament }) => {
  return (
    <div class='col s3'>
      <Link to='/seasons' onClick={() => setCurrentTournament(tournament)}>
        <div class='card blue-grey darken-1'>
          <div class='card-content white-text'>
            <span class='card-title'>{tournament.tournamentName}</span>
            <p>{tournament.tournamentType}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default connect(
  null,
  { setCurrentTournament }
)(TournamentItem);
