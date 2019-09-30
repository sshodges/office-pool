import React from 'react';
import TournamentItem from './TounamentItem';

const Tournaments = () => {
  const tournaments = ['tourn 1', 'tourn 2', 'tourn3'];
  return (
    <div>
      {tournaments.map(tournament => (
        <TournamentItem tournament={tournament} />
      ))}
    </div>
  );
};

export default Tournaments;
