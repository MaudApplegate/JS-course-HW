import { useSelector } from 'react-redux';
import { ButtonDelete } from './buttons';

const ListBlock = () => {
  const data = useSelector((state) => state.data);

  return (
    <ul>
      <h3>Tasks To Do</h3>
      {data.map((data) => (
        <li key={data.id}>
          <p>{data.text}</p>
          <ButtonDelete idprop={data.id} />
        </li>
      ))}
    </ul>
  );
};

export default ListBlock;
