import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Navigation from "./components/Navigation/Navigation";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { useAppSelector } from "./store/hooks";

function App() {
  const { isModalShowing } = useAppSelector((state) => state.ui);
  return (
    <div className="main-container">
      {isModalShowing && <Modal />}
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
