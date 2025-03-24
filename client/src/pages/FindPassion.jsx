import React, { useEffect, useState } from "react";
import passionsData from "../passionData"; // External data file

const FindPassion = ({ setactive }) => {
  useEffect(() => {
    setactive("find your passion");
  }, [setactive]);

  const [userInterests, setUserInterests] = useState([]);
  const [recommendedPassions, setRecommendedPassions] = useState([]);

  // Handle checkbox selection
  const handleInterestChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setUserInterests([...userInterests, value]);
    } else {
      setUserInterests(userInterests.filter((interest) => interest !== value));
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const matchedPassions = passionsData.filter((passion) =>
      userInterests.some((interest) => passion.tags.includes(interest))
    );
    setRecommendedPassions(matchedPassions);
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mt-10">Find Your Passion</h1>
      <p className="text-lg text-gray-700 mt-2 text-center max-w-2xl">
        Tell us what interests you, and we'll help you find your passion!
      </p>

      {/* Interest Selection Form */}
      <form onSubmit={handleSubmit} className="mt-6 p-5 bg-white rounded-lg shadow-md max-w-xl">
        <h2 className="text-lg font-semibold mb-3">Select your interests:</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["Climate Change", "Education", "Poverty", "Health", "Animal Welfare", "Social Justice"].map((interest) => (
            <label key={interest} className="flex items-center space-x-2">
              <input type="checkbox" value={interest} onChange={handleInterestChange} className="mr-2" />
              {interest}
            </label>
          ))}
        </div>
        <button type="submit" className="mt-4 bg-black text-white px-4 py-2 rounded-full">
          Discover Passion
        </button>
      </form>

      {/* Display Suggested Passions */}
      {recommendedPassions.length > 0 && (
        <div className="mt-8 p-5 bg-white shadow-md rounded-lg max-w-2xl text-center">
          <h2 className="text-xl font-semibold mb-3">Your Suggested Passions</h2>
          {recommendedPassions.map((passion) => (
            <div key={passion.id} className="mb-6 p-4 border rounded bg-gray-100">
              <h3 className="text-lg font-bold text-blue-600">{passion.title}</h3>
              <p className="text-gray-700 mt-2">{passion.description}</p>

              {passion.video && (
                <iframe
                  width="100%"
                  height="200"
                  src={passion.video}
                  title={passion.title}
                  className="mt-3 rounded"
                ></iframe>
              )}
              <a
                href={passion.resourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-blue-500 underline"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FindPassion;
