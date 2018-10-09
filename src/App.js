import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/search_bar";
import searchYouTube from "youtube-api-search";
import Videolist from "./components/video_list";
import VideoDetail from "./components/video_details";

const API_KEY = "AIzaSyDhtyfBXGXUG8ZVzi5FnRIfrq2jGtrbBR0";

class App extends Component {
  state = {
    videos: [],
    
  };

  componentWillMount = (term) => {
    searchYouTube(
      { key: API_KEY, term: term },
      data => {
        this.setState({
          videos: data,
          selectedVideo: data[3]
        });
        console.log(data);
      }
    );
  };

  render() {
    return (
      <div className = "App">
        <div className="container ">
          <SearchBar  onTermChange = {term => this.componentWillMount(term)}/>
          <VideoDetail video_={this.state.selectedVideo} />
          <Videolist
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default App;
