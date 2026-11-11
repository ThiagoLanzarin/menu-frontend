import { Routes, Route, Navigate } from "react-router-dom"
import { AppLayout } from "./components/layout/app-layout"
import { ProductPage } from "./pages/product/product-page"


function App() {
  return (
    <Routes>
      <Route element={<AppLayout />} >
        <Route index element={<Navigate to="/products" />} />
        <Route path="products" element={<ProductPage />} />
      </Route>
    </Routes>
  )
}

export default App
