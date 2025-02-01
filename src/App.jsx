import { useState } from "react";
import UserRegistration from "./components/UserRegistration";
import SetupOrganization from "./components/SetupOrganization";
import ChatbotIntegration from "./components/ChatbotIntegration";

const App = () => {
  const [step, setStep] = useState(1); // Tracks the current step in the workflow

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1); // Move to the next step
  };

  return (
    <div className="font-sans">
      {step === 1 && <UserRegistration onNext={handleNextStep} />}
      {step === 2 && <SetupOrganization onNext={handleNextStep} />}
      {step === 3 && <ChatbotIntegration />}
    </div>
  );
};

export default App;