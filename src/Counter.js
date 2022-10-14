import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

//JSX -- js XML  - JSX will be converted to javascript
//webpack + babel
//className - class in JS - reserved keyword
// {} = Template syntax
// props -object - you can pass like an argument in a function
// function Fun() {
//   return <div>Hello Everyone </div>;
// }
export function Counter() {

  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
 
 useEffect(() => {
  console.log("Total click:", like + dislike)
 }, [like,dislike])

  return (
    <div>
      {/* onClick - camelCase */}
      {/* <button className="btn-like"
        onClick={() => { setLike(like + 1); }}
      >👍 {like}</button> */}

      <IconButton 
       onClick={() => { setLike(like + 1); }}
       className ="bt-sz-lg"
       aria-label="like-btn"
       color="primary">    
      <Badge badgeContent={like} color="primary">
      👍
      </Badge>
      </IconButton>

      <IconButton 
       onClick={() => { setDislike(dislike + 1); }}
       className ="bt-sz-lg"
       aria-label="dislike-btn"
       color="error">      
      <Badge badgeContent={dislike} color="error">
      👎 
      </Badge>
      </IconButton>
     
    </div>
  );
}
