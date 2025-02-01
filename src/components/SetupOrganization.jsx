import { useState } from "react";

const SetupOrganization = ({ onNext }) => {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [scrapingProgress, setScrapingProgress] = useState([
    { url: "https://example.com/page1", status: "Scraped" },
    { url: "https://example.com/page2", status: "Pending" },
  ]);

  const handleFetchDescription = () => {
    // Mock function to fetch meta-description
    alert("Fetching meta-description...");
  };

  const handleSubmit = () => {
    // Simulate organization setup logic
    console.log("Website URL:", websiteUrl);
    onNext(); // Move to the next step
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">Setup Your Organization</h1>
        <input
          type="text"
          placeholder="Company Name"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Website URL"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <button
            onClick={handleFetchDescription}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Fetch
          </button>
        </div>
        <textarea
          placeholder="Company Description"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Scraping Progress</h2>
          {scrapingProgress.map((page, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <span>{page.url}</span>
              <span
                className={`px-2 py-1 rounded ${
                  page.status === "Scraped" ? "bg-green-200" : "bg-yellow-200"
                }`}
              >
                {page.status}
              </span>
            </div>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SetupOrganization;