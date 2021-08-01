import React from "react";
import Dictionary from "./Dictionary";
import Heading from "./Heading";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <Heading />

      <dl className="dictionary">
        {emojipedia.map((emojiItem) => {
          return (
            <Dictionary
              key={emojiItem.id}
              emoji={emojiItem.emoji}
              name={emojiItem.name}
              meaning={emojiItem.meaning}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
