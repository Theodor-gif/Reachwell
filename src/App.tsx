import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home.tsx";
import Account from "./pages/Account.tsx";
import JobPosition from "./pages/Job.position.tsx";
import JobPositionDetail from "./pages/Job.position.detail.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Account" element={<Account />} />
      <Route path="/JobPosition" element={<JobPosition />} />
      <Route path="/JobPositionDetail" element={<JobPositionDetail />} />
    </Routes>
  );
}

export default App;
