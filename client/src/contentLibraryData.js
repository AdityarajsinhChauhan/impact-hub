const getYouTubeThumbnail = (videoURL) => {
  const videoId = videoURL.split("v=")[1]?.split("&")[0]; // Extract Video ID
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "https://via.placeholder.com/300x180";
};

const contentLibraryData = [
  {
    id: 1,
    type: "video",
    title: "Breaking Boundaries: The Science of Our Planet",
    description: "An exploration of the urgent environmental challenges we face.",
    link: "https://www.youtube.com/watch?v=Gb6wQtNjblk", // YouTube alternative
    thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=Gb6wQtNjblk"),
  },
  {
    id: 2,
    type: "book",
    title: "The Future of the Responsible Company",
    description: "Insights from Patagonia's 50 years on responsible business practices.",
    link: "https://ssir.org/articles/entry/ssirs_2023_social_innovation_reading_list",
    thumbnail: "https://via.placeholder.com/300x180",
  },
  {
    id: 3,
    type: "article",
    title: "Zero-sum politics is destroying America. We can build a way out.",
    description: "An exploration of how an 'ideology of scarcity' has impacted American politics and potential solutions.",
    link: "https://www.vox.com/future-perfect/405403/abundance-ezra-klein-building-costs-housing-energy-democrats-polarization",
    thumbnail: "https://via.placeholder.com/300x180",
  },
  {
    id: 4,
    type: "video",
    title: "The Social Dilemma Explained: The Dark Side of Social Media",
    description: "A YouTube discussion on the dangers of social media algorithms.",
    link: "https://www.youtube.com/watch?v=9tU-D-m2JY8", // YouTube alternative
    thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=9tU-D-m2JY8"),
  },
];

export default contentLibraryData;
