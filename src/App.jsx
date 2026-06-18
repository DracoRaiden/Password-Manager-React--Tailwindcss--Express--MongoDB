import React from "react";
import { Navbar } from "./components/Navbar";
import { Manager } from "./components/Manager";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <div className="relative min-h-[100vh]">
        <Manager />
      </div>
      <Footer />
    </div>
  );
}

export default App;
