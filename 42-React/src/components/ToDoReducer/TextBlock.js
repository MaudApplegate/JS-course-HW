import { useContext } from 'react';
import {
  ACTION_DELETE_TASK,
  ReducerContext,
} from '../../ducks/reducer/Reducer';

const TextBlock = () => {
  const MyContext = useContext(ReducerContext);
  const state = MyContext.state;

  const handleClickDelete = (e) => {
    MyContext.dispatch(ACTION_DELETE_TASK(e.target.attributes['idprop'].value));
  };

  const handleClickEdit = (e) => {};

  return (
    <ul>
      <h3>Tasks To Do</h3>
      {state.map((el) => (
        <li key={el.id}>
          <p>{el.text}</p>
          <button idprop={el.id} onClick={handleClickDelete}>
            Delete
          </button>
          <button idprop={el.id} onClick={handleClickEdit}>
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TextBlock;
