import "./App.css";
import * as unicodeEmoji from "unicode-emoji";
import uniqid from "uniqid";
import { useState } from "react";
import _ from "lodash";

const App = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [memory, setMemory] = useState([]);
  const [emojiList, setEmojiList] = useState(
    unicodeEmoji.getEmojisGroupedBy("subgroup")["food-prepared"]
  );

  const gamePlay = (e, emoji) => {
    // not selected yet
    if (!memory.includes(emoji)) {
      setMemory(memory.concat([emoji]));
      setScore(score + 1);

      //scramble emojiList
      setEmojiList(_.shuffle(emojiList));
    } else {
      // already selected
      // sets high-score
      if (score > highScore) {
        setHighScore(score);
      }

      // reset score
      setScore(0);

      // reset memory
      setMemory([]);

      alert("Game Over!")
    }
  };

  return (
    <div className="App">
      <header>
        <div className="logo">MEMORY GAME</div>
      </header>
      <div className="score">
        <div className="scoreContainer">
          <span className="label">SCORE</span>
          <span className="score">{score}</span> /
          <span className="possibleScore">{emojiList.length}</span>
        </div>
        <div className="scoreContainer">
          <span className="label">HIGH SCORE</span>
          <span className="highScore">{highScore}</span>
        </div>
      </div>
      <div className="cards">
        {emojiList.map((emojiObj) => {
          return (
            <div
              onClick={(e) => {
                gamePlay(e, emojiObj.emoji);
              }}
              className="card"
              key={uniqid()}
            >
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
