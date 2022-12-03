import React from "react";

function Hello(props) {
  const { name, username } = props;
  return (
    <div>
      <h1>Hello {name}</h1>
      <h2>{username}</h2>
    </div>
  );
}

export default Hello;
