import React, { useEffect, useRef, useState, useContext } from "react";
import { Send, User, Clock, PhoneCall, Video, Info} from "lucide-react";
import { ThemeContext } from "../context/ThemContext";

function ChatSection() {
  const date = new Date();
  const showTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const [SenderMessages, setSenderMessages] = useState([]);
  const [RecevierMessaeg, setRecevierMessage] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isActive, setActiveStatus] = useState(true);
  const messagesEndRef = useRef(null);
  const { theme, toggleTheme } = useContext(ThemeContext);  

  const sendMessageSound = new Audio("/assets/notification5.mp3");

  const handleSend = () => {
    if (inputMessage.trim() !== "") {
      sendMessageSound.play();
      setSenderMessages([
        ...SenderMessages,
        {
          text: inputMessage,
          timeStamp: showTime,
          senderId: "You",
        },
      ]);
      setInputMessage("");
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [SenderMessages, RecevierMessaeg]);
  return (
    <>
      <div className={`w-full h-screen flex flex-col justify-between rounded-3xl p-2 ${theme === "light" ? "bg-gray-200" : "bg-gray-800"}`}>
        {/* 🌸 User Profile Section */}
        <div className={`flex items-center justify-between bg-gray-100 p-2 rounded-3xl mt-0 ${theme === "light" ? "bg-gray-100 text-gray-800" : "bg-gray-700 text-gray-200"}`}>
          {/* Profile Info */}
          <div className="flex items-center space-x-4 my-1">
            <img
              src="https://i.pravatar.cc/50"
              alt="User Profile"
              className="w-12 h-12 rounded-full"
            />

            <div>
              <p className="text-lg  group relative w-max cursor-pointer">
                <span>Arvind</span>
                <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-gray-400 group-hover:w-full"></span>
              </p>
              <span
                className={`text-sm ${
                  isActive ? "text-green-400" : "text-gray-400"
                }`}
              >
                {isActive ? "online" : "offline"}
              </span>{" "}
              {/* Green for Online, Gray for Offline */}
            </div>
          </div>

          {/* Call Buttons */}
          <div className="flex space-x-3">
            <button className="bg-gray-300 hover:bg-slate-400 p-2 rounded-full cursor-pointer">
              <PhoneCall size={20}/> {/* Call Icon */}
            </button>

            <button className="bg-gray-300 hover:bg-slate-400 p-2 rounded-full cursor-pointer">
              <Video size={20}/> {/* Video Call Icon */}
            </button>

             <button className=" hover:bg-slate-400 p-2 h-10 items-center justify-center w-10 rounded-full cursor-pointer flex flex-col gap-0.5">
              <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
              <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
              <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
            </button>
          </div>
        </div>
        {/* Messages Area */}
        <div className="flex flex-col space-y-4 overflow-auto flex-1 mb-4 hide-scrollbar">
          {/* Sent Message (User → Bot) */}
          {SenderMessages.map((sendermsg, map) => (
            <div className="flex flex-col items-end">
              {/* Username + Time */}
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span className="font-semibold">{sendermsg.senderId}</span>
                <span>{sendermsg.timeStamp}</span>
              </div>

              {/* Message Bubble */}
              <div className="bg-gray-300 p-3 rounded-3xl rounded-br-none max-w-xs break-words">
                {sendermsg.text}
              </div>
            </div>
          ))}

          {/* Received Message (Bot → User) */}
          {RecevierMessaeg.map((RecevierMessaeg, map) => (
            <div className="flex flex-col items-end">
              {/* Username + Time */}
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span className="font-semibold">Arvind</span>
                <span>10:45 AM</span>
              </div>

              {/* Message Bubble */}
              <div className="bg-gray-300 p-3 rounded-3xl rounded-bl-none max-w-xs break-words">
                {RecevierMessaeg}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>

        {/* Input Section */}
        <div className="p-3 bg-gray-100 rounded-3xl flex items-center mb-2 space-x-3">
          {/* Input Field */}
          <input
            type="text"
            placeholder="Type a message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="flex-1 p-3 rounded-full focus:outline-none bg-white shadow"
          />

          {/* Send Button with Icon */}
          <button
            className="hover:bg-slate-400 bg-gray-300 p-3 rounded-full cursor-pointer"
            onClick={handleSend}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </>
  );
}

export default ChatSection;
