import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const UserRegistration = ({ onNext }) => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate registration logic
    console.log("Email:", email);
    console.log("Verification Code:", code);
    onNext(); // Move to the next step
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Verification Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Verify & Continue
          </button>
        </form>
        <button className="w-full mt-4 flex items-center justify-center gap-2 p-2 border rounded hover:bg-gray-100">
          <FcGoogle className="text-xl" /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default UserRegistration;