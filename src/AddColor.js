import { useState } from 'react';
import { ColorBox } from './ColorBox';

//hook - useState
//const [state, setState] = useState(intitalvalue)
// const  [like, setLike] = useState(10)
//state of art technology & state of mind - meaning 
export function AddColor() {
  // const color ="skyblue";
  //useState - string
  const [color, setColor] = useState("skyblue");
  //useState - array of string
  // const colorList = ["orange", "purple", "red", "pink"]
  const [colorList, setColorList] = useState(["orange", "purple", "pink"]);

  const styles = {
    backgroundColor: color,
    fontSize: "30px",
  };
  return (
    <div>
      <div className="add-color">
        <input
          // onChange -typing event , setColor -react-> value -> word
          onChange={(event) => setColor(event.target.value)}
          style={styles}
          type="text"
          // placeholder="Enter a color"
          value={color} />
        <button
          // copy the colorList and add newcolor to it
          onClick={() => setColorList([...colorList, color])}
        >Add Color</button>
      </div>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}

      {/* <ColorBox />
            <ColorBox /> */}
    </div>
  );
}
