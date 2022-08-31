import { ProtoUser } from "../../models/Users/Users";

const useUser = () => {
  const urlAPI = process.env.REACT_APP_API_URL;

  const userRegister = async (formRegisterData: ProtoUser) => {
    try {
      await fetch(urlAPI + "user/register/", {
        method: "POST",
        body: JSON.stringify(formRegisterData),
        headers: {
          "Content-type": "application/json",
        },
      });
    } catch (error) {}
  };

  return { userRegister };
};

export default useUser;
