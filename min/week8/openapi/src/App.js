import "./App.css";
import React, { useState } from "react";
import axios from "axios";

const URL =
  "http://openapi1.nhis.or.kr/openapi/service/rest/HmcSearchService/getRegnHmcList";
const URL2 =
  "http://openapi1.nhis.or.kr/openapi/service/rest/HmcSearchService/getHmcList";
function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [error, setError] = useState(null);
  const [click, setClick] = useState(false);
  const key = decodeURIComponent(process.env.REACT_APP_API_KEY);

  const onChange = (e) => {
    setText(e.target.value);
  };
  // 해당 키워드 전체 리스트 api 가져오기
  const fetchDataList = async () => {
    try {
      setError(null);
      setData(null);
      setLoading(true);

      const response = await axios.get(URL, {
        params: {
          serviceKey: key,
          hmcNm: text,
        },
      });

      setData(response.data);
      console.log(response.data);
    } catch (e) {
      setError(e);
      console.log(e);
    }
    setLoading(false);
  };

  // 해당 병원 정보 api 가져오기
  // api 가져오기
  const fetchDataDetail = async (item) => {
    try {
      setError(null);
      setData2(null);
      setLoading2(true);

      const response = await axios.get(URL2, {
        params: {
          serviceKey: key,
          hmcNm: item,
        },
      });

      setData2(response.data);
      console.log(response.data);
    } catch (e) {
      setError(e);
      console.log(e);
    }
    setLoading2(false);
  };

  const onClick = (item) => {
    setClick(item);
    fetchDataDetail(item);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div>
      <h1>검진기관 찾기</h1>
      <input type="text" onChange={onChange} value={text} />
      <button onClick={fetchDataList}>찾기</button>
      {data &&
        data.response.body.items.item.map((item, index) => (
          <div
            key={index}
            onClick={() => onClick(item.hmcNm)}
            style={{ cursor: "pointer", margin: "10px" }}
          >
            {item.hmcNm}
          </div>
        ))}
      <hr
        style={{
          border: "3px dotted black",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      />
      {click ? (
        <div style={{ margin: "10px" }}>
          <h2>검진기관 상세정보</h2>
          {!loading2 ? (
            <>
              <p>검진기관명: {data2 && data2.response.body.items.item.hmcNm}</p>
              <p>
                검진기관번호:{data2 && data2.response.body.items.item.hmcNo}{" "}
              </p>
              <p>
                검진기관전화번호:{" "}
                {data2 && data2.response.body.items.item.hmcTelNo}
              </p>
              <p>
                소재지 주소: {data2 && data2.response.body.items.item.locAddr}
              </p>
              <p>
                검진기관종별명:{" "}
                {data2 && data2.response.body.items.item.ykindnm}
              </p>
            </>
          ) : (
            "로딩중"
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
