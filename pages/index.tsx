"use client";
import { Provider } from "react-redux";
import RickyMonty from "./component/rickyMonty";
import store from "./store";

const Home = () => {
  return (
    <Provider store={store}>
      <RickyMonty />
    </Provider>
  );
};

export default Home;
