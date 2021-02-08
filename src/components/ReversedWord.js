import React, { useState, useEffect } from "react";

function ReversedWord({ word, setList, setWord, list }) {
  const [rev, setRev] = useState("");
  const reverseWord = () => {
    console.log({ word });
    let splitw = word.split("");
    let reversw = splitw.reverse();
    let joinw = reversw.join("");

    setRev(JSON.parse(JSON.stringify(joinw)));
  };
  useEffect(() => {
    reverseWord();
  }, [word]);
  return (
    <div>
      <b>Reversed word: {rev} </b><br />
      <button
        onClick={() => {
          setList([...list, rev]);
          setWord("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default ReversedWord;