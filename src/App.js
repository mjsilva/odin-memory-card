import "./App.css";
import * as unicodeEmoji from "unicode-emoji";
import uniqid from "uniqid";

const App = () => {
  return (
    <div className="App">
      <header>
        <div className="logo">MEMORY GAME</div>
        <div className="score">
          <div className="scoreContainer">
            <span className="label">SCORE</span>
            <span className="score">0</span>
          </div>
          <div className="scoreContainer">
            <span className="label">HIGH SCORE</span>
            <span className="highScore">0</span>
          </div>
        </div>
      </header>
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
