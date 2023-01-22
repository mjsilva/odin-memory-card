import "./App.css";
import * as unicodeEmoji from "unicode-emoji";
import uniqid from "uniqid";

const App = () => {
  return (
    <div className="App">
      <div className="cards">
        {unicodeEmoji
          .getEmojisGroupedBy("subgroup")
          ["food-prepared"].map((emojiObj) => {
            return (
              <div className="card" key={uniqid()}>
                <div className="emoji">{emojiObj.emoji}</div>
                <div className="description">{emojiObj.description}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
