import React from 'react';

class SearchBar extends React.Component {
    // onInputChange(event){
    //    console.log(event.target.value);
    // }
    state = {searchTerm: ''};

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.searchTerm);
        this.props.onSubmit(this.state.searchTerm);
    }

    render() {
        return(
            <div className="ui segment">
               <form onSubmit={this.onFormSubmit} className="ui form">
               <div className="field">
                  <label>First name</label>
                    <input 
                    type="text" 
                    placeholder="Enter Serach Value"
                    value= {this.state.searchTerm}
                    onChange={e => this.setState({searchTerm: e.target.value})}
                    />
                     </div>
               </form>
            </div>
        );
    }
}

export default SearchBar;