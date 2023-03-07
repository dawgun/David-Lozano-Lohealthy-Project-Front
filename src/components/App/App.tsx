import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loginUserActionCreator } from "../../store/user/userSlice";
import fetchToken from "../../utils/auth/auth";
import Layout from "../Layout/Layout";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";
import { useEffect } from "react";

function App(): JSX.Element {
  const { isLoadingShowing, isModalShowing } = useAppSelector(
    (state) => state.ui
  );
  const token = localStorage.getItem("token");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      const user = fetchToken(token);
      dispatch(loginUserActionCreator(user));
    }
  });
  return (
    <>
      {isLoadingShowing && <Loading />}
      {isModalShowing && <Modal />}
      <Layout />
    </>
  );
}

export default App;
