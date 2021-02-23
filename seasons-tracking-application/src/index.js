import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from  './SeasonDisplay';
import Spinner from './Spinner';
// const App = () => {}
class App extends React.Component {

  state = { lat: null, lang: null, errorMessage: "" };

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
        (position) => {
          // we called this.setState
          this.setState({
            lat: position.coords.latitude,
            lang: position.coords.longitude,
          });
        },
        (err) => {
          console.error("error===================", err);
          this.setState({ errorMessage: err.message });
        }
      );
  }
  componentDidUpdate(){
      console.log('============componentDidUpdate================');
  }
  
  componentWillUnmount() {
      console.log('=============componentWillUnmount=============');
  }
renderContent(){
    if (this.state.lat && this.state.lang && !this.state.errorMessage) {
        return (
          <div>
            {/* <h1>latitude : {this.state.lat}</h1>
            <h1>longitude : {this.state.lang}</h1> */}
            <SeasonDisplay 
            lat={this.state.lat}
            lang = {this.state.lang} 
            />
          </div>
        );
      }
  
      if (!this.state.lat && !this.state.lang && this.state.errorMessage) {
        return (
          <div>
               <Spinner messageText= {this.state.errorMessage}/>
            {/* <div>Error: {this.state.errorMessage}</div> */}
          </div>
        );
      }
  
      return (
        <div>
                 <Spinner/>
        </div>
      );
}
  render() {
  return (
      <div className="container red">
          {this.renderContent()}
      </div>
  );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
