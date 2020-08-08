import React from "react";

// stateless component
export default (props) => {
  return (
    <div className="img-div">
      <img src={require(`assets/images/${props.src}`)} alt={props.alt} />
    </div>
  );
};
