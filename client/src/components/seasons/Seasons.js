import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SeasonDetail from './SeasonDetail';
import Spinner from '../layout/Spinner';
import { getTournaments } from '../../actions/tournamentAction';

const Seasons = () => {
  return (
    <div className="row">
      <SeasonDetail />
    </div>
  );
};

export default Seasons;
