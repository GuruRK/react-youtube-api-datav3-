import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
  const URL = video.snippet.thumbnails.default.url;

  return (
    <div className = "videolistitem">
      <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="vodeo-list media">
          <div className="media-left">
            <img alt="hey" className="media-object" src={URL} />
          </div>

          <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default VideoListItem;
