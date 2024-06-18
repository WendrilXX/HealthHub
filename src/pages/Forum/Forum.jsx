import './Forum.css';
import React from "react";
import Conversa from "../../components/conversation/Conversa";
import { Widget } from "../../components/Widget";
function Forum() {
  return (
    <div>
      {<Widget />}
      <Conversa></Conversa>
    </div>
  );
}

export default Forum;
