import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';

function App({ toggleTheme }) {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage toggleTheme={toggleTheme} />} />
      </Routes>
    </>
  )
}

export default App
