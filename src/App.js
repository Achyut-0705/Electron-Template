import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/*" element={<h1>404 not found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
