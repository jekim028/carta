import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import courses from './courses';
import Course from './pages/Course';
import CoursePage from './pages/CoursePage';

function App() {
  const courseElems = courses.map(course => {
    return <Course 
      key={course.id}
      course={course}
    />
  })

  return (
    <div className="App">
      <Navbar /> 
      <Routes>
        <Route path="/" element={courseElems} />
        <Route path="/:id" element={<CoursePage />} />
      </Routes>
    </div>
  );
}

export default App;
