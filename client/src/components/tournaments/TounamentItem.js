import React from 'react';

const TounamentItem = ({ tournament }) => {
  console.log(tournament);
  return (
    <div class='col s3'>
      <div class='card blue-grey darken-1'>
        <div class='card-content white-text'>
          <span class='card-title'>{tournament.tournamentName}</span>
          <p>{tournament.tournamentType}</p>
        </div>
      </div>
    </div>
  );
};

export default TounamentItem;
