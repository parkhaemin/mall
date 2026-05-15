import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import MainApp from "./MainApp";
import ProductDetail from "./ProductDetail";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<MainApp />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
}



