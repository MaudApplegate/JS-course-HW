import { useDispatch } from 'react-redux';
import { ACTION_DELETE_DATA } from '../../ducks/inputDataReducer';

export const ButtonDelete = ({ idprop }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      ACTION_DELETE_DATA({
        id: idprop,
      })
    );
  };

  return <button onClick={handleClick}>Delete</button>;
};
