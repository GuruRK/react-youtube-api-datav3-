import React, { Component } from "react";

class VideoDetail extends Component {
  state = {};
  render() {
      if(!this.props.video_){
          return <div>Loading</div>
      }
    // console.log(this.props.video_);
    const videoId = this.props.video_.id.videoId;
    const URL = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div className="video-detail col-md-12">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe title="hey" className="embed-responsive-item" src={URL} />
        </div>
        <div className="details">
          <div>{this.props.video_.snippet.title}</div>
          <div>{this.props.video_.snippet.description}</div>
        </div> 
      </div>
    )
  }
}

export default VideoDetail;
