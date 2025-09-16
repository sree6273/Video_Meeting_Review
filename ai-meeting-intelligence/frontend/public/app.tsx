import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MeetingDetail from "./pages/MeetingDetail";
import Search from "./pages/Search";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meeting/:id" element={<MeetingDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
