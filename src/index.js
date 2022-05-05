import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './pages/App';
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
// import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route 
      path="*"
      element={<Error />}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);