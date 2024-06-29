import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Home />
      <ToastContainer />
    </>
  );
}

export default App;
