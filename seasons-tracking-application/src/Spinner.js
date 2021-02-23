import React from "react";

const Spinner = (props) => {
    console.log(props)
  return (
    <div>
   
        <div className="ui active dimmer">
  <div className="ui massive text loader">{props.messageText}</div>
        </div>
        <p></p>
        <p></p>
        <p></p>
      </div>
  
  );
};

Spinner.defaultProps = {
    messageText:'loading.... Please Wait!'
}
export default Spinner;
