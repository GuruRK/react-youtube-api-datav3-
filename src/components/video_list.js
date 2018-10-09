import React, { Component } from "react";
import VideolistItem from "./video_list_item";

class Videolist extends Component {
  state = {};

  render() {
    const video_list = this.props.videos.map(videos => {
      return <VideolistItem
       onVideoSelect = {this.props.onVideoSelect}
       key={videos.etag}
       video={videos} />;
    });
return (
    <div className= "videolist">
    {video_list}
    </div>
    );
  }
}

export default Videolist;
