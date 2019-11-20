import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';

const AddTournamentModal = ({}) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and tech', classes: 'red' });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date()
      };
      M.toast({ html: `log added by ${tech}`, classes: 'green' });
      // Clear Fields
      setMessage('');
      setTech('');
      setAttention(false);
    }
  };

  return (
    <div id='add-tournament-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Add Tournamment</h4>
        <br />
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Tournament Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={e => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select Type
              </option>
              <option value='pool'>Pool</option>
              <option value='ping-pong'>Ping Pong</option>
            </select>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Add
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '50%',
  height: '75%'
};

export default connect(null, {})(AddTournamentModal);
