import { ProtoUser } from "../../models/Users/Users";

const useUser = () => {
  const urlAPI = process.env.REACT_APP_API_URL;

  const userRegister = async (formRegisterData: ProtoUser) => {
    try {
      const response = await fetch(urlAPI + "user/register/", {
        method: "POST",
        body: JSON.stringify(formRegisterData),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error();
      }
    } catch (error) {
      return false;
    }
    return true;
  };

  return { userRegister };
};

export default useUser;
