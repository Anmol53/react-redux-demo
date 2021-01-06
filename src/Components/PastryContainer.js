import { buyPastry } from "../redux";
import { connect } from "react-redux";
import React, { useState } from "react";

function PastryContainer(props) {
  const [number, setNumber] = useState(undefined);
  return (
    <div>
      <h3>Pastry Container</h3>
      <p>Number of Pastrie: {props.numOfPastry}</p>
      <input type="number" onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => props.buyPastry(number)}>
        Buy {number} Pastry
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfPastry: state.pastry.numOfPastry,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyPastry: (number) => dispatch(buyPastry(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PastryContainer);
