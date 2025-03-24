import React, { useState, useEffect } from "react";
import initialCommunityData from "../communityData";

const CommunityChat = ({ setactive }) => {
  const [communityForums, setCommunityForums] = useState(initialCommunityData);
  const [selectedForum, setSelectedForum] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [newForumName, setNewForumName] = useState("");
  const [newForumDescription, setNewForumDescription] = useState("");

  useEffect(() => {
    setactive("chat");
  }, [setactive]);

  // Select a forum and load its messages
  const selectForum = (forum) => {
    setSelectedForum(forum);
    setMessages(forum.messages);
  };

  // Send message in selected forum
  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      const newMsg = { id: messages.length + 1, user: "You", text: newMessage };
      setMessages([...messages, newMsg]);

      // Update messages in the communityForums state
      setCommunityForums((prevForums) =>
        prevForums.map((forum) =>
          forum.id === selectedForum.id
            ? { ...forum, messages: [...forum.messages, newMsg] }
            : forum
        )
      );

      setNewMessage("");
    }
  };

  // Create a new forum
  const createForum = () => {
    if (newForumName.trim() !== "" && newForumDescription.trim() !== "") {
      const newForum = {
        id: communityForums.length + 1,
        name: newForumName,
        description: newForumDescription,
        messages: [],
      };
      setCommunityForums([...communityForums, newForum]);
      setNewForumName("");
      setNewForumDescription("");
    }
  };

  return (
    <div className="w-full min-h-screen p-6 bg-gray-100">
      {!selectedForum ? (
        <div className="max-w-3xl mx-auto bg-white p-6 shadow-md">
          <h1 className="text-2xl font-bold mb-4">Community Forums</h1>

          {/* Create Forum Section */}
          <div className="mb-6 p-4 border border-black">
            <h2 className="text-lg font-semibold mb-2">Create a New Forum</h2>
            <input
              type="text"
              value={newForumName}
              onChange={(e) => setNewForumName(e.target.value)}
              placeholder="Forum Name"
              className="w-full p-2 mb-2 border rounded-full  border-black"
            />
            <input
              type="text"
              value={newForumDescription}
              onChange={(e) => setNewForumDescription(e.target.value)}
              placeholder="Forum Description"
              className="w-full p-2 mb-2 border rounded-full border-black"
            />
            <button
              onClick={createForum}
              className="w-full px-4 py-2 bg-black hover:bg-gray-800 transition-all duration-300 text-white rounded-full"
            >
              Create Forum
            </button>
          </div>

          {/* Display Forums */}
          {communityForums.map((forum) => (
            <div
              key={forum.id}
              className="p-4 mb-3 transition-all duration-300 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-md"
              onClick={() => selectForum(forum)}
            >
              <h2 className="text-xl font-semibold">{forum.name}</h2>
              <p className="text-gray-700">{forum.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto bg-white p-6 shadow-md rounded-md">
          <button
            className="mb-4 px-4 py-2 bg-black rounded-full border border-black transition-all duration-300 text-white hover:bg-white hover:text-black"
            onClick={() => setSelectedForum(null)}
          >
            Back to Forums
          </button>
          <h1 className="text-2xl font-bold mb-4">{selectedForum.name} Chat</h1>

          <div className="h-64 overflow-y-auto border p-3 rounded-3xl bg-gray-50">
            {messages.length > 0 ? (
              messages.map((msg) => (
                <div key={msg.id} className="mb-2">
                  <span className="font-semibold">{msg.user}:</span> {msg.text}
                </div>
              ))
            ) : (
              <p>No messages yet. Start the conversation!</p>
            )}
          </div>

          {/* Send Message Section */}
          <div className="mt-4 flex">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-full"
            />
            <button
              onClick={sendMessage}
              className="ml-2 px-4 py-2 border border-black hover:bg-white hover:text-black transition-all duration-300 bg-black text-white rounded-full"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityChat;
