import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/main_layout/MainLayout";
import Provider from "./components/provider/Provider";
import CategoryPage from "./pages/CategoryPage";
import Home from "./pages/Home";
import NotFoun from "./pages/NotFound";

function App() {
  return (
    <Provider>
      
      <div className="grid grid-rows-[repeat(4,auto)] min-h-screen max-w-screen container">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="categoria/:category" element={<CategoryPage />} />
          </Route>
          <Route path="*" element={<NotFoun />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
