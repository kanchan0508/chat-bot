import { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [inputText, setInputText] = useState("");

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: inputText, sender: "user" }]);
      setInputText("");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 bg-blue-500 text-white">
        <h2 className="text-lg font-semibold">Chatbot</h2>
      </div>
      <div className="h-64 p-4 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-2 ${message.sender === "bot" ? "text-left" : "text-right"}`}
          >
            <span
              className={`inline-block p-2 rounded-lg ${
                message.sender === "bot" ? "bg-gray-200" : "bg-blue-500 text-white"
              }`}
            >
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <input
          type="text"
          placeholder="Type a message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleSendMessage}
          className="mt-2 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;