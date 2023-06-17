import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import CategoryList from "./components/CategoryList";
import MealAbout from "./components/MealAbout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/:id" element={<CategoryList />}/>
      <Route path="/:id/:id" element={<MealAbout />}/>
    </Routes>
  );
}

export default App;