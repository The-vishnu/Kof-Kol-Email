import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Sidebar from "./components/Sidebar";
import ChatSection from "./components/ChatSection";
import InboxMail from "./pages/InboxMail";
import AiChat from "./pages/AiChat";
import Trash from "./pages/Trash";
import "./App.css";
import { ThemeContext } from "./context/ThemContext";
import { isMobile } from "react-device-detect";
import { Route, Routes  } from "react-router-dom";

function App() {
  
   if (isMobile) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center font-sans bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900 p-1 animate-fadeIn">
      <h1 className="text-5xl mb-1 font-bold animate-bounce">📧 Hold Up!</h1>
      <p className="text-2xl mb-3 font-semibold">
        Looks like you're on a <span className="text-blue-600">mobile device</span>!
      </p>
      <p className="text-lg mb-6 text-gray-700 max-w-xl">
        Our <span className="font-bold text-indigo-700">premium email experience</span> 
        is optimized for laptops — full inbox power, advanced filters, and lightning-fast composing. ⚡
      </p>
      <p className="text-xl font-semibold text-blue-600 animate-pulse mb-4">
        Mobile access is limited for now… support is coming soon! 🚀
      </p>
      <p className="text-lg text-gray-800">
        💡 Pro Tip: Open this on a laptop to unlock <span className="font-bold text-indigo-500">all advanced features</span> and handle emails like a true pro!
      </p>
    </div>
    );
  }

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }
  return (
    <>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <div className={`flex flex-row w-full h-screen ${theme === "light" ? "bg-gray-300 " : "bg-gray-700"}`}>
        <Sidebar />
        <Routes>
          <Route path="/" element={ <ChatSection /> } />
          <Route path="/inbox" element={ <InboxMail /> } />
          <Route path="/trash" element={ <Trash /> } />
          <Route path="/aichat" element={ <AiChat /> } />
        </Routes>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
