import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SigninPage from './SigninPage';
import Side1 from "./Sidepage/Side1";
import Side2 from "./Sidepage/Side2";
import Mainpage from "./Mainpage/Mainpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Route for SigninPage with Side1 */}
        <Route
          path="/"
          element={<SigninPage rightComponent={<Side1 />} />}
        />

        {/* Route for SigninPage with Side2 */}
        <Route
          path="/signout"
          element={<SigninPage rightComponent={<Side2 />} />}
        />
        <Route path="/main"
          element={<Mainpage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
