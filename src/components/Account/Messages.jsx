import React, { useState } from "react";
import { addMessage } from "../../api-adapter";

const Messages = (props) => {
  const [content, setContent] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addMessage();
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
        <button
          className="nav-button"
          style={{ height: "30px", width: "15px" }}
          type="Submit"
        ></button>
      </form>
    </div>
  );
};

export default Messages;
