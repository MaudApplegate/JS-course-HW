import { useContext, useState } from 'react';
import {
  ReducerContext,
  ACTION_CREATE_TASK,
} from '../../ducks/reducer/Reducer';

const InputForm = () => {
  const MyContext = useContext(ReducerContext);

  const [inputData, setInputData] = useState({ id: 0, text: '' });

  const handleChange = (e) => {
    setInputData((prev) => ({ ...prev, text: e.target.value }));
  };

  const handleClick = () => {
    setInputData((prev) => ({ ...prev, id: prev.id + 1 }));
    MyContext.dispatch(
      ACTION_CREATE_TASK({
        [inputData.id]: {
          id: inputData.id,
          text: inputData.text,
        },
      })
    );
  };

  return (
    <div>
      <h3>Write Task</h3>
      <input onChange={handleChange} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default InputForm;
