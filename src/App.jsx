// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import HomePage from "./pages/home-page.jsx";
import TemplatePage from "./pages/template-page.jsx";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/templates" element={<TemplatePage/>} />
                <Route path="/pricing" element={<div>contact</div>} />
            </Routes>
        </Router>
    );
}

export default App;
