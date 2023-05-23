import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const GoogleLoginBtn = ({ setEmail, setName }) => {
  const navigate = useNavigate();
  return (
    <>
      <GoogleLogin
        onSuccess={(res) => {
          const result = jwtDecode(res.credential);
          setEmail(result.email);
          setName(result.name);
          console.log(result.email, result.name);
          navigate("/main");
        }}
        onFailure={(err) => {
          console.log(err);
        }}
      />
    </>
  );
};
export default GoogleLoginBtn;
