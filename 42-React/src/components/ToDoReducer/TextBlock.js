import { useContext } from 'react';
import { ReducerContext } from '../../ducks/reducer/Reducer';

const TextBlock = () => {
  const MyContext = useContext(ReducerContext);
  const state = Object.values(MyContext.state);

  return (
    <ul>
      <h3>Tasks To Do</h3>
      {state.map((el) => (
        <li key={el.id}>
          <p>{el.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default TextBlock;
