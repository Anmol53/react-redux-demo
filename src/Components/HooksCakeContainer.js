import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

export default function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Hooks Cake Container</h3>
      <p>Number of cakes: {numOfCakes}</p>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}
