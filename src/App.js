import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Signup from './pages/Signup.js'
import Loginpage from './pages/Login.js'

export default function App() {
  return (
    <div className="container mx-auto bg-gray-200 h-screen flex items-center justify-center px-96 ">
      <div className="max-w-md w-full space-y-8">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Loginpage />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

