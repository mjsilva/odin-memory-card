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
    unicodeEmoji.getEmojisGroupedBy("subgroup")["animal-reptile"]
  );

  const nextPlay = (emoji) => {
    const newScore = score + 1;

    setMemory(memory.concat([emoji]));
    setScore(newScore);

    if (newScore === emojiList.length) {
      alert("You won!!! OMG I didn't think that was possible!");
      resetGame();
      return;
    }

    //scramble emojiList
    setEmojiList(_.shuffle(emojiList));
  };

  const setHighScoreIfNeeded = () => {
    if (score > highScore) {
      setHighScore(score);
    }
  };

  const resetGame = () => {
    // reset score
    setScore(0);

    // reset memory
    setMemory([]);
  };

  const gameOver = () => {
    setHighScoreIfNeeded();
    resetGame();
    alert("You've picked that one before. Game Over!");
  };

  const gamePlay = (e, emoji) => {
    !memory.includes(emoji) ? nextPlay(emoji) : gameOver();
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
              className="card"
              onClick={(e) => {
                gamePlay(e, emojiObj.emoji);
              }}
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
