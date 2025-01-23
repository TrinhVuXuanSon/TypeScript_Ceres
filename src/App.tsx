import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import HomePageContainer from "./containers/HomePageContainer";
import DetailsContainer from "./containers/DetailsContainer";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePageContainer />} />
          <Route path="/details/:id" element={<DetailsContainer />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
