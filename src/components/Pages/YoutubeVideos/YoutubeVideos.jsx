import React, { useEffect, useState } from "react";
import "../../../css/YoutubeVideos.css";

const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY; 

function YoutubeVideos() {
  const [appleyoutubevideos, setappleyoutubevideos] = useState([]);
  useEffect(() => {
   
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=${apiKey}`)
    
      .then((res) => res.json())
      .then((data) => {
        setappleyoutubevideos(data.items);
      });
  }, []);
  // console.log(appleyoutubevideos);
  return (
    <section className="youtubeVideosWrapper">
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                <h1 className="font-weight-bold">Latest Videos</h1>
              </div>
            </div>
            {appleyoutubevideos.map((singleVideo, i) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={i} className="col-sm-12 col-md-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank">
                        <img src={singleVideo.snippet.thumbnails.high.url} />
                      </a>
                    </div>

                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank">
                          {singleVideo.snippet.title}
                        </a>
                      </div>

                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>

                      <div className="publish-date">
                      {new Date(singleVideo.snippet.publishedAt).toLocaleDateString()} 
                      </div>  

                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}
          </div>
        </div>
      </div>
    </section>

  );
}

export default YoutubeVideos;
