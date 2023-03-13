import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className=" bg-green-300 min-h-screen flex justify-center items-center">
      <Outlet />
    </div>
  );
}

export default App;
