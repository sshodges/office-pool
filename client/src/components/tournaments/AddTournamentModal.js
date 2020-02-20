import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { addTournament } from "../../actions/tournamentAction";

const AddTournamentModal = ({ addTournament }) => {
  const [tournamentName, setTournamentName] = useState("");
  const [tournamentType, setTournamentType] = useState("");

  const onSubmit = () => {
    if (tournamentName === "" || tournamentType === "") {
      M.toast({
        html: "Please enter a tournamentName and tournamentType",
        classes: "red"
      });
    } else {
      const newTournament = {
        tournamentName,
        tournamentType
      };
      addTournament(newTournament);
      M.toast({ html: `tournament successfully added`, classes: "green" });
      // Clear Fields
      setTournamentName("");
      setTournamentType("");
    }
  };

  return (
    <div id="add-tournament-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Add Tournamment</h4>
        <br />
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="tournamentname"
              value={tournamentName}
              onChange={e => setTournamentName(e.target.value)}
            />
            <label htmlFor="tournamentname" className="active">
              Tournament Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tournamenttype"
              value={tournamentType}
              className="browser-default"
              onChange={e => setTournamentType(e.target.value)}
            >
              <option value="" disabled>
                Select Type
              </option>
              <option value="pool">Pool</option>
              <option value="ping-pong">Ping Pong</option>
            </select>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Add
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "50%",
  height: "75%"
};

export default connect(null, { addTournament })(AddTournamentModal);
