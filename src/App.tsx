import { Provider } from "react-redux";
import { store } from "./data/store";
import { Core } from "./components/core";
import { Router } from "./components/router";

function App() {
  return (
    <>
      <Provider store={store}>
        <Core>
          <Router />
        </Core>
      </Provider>
    </>
  );
}

export default App;
