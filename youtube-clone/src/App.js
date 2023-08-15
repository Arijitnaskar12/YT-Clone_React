import React,{useState} from 'react';
import SearchBar from './Components/SearchBar';
import VideoList from './Components/VideoList';
import VideoPlay from './Components/VideoPlay';
import "./App.css";
const App=()=>{
  let[videos,setVideos]=useState("");
  let[selectedVideo,setSelectedVideo]=useState("");
  // console.log(selectedVideo);
  return(
    <div>
      <SearchBar setVideos={setVideos}/>
      <div className='videos'>
           <VideoPlay selectedVideo={selectedVideo}/>
           <VideoList videos={videos} setSelectedVideo={setSelectedVideo}/>
      </div>
     
    </div>
  )
}
export default App;