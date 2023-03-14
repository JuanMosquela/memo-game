import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="  min-h-screen flex justify-center items-center">
      <Outlet />
    </div>
  );
}

export default App;
