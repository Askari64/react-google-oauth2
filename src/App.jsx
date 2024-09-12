
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import Home from './pages/Home';

import NotFound from './pages/NotFound';
import ProtectedRoute from './utility/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
        
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;