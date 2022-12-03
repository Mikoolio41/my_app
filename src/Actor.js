import React from "react";

const Actor = (props) => {
  return props.actorsList.map((actor) => (
    <ul key={actor.id}>
      <li>{actor.firstName}</li>
      <li>{actor.lastName}</li>
      <li>{actor.image}</li>
    </ul>
  ));
};

export default Actor;
