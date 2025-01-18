import { Toaster } from "react-hot-toast";
import "./App.css";
import Routing from "./Routing/Routing";

function App() {
  return (
    <>
    <Routing/>
      {/* <Dashboard /> */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              background: '#4caf50',
              color: '#fff',
              fontWeight: 'bold',
            },
          },
          error: {
            duration: 4000,
            style: {
              background: '#f44336',
              color: '#fff',
              fontWeight: 'bold',
            },
          },
        }}
      />
    </>
  );
}

export default App;
