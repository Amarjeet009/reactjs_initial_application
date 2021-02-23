import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from '../hooks/useVideos'

const scrollCss = {
  height: "500px",
  overflow: "auto",
};

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('buildings');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);
  
  return (
    <div className="ui container">
      <SearchBar 
      onFormSubmit={search} 
      />
      <div className="ui grid">
        <div className="ten wide column">
          <VideoDetail 
          video={selectedVideo} 
          />
        </div>
        <div className="six wide column" style={scrollCss}>
          <VideoList 
          onVideoSelect={(video) => {setSelectedVideo(video)}} 
          videos={videos} 
          />
        </div>
      </div>
    </div>
  );
};

export default App;
