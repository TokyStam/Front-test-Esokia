import React, { useState } from "react";

function ReverseList({ list, clearList }) {
  return (
    <div>
      <ul>
        {list.map((e) => {
          return <li>{e}</li>;
        })}
      </ul>
      <button onClick={() => clearList([])}>Clear list</button>
    </div>
  );
}

export default ReverseList;
