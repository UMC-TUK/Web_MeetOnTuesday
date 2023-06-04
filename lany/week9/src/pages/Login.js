import TopBar from "../components/TopBar";
import SearchBar from "../components/SearchBar";
import CategoryBar from "../components/category/CategoryBar";
import Bottom from "../components/Bottom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login({ isMarket, setLocation }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();
  const onClick = async () => {
    if (!id || !pw) {
      if (!id) alert("아이디를 입력해주세요.");
      else alert("비밀번호를 입력해주세요.");
      return;
    }
    await axios
      .get("/dummy/users.json")
      .then(function (res) {
        const users = res.data;
        if (users.filter((user) => user.id === `${id}`).length === 0) {
          alert("아이디 혹은 비밀번호를 확인해주세요.");
        } else {
          const user = users.filter((user) => user.id === `${id}`)[0];
          localStorage.setItem("token", user.token);
          alert(`${user.nickname}님 환영합니다.`);
          navigate("/");
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  return (
    <>
      <TopBar />
      <SearchBar isMarket={isMarket} setLocation={setLocation} />
      <CategoryBar isMarket={isMarket} />
      <hr style={{ border: "1px solid rgb(235, 235, 235)", marginBottom: "30px" }} />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <h2>로그인</h2>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디를 입력해주세요"
          style={{ width: "300px", height: "50px", marginBottom: "10px", paddingLeft: "10px", borderRadius: "3px", border: "1px solid grey" }}
        />
        <input
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder="비밀번호를 입력해주세요"
          style={{ width: "300px", height: "50px", paddingLeft: "10px", borderRadius: "3px", border: "1px solid grey", marginBottom: "15px" }}
        />
        <div style={{ display: "flex", justifyContent: "flex-end", width: "300px", marginBottom: "30px", fontSize: "14px" }}>아이디 찾기 | 비밀번호 찾기</div>
        <input
          type="button"
          value="로그인"
          style={{
            width: "300px",
            height: "50px",
            marginBottom: "10px",
            backgroundColor: "rgb(95, 0, 128)",
            color: "white",
            border: "1px solid rgb(95, 0, 128)",
            borderRadius: "3px",
          }}
          onClick={onClick}
        />
        <input
          type="button"
          value="회원가입"
          style={{
            width: "300px",
            height: "50px",
            marginBottom: "100px",
            backgroundColor: "white",
            color: "rgb(95, 0, 128)",
            border: "1px solid rgb(95, 0, 128)",
            borderRadius: "3px",
          }}
        />
      </div>
      <Bottom />
    </>
  );
}
