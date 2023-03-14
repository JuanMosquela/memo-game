import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className=" bg-[url('/src/assets/background.jpg')]  bg-cover min-h-screen flex justify-center items-center">
      <Outlet />
    </div>
  );
}

export default App;
