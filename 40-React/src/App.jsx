import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import PhonePage from './components/PhonePage';
import NamePage from './components/NamePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="names" element={<NamePage />} />
          <Route path="phones" element={<PhonePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
