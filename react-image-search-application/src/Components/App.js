import React from "react";
import UserService from '../Services/UserService'
import SearchBar from "./SearchBar";
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (searchTerm) => {
    const respData = await UserService.get("search/photos", {
      params: { query: searchTerm },
    });
    //   .then((respData) => {

    //   });
    this.setState({ images: respData.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "12px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Total Images Found: {this.state.images.length} images

        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
