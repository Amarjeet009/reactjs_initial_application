import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


const KEY = 'AIzaSyCIjzIqrVFnx1w0-bNVTqF3pRbs9ip7Z1M';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount(){
    this.onTermSubmit('Learn React JS - Full Course for Beginners ');
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 50,
        type: 'video',
        key: KEY,
      },
    });

    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    const scrollCss = {
      height: '500px',
      overflow: 'auto'
 
  }
    return (
      <div className="ui container">
         <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
  <div className="ten wide column">
  <VideoDetail video={this.state.selectedVideo} />
  </div>
  <div className="six wide column" style={scrollCss}>
  <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
  </div>
</div>
       
      
        
      </div>
    );
  }
}

export default App;
