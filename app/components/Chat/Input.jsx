import { useContext, useState } from "react";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const handleSend = async () => {};

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
