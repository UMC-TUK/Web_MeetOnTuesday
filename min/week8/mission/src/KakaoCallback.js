import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

const KakaoCallback = () => {
  const navigate = useNavigate();

  const code = new URL(window.location.href).searchParams.get("code");
  const grantType = "authorization_code";
  const CLIENT_SECRET = `${process.env.REACT_APP_CLIENT_SECRET}`;
  const REST_API_KEY = `${process.env.REACT_APP_KAKAO_API}`;
  const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_URI}`;

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: grantType,
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });
    try {
      await axios
        .post("https://kauth.kakao.com/oauth/token", payload)
        .then((res) => {
          console.log(res);
          const { data } = res;
          const { access_token } = data;
          if (access_token) {
            axios
              .post(
                "https://kapi.kakao.com/v2/user/me",
                {},
                {
                  headers: {
                    Authorization: `Bearer ${access_token}`,
                    "Content-Type": "application/x-www-form-unlencoded",
                  },
                }
              )
              .then((data) => {
                console.log("데이터?" + data);
                // navigate("/account");
              });
          } else {
            console.log("access_token 없음");
          }
        });
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(REST_API_KEY);
      }
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return null;
};

export default KakaoCallback;
