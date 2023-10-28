import { createContext, useState } from "react";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import { ToastContainer } from "react-toastify";

export const TopContext = createContext();

function App() {
  const [name] = useState("Sachin");
  return (
    <>
      <Header />
      <TopContext.Provider value={{ name }}>
        <Main />
      </TopContext.Provider>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        className="cstToaster"
      />
    </>
  );
}

export default App;
