import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TournamentItem from './TournamentItem';
import Spinner from '../layout/Spinner';
import { getTournaments } from '../../actions/tournamentAction';

const Tournaments = ({ tournament: { tournaments }, getTournaments }) => {
  useEffect(() => {
    getTournaments();
  }, []);

  return (
    <div className='row'>
      {tournaments ? (
        tournaments.map(tournament => (
          <TournamentItem tournament={tournament} />
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  tournament: state.tournament
});

export default connect(
  mapStateToProps,
  { getTournaments }
)(Tournaments);
