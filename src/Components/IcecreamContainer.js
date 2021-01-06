import { buyIcecream } from "../redux";
import { connect } from "react-redux";

function IcecreamContainer(props) {
  return (
    <div>
      <h3>Icecream Container</h3>
      <p>Number of Icecreams: {props.numOfIcecreams}</p>
      <button onClick={props.buyIcecream}>Buy Icecream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIcecreams: state.icecream.numOfIcecreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: () => dispatch(buyIcecream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);
