import React, { useEffect } from 'react'
import contentLibraryData from "../contentLibraryData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ContentLibrary = ({ setactive }) => {
  useEffect(() => {
    setactive("content library");
  }, [setactive]);
  return (
    <div className="w-full min-h-screen p-6">
      <h1 className="text-3xl font-medium text-center mb-6">Content Library</h1>
      
      <div className="flex justify-center flex-wrap gap-6">
        {contentLibraryData.map((item) => (
          <div key={item.id} className="w-[24rem] p-4 shadow-lg">
            <LazyLoadImage 
              src={item.thumbnail} 
              alt={item.title} 
              effect="blur" 
              className="w-[22rem] h-[10rem] object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-3">{item.title}</h2>
            <p className="text-gray-600 text-sm">{item.description}</p>
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block mt-3 px-4 py-2 bg-black border border-black text-white rounded-full transition-all duration-300 hover:bg-white hover:text-black"
            >
              {item.type === "video" ? "Watch Video" : item.type === "book" ? "Read Book" : "Read Article"}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContentLibrary
