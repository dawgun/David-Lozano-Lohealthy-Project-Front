import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { useAppSelector } from "./store/hooks";

function App() {
  const { isModalShowing } = useAppSelector((state) => state.ui);
  return (
    <div className="main-container">
      {isModalShowing && <Modal />}
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
