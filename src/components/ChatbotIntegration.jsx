import { useState } from "react";
import { motion } from "framer-motion";
import Chatbot from "./Chatbot";

const ChatbotIntegration = () => {
  const [integrationStatus, setIntegrationStatus] = useState("pending");
  const [showChatbot, setShowChatbot] = useState(false);

  const handleTestIntegration = () => {
    // Mock integration test
    setIntegrationStatus("success");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">Chatbot Integration</h1>
        <button
          onClick={() => setShowChatbot(!showChatbot)}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-4"
        >
          {showChatbot ? "Hide Chatbot" : "Test Chatbot"}
        </button>
        <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 mb-4">
          Integrate on Your Website
        </button>
        <button
          onClick={handleTestIntegration}
          className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600 mb-4"
        >
          Test Integration
        </button>
        {integrationStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-center"
          >
            <h2 className="text-xl font-semibold mb-4">🎉 Integration Successful!</h2>
            <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Explore Admin Panel
            </button>
          </motion.div>
        )}
        {showChatbot && <Chatbot />}
      </div>
    </div>
  );
};

export default ChatbotIntegration;