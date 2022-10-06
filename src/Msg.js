import { Counter } from './Counter';

export function Msg({ name, pic }) {
  return (
    <div className='user-container'>
      <img className="profile-pic" src={pic} alt={name} />
      <h1>Hi, {name}</h1>
      <Counter />
    </div>
  );
}
