import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./Components/CakeContainer";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import IcecreamContainer from "./Components/IcecreamContainer";
import PastryContainer from "./Components/PastryContainer";
import User from "./Components/User";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <User />
        <CakeContainer />
        <HooksCakeContainer />
        <IcecreamContainer />
        <PastryContainer />
      </div>
    </Provider>
  );
}

export default App;
