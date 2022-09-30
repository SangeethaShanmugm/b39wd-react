import { useState } from 'react';

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

  return (
    <div>
      {/* onClick - camelCase */}
      <button className="btn-like"
        onClick={() => { setLike(like + 1); }}
      >👍 {like}</button>
      <button className="btn-dislike"
        onClick={() => { setDislike(dislike + 1); }}
      >👎 {dislike}</button>
    </div>
  );
}
