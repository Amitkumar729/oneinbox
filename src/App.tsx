import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Sidebar = lazy(() =>
  import("./components/layout/Sidebar").then((module) => ({
    default: module.Sidebar,
  }))
);

const ChatArea = lazy(() =>
  import("./components/layout/ChatArea").then((module) => ({
    default: module.ChatArea,
  }))
);

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading....</div>}>
        <div className="flex h-screen">  
          <Sidebar />
          <div className="flex-1"> 
            <Routes>
              <Route path="/" element={<ChatArea />} />
            </Routes>
          </div>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;