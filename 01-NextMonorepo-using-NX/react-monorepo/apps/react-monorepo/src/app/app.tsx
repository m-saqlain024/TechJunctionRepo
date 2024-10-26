import NxWelcome from './nx-welcome';
import { Route, Routes } from 'react-router-dom';
import { Products } from '@react-monorepo/products';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NxWelcome title="react-monorepo" />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </>
  );
}

export default App;
