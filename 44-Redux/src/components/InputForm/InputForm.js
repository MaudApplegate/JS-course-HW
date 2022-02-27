import { useDispatch } from 'react-redux';
import { ACTION_SET_DATA } from '../../ducks/inputDataReducer';

const InputForm = () => {
  const dispatch = useDispatch();
  let nextToDoId = 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      ACTION_SET_DATA({
        id: nextToDoId++,
        text: e.target.elements.task.value,
      })
    );
    e.target.elements.task.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Write Task</h3>
      <input name="task" />
      <button>Add Task</button>
    </form>
  );
};

export default InputForm;
