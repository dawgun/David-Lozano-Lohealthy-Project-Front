import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeModalActionCreator } from "../../store/UI/UISlice";
import ModalStyled from "./ModalStyled";

const Modal = (): JSX.Element => {
  const { type, message } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(closeModalActionCreator());
  };

  return (
    <ModalStyled>
      <span className={type ? "positive" : "negative"}>
        {message}
        <button onClick={handleCloseModal}>✕</button>
      </span>
    </ModalStyled>
  );
};

export default Modal;
