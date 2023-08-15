import React from "react";




const VideoPlay=({selectedVideo})=>{
console.log(selectedVideo);
    return(
        <div className="video-play">
            {
                selectedVideo && (
                <div>
                <iframe width="860" height="500" src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}></iframe>
                <h3>{selectedVideo.snippet.title}</h3>
                </div>
                )
            }
   
        </div>
    )
}
export default VideoPlay;