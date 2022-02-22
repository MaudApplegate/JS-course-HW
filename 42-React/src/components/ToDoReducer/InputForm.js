import { useContext, useState } from 'react';
import {
  ReducerContext,
  ACTION_CREATE_TASK,
} from '../../ducks/reducer/Reducer';

const InputForm = () => {
  const MyContext = useContext(ReducerContext);

  // const [inputData, setInputData] = useState({ id: 0, text: '' });
  const [id, setId] = useState(0);
  const [val, setVal] = useState('');

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const handleClick = () => {
    setId((prev) => prev + 1);
    MyContext.dispatch(
      ACTION_CREATE_TASK({
        id: id,
        text: val,
      })
    );
    setVal('');
  };

  // const handleChange = (e) => {
  //   setInputData((prev) => ({ ...prev, text: e.target.value }));
  // };

  // const handleClick = () => {
  //   setInputData((prev) => ({ ...prev, id: prev.id + 1 }));
  //   MyContext.dispatch(
  //     ACTION_CREATE_TASK({
  //       id: inputData.id,
  //       text: inputData.text,
  //     })
  //   );
  //   setVal(() => '');
  // };

  return (
    <div>
      <h3>Write Task</h3>
      <input onChange={handleChange} value={val} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default InputForm;
