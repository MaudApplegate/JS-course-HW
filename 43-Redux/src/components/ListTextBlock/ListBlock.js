import { useSelector } from 'react-redux';

const ListBlock = () => {
  const data = useSelector((state) => state);
  console.log(data);
  return (
    <ul>
      <h3>Tasks To Do</h3>
      {
        <li>
          <p>TextTask</p>
        </li>
      }
    </ul>
  );
};

export default ListBlock;
