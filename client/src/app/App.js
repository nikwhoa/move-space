import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Classes from "../components/classes/Classes";
import Header from "../components/header/Header";
import MainScreen from "../components/mainScreen/MainScreen";
import Schedule from "../components/schedule/Schedule";
import Trainers from "../components/trainers/Trainers";
import { AnimatePresence } from "framer-motion";

const App = () => {
  
  
  return (
    <div className="site-wrap">
      <Header />
      <AnimatePresence>
        <Routes location={useLocation()} key={useLocation().pathname}>
          <Route path="/" element={<MainScreen />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/trainers" element={<Trainers />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
