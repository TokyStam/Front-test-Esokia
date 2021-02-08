import "./App.css";
import WordInput from "./components/WordInput";
import ReversedWord from "./components/ReversedWord";
import ReverseList from "./components/ReverseList";
import { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const [rev, setRev] = useState("");
  const [list, setList] = useState([]);
  const clearList = () => {
    setList([]);
  };

  const addList = () => {};
  return (
    <div className="App">
      <b>Enter a word: </b>
      <WordInput setWord={setWord} />
      <hr/>
      <ReversedWord
        word={word}
        setRev={setRev}
        list={list}
        setWord={setWord}
        setList={setList}
      />
      <hr/>
      <b>Reversed words List:</b>
      <ReverseList list={list} clearList={clearList} />
    </div>
  );
}

export default App;
