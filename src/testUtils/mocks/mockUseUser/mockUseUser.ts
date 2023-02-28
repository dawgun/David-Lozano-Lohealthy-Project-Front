import useUser from "../../../hooks/useUser/useUser";

const mockUseUser: ReturnType<typeof useUser> = {
  userLogin: jest.fn(),
  userLogout: jest.fn(),
  userRegister: jest.fn(),
};

jest.mock(
  "../../../hooks/useUser/useUser",
  () => (): ReturnType<typeof useUser> => ({
    userLogin: mockUseUser.userLogin,
    userLogout: mockUseUser.userLogout,
    userRegister: mockUseUser.userRegister,
  })
);

export default mockUseUser;
