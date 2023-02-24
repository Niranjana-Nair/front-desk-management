import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/welcome-page" element={<WelcomePage></WelcomePage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
