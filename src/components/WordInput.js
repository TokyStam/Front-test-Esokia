import React, { useState, useEffect } from "react";

function WordInput({ word, setWord }) {
  const onChange = (e) => {
    setWord(e.target.value);
  };
  return (
    <div>
      <input value={word} onChange={onChange} />
    </div>
  );
}

export default WordInput;
