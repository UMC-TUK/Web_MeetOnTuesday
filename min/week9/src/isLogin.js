const isLogin = () => {
  if (!localStorage.getItem("access_token")) {
    alert("로그인 후 이용해주세요!");
    window.location.replace("/");
  }
};

export default isLogin;
