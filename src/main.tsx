import { Route, Routes } from 'react-router-dom';
import Characters from "./pages/Characters";

  const Main = () => (
    <Routes>
      <Route path='/' element={<Characters />}></Route>
    </Routes>
  );

  export default Main;