import React, { useEffect } from "react";
import HomeImgData from "../HomeImgData";
import data from "../sectionsData";
import { Link } from "react-router-dom";
import testimonials from "../testimonials";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Home = ({ active , setactive }) => {
  useEffect(() => {
    setactive("home");
  }, [setactive]);
  return (
    <div className="w-[100vw]">
      {HomeImgData.map((item) => (
        <div
          key={item.id}
          className="relative w-[100vw] h-[30rem] md:h-[18rem] mb-1 overflow-hidden"
        >
          <LazyLoadImage effect="blur"
            src={item.image}
            className="w-[100vw] h-[30rem] md:h-[18rem] object-cover object-center transition-all duration-300 hover:brightness-75"
            alt={item.id}
          />
          <div className="absolute top-24 md:top-48 w-full flex flex-col items-center">
            <span className="text-white md:text-2xl">{item.quote}</span>
          </div>
          <span className="absolute text-white bottom-0 right-5">
            {item.photoBy}
          </span>
        </div>
      ))}

      <h1 className="flex w-[100vw] text-3xl font-medium justify-center items-center mt-20 mb-5">
        What Impact Hub Offers
      </h1>

      <div className="flex flex-wrap w-[100vw]">
        {data.map((item) => (
          <div key={item.id} className="relative">
            <div className={`${ item.id === 5 ? "md:w-[98vw]" : "md:w-[39rem]"} w-[98vw] h-56 ml-[1vw] mt-[1vw] md:mt-3 md:ml-3 overflow-hidden`}>
              <LazyLoadImage effect="blur"
                className="w-full h-full object-cover object-center transition-all duration-300 hover:brightness-75"
                src={item.image}
                alt=""
              />
            </div>

            <span className="absolute top-10 left-0 mx-10 text-white text-xl">
              {item.text}
            </span>
            <span className="absolute bottom-0 right-0 text-white">
              {item.imageBy}
            </span>
            <Link to={item.link}>
            <button
            onClick={()=>{
              setactive(item.section)
              
            }}
            className="absolute top-32 left-10 transition-all duration-300 hover:bg-white hover:text-black text-white bg-black px-5 py-1 font-medium text-lg rounded-full">
              {item.buttonText}
            </button>
            </Link>
          </div>
        ))}
      </div>


      <h1 className="font-medium text-3xl flex justify-center items-center mt-20 mb-5">How It Works</h1>
      <ol className="list-decimal list-inside">
        <li className="flex flex-col mx-5 mb-5 mt-3">
          <span className="font-medium mb-3 text-xl">1. Discover Causes & Opportunities</span>
          <span>Explore a variety of initiatives, projects, and resources that align with your interests. Browse through 
            <Link to="/action-hub" className="underline text-orange-600 font-medium hover:text-orange-800 transition-all duration-300">action hub</Link>, 
            <Link to="/content-library" className="underline text-orange-600 font-medium hover:text-orange-800 transition-all duration-300"> content libraries</Link>, 
            and 
            <Link to="/interactive-map" className="underline text-orange-600 font-medium hover:text-orange-800 transition-all duration-300">interactive maps</Link> 
            to find what inspires you.</span>
        </li>
        <li className="flex flex-col mx-5 mb-5 mt-3">
          <span className="font-medium mb-3 text-xl">2. Learn & Get Inspired</span>
          <span>Access a collection of 
            curated <Link to="/content-library" className="underline text-orange-600 font-medium hover:text-green-600 transition-all duration-300">videos, books, and articles</Link> 
            that provide insights into different causes. Connect with 
            <Link to="/chat" className="underline text-orange-600 font-medium hover:text-green-600 transition-all duration-300">changemakers</Link> and understand the impact of meaningful actions.</span>
        </li>
        <li className="flex flex-col mx-5 mb-5 mt-3">
          <span className="font-medium mb-3 text-xl">3. Take Action & Connect</span>
          <span>Join forces with
          <Link to="/action-hub" className="underline text-orange-600 font-medium hover:text-green-600 transition-all duration-300">NGOs, communities, and passionate individuals</Link>
             . Participate in events, volunteer programs, and 
             <Link to="/chat" className="underline text-orange-600 font-medium hover:text-green-600 transition-all duration-300">discussions </Link>
             to contribute actively.</span>
        </li>
        <li className="flex flex-col mx-5 mb-5 mt-3">
          <span className="font-medium mb-3 text-xl">4. Engage & Share</span>
          <span>Be a part of a growing community! 
            Be a part of a growing community! Chat with like-minded people, share your experiences, and inspire others to take action.<Link to="/chat" className="underline text-orange-600 font-medium hover:text-green-600 transition-all duration-300">Chat with like-minded people,</Link> 
            share your experiences, and inspire others to take action.</span>
        </li>
      </ol>

      <h1 className="text-3xl font-medium text-center mt-20 mb-5">What People Say</h1>
<div className="flex flex-wrap justify-center gap-6 px-4">
  {testimonials.map((testimonial) => (
    <div key={testimonial.id} className="w-[25rem] p-5 shadow-lg">
      <LazyLoadImage effect="blur" src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-3"/>
      <p className="text-center text-gray-700 font-medium">"{testimonial.feedback}"</p>
      <h3 className="text-center mt-3 font-semibold">{testimonial.name}</h3>
    </div>
  ))}
</div>
    </div>
  );
};

export default Home;
