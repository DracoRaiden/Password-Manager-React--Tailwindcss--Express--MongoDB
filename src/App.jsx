import React from "react";
import { Navbar } from "./components/Navbar";
import { Manager } from "./components/Manager";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <div>
      <Navbar />
      <div className="relative min-h-[86vh] md:min-h-[100vh]">
        <Manager />
      </div>
      <Footer />
    </div>
  );
}

export default App;
