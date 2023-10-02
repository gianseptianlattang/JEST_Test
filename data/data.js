const userNumber = Math.floor(Math.random() * 1000);

export const bodyRegister = () => {
  const register = {
    name: "Clark Kent",
    email: `superman${userNumber}@mailsac.com`,
    phone: "5555551234",
    password: "123456",
    password_confirmation: "123456",
  };
  return register;
};

export const bodyLogin = (email) => {
  const login = {
    email: email,
    password: "123456",
  };
  return login;
};

export const bodyForgotPassword = (email) => {
  const forgotPassword = {
    email: email,
    title: "Project Name",
    link: "https://example.com/",
  };
  return forgotPassword;
};

export const bodyResetPassword = (email, token) => {
  const forgotPassword = {
    password: "123456",
    password_confirmation: "123456",
    email: email,
    token: token,
  };
  return forgotPassword;
};
