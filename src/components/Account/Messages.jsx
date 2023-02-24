import React, { useState } from "react";
import { addMessage } from "../../api-adapter";
import { useParams } from "react-router-dom";

const Messages = () => {
  const [content, setContent] = useState("");
  let { id } = useParams();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addMessage(content, id);
        }}
      >
        <textarea
          type="text"
          placeholder="Enter message"
          value={content}
          required
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button className="nav-button" type="Submit"></button>
      </form>
    </div>
  );
};

export default Messages;
