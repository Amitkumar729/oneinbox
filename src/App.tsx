import { lazy, Suspense, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Loader } from "./components/loaders/loader";
import { User } from "./types";

const Sidebar = lazy(() =>
  import("./components/layout/Sidebar/Sidebar").then((module) => ({
    default: module.Sidebar,
  }))
);

const ChatArea = lazy(() =>
  import("./components/layout/Chat/ChatArea").then((module) => ({
    default: module.ChatArea,
  }))
);

function App() {
  const [selectedUser, setSelecteduser] = useState<User | null>(null);

  const handleUserSelect = (user: User) => {
    setSelecteduser(user);
  };

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <div className="flex h-screen">
          <Sidebar onUserSelect={handleUserSelect} />
          <div className="flex-1">
            <Routes>
              <Route
                path="/"
                element={<ChatArea selectedUser={selectedUser} />}
              />
            </Routes>
          </div>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
