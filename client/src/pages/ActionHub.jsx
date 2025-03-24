import React, { useState , useEffect } from "react";
import actionHubData from "../actionHubdata";
import { Link } from "react-router-dom";

const categories = ["All", "Volunteering", "Petitions", "Donations", "Advocacy"];

const ActionHub = ({ setactive }) => {
  useEffect(() => {
    setactive("action hub");
  }, [setactive]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredActions =
    selectedCategory === "All"
      ? actionHubData
      : actionHubData.filter((item) => item.category === selectedCategory);

  return (
    <div className="flex flex-col items-center w-full min-h-screen p-5 bg-gray-100">
      <h1 className="text-3xl font-bold mt-10">Action Hub</h1>
      <p className="text-lg text-gray-700 mt-2 text-center max-w-2xl">
        Take meaningful action by volunteering, signing petitions, donating, or advocating for causes you care about.
      </p>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mt-5">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full shadow-md font-medium transition-all ${
              selectedCategory === category ? "bg-black text-white" : "bg-white hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Action Cards */}
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {filteredActions.map((action) => (
          <div key={action.id} className="w-[24rem] p-4 bg-white shadow-lg rounded-lg">
            <img src={action.image} alt={action.title} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-3">{action.title}</h2>
            <p className="text-gray-700 mt-2">{action.description}</p>
            <Link to={action.link} className="block mt-3 font-medium hover:underline">
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionHub;
