import React from "react";
import Layers from "./Layers";

function Avatar({
  body,
  eyes,
  hair,
  mouth,
  eyebrows,
  glasses,
  hat,
  clothing1,
  clothing2,
  clothing3,
}) {
  const nose = 0;
  return (
    <div>
      <Layers id={body} link="character/body" zIndex="0" />
      <Layers id={eyes} link="character/eyes" zIndex="1" />
      <Layers id={hair} link="character/hair" zIndex="5" />
      <Layers id={mouth} link="character/mouths" zIndex="1" />
      <Layers id={eyebrows} link="character/eyebrows" zIndex="2" />
      <Layers id={nose} link="character/noses" zIndex="1" />
      <Layers id={glasses} link="character/accessories/glasses" zIndex="5" />
      <Layers id={hat} link="character/accessories/hats" zIndex="6" />
      <Layers id={clothing1} link="character/clothes/layer_1" zIndex="3" />
      <Layers id={clothing2} link="character/clothes/layer_2" zIndex="3" />
      <Layers id={clothing3} link="character/clothes/layer_3" zIndex="3" />
    </div>
  );
}

export default Avatar;
