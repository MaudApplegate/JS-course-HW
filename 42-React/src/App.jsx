import { DataContextProvider } from './components/provider/DataContextProvider';
import ToDoListContext from './components/ToDoContext';

function App() {
  return (
    <div>
      <DataContextProvider>
        <ToDoListContext />
      </DataContextProvider>
    </div>
  );
}

export default App;
