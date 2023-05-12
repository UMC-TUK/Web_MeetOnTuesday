import React from "react";
import { styled } from "styled-components";

const Inquire = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const InquireList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(226, 226, 226);
  border-radius: 3px;
  margin-right: 16px;
  width: 140px;
  height: 40px;
  color: #333;
`;

const InquireTime = styled.div`
  margin-top: 2px;
  color: rgb(153, 153, 153);
  font-size: 14px;
`;

const About = styled.a`
  margin-right: 5px;
  text-decoration: none;
  color: black;
  font-size: 14px;
`;

const SNS = styled.img`
  height: 30px;
  margin-right: 10px;
`;

const Coworkers = styled.div`
  display: flex;
  font-size: 10px;
  color: rgb(153, 153, 153);
  line-height: 14.5px;
  align-items: center;
  margin-bottom: 33px;
`;

const Btom = styled.div`
  background-color: rgb(247, 247, 247);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  font-size: 10px;
  color: rgb(153, 153, 153);
  line-height: 15px;
`;

export default function Bottom() {
  return (
    <>
      {/* 자세한 사항 */}
      <hr style={{ border: " 1px solid rgb(235, 235, 235)", marginBottom: "30px" }} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ marginRight: "200px" }}>
          <div style={{ paddingBottom: "17px", fontWeight: "500", fontSize: "20px", lineHeight: "29px" }}>고객행복센터</div>
          <div style={{ paddingBottom: "20px", fontSize: "28px", lineHeight: "40px", fontWeight: "700" }}>
            1644-1107 <span style={{ marginLeft: "8px", fontWeight: "normal", fontSize: "16px" }}>월~토요일 오전 7시 - 오후 6시</span>
          </div>
          <div>
            <Inquire>
              <InquireList>카카오톡 문의</InquireList>
              <InquireTime>
                <div>월~토요일 | 오전7시 - 오후6시</div>
                <div>일/공휴일 | 오전7시 - 오후1시</div>
              </InquireTime>
            </Inquire>
            <Inquire>
              <InquireList>1:1 문의</InquireList>
              <InquireTime>
                <div>365일</div>
                <div>고객센터 운영시간에 순차적으로 답변드리겠습니다.</div>
              </InquireTime>
            </Inquire>
            <Inquire>
              <InquireList>대량주문 문의</InquireList>
              <InquireTime>
                <div>월~금요일 | 오전9시 - 오후6시</div>
                <div>점심시간 | 낮12시 - 오후1시</div>
              </InquireTime>
            </Inquire>
          </div>
          <div style={{ fontSize: "12px", color: "rgb(153, 153, 153)" }}>
            <div>비회원 문의:help@kurlycorp.com</div>
            <div>비회원 대량주문 문의:kurlygift@kurlycorp.com</div>
          </div>
        </div>
        <div>
          <div style={{ marginBottom: "29px" }}>
            <About href="/">컬리소개</About>
            <About href="/">컬리소개영상</About>
            <About href="/">인재채용</About>
            <About href="/">이용약관</About>
            <About href="/">개인정보처리방침</About>
            <About href="/">이용안내</About>
          </div>
          <div style={{ marginBottom: "40px", color: " rgb(153, 153, 153)", fontSize: "12px", fontWeight: "400", lineHeight: "18px" }}>
            범인명(상호):주식회사 컬리 | 사업자등록번호:261-81-23567 <span style={{ color: "rgb(95, 0, 128)" }}>사업자정보 확인</span>
            <br />
            통신판매업:제2018-서울강남-01646호 | 개인정보보호책임자:이원준
            <br />
            주소:서울특별시 강남구 테헤란로 133,18층(역삼동) | 대표이사:김슬아
            <br />
            입점문의:<span style={{ color: "rgb(95, 0, 128)" }}>입점문의하기</span> | 제휴문의:
            <span style={{ color: "rgb(95, 0, 128)" }}>business@kurlycorp.com</span>
            <br />
            채용문의:<span style={{ color: "rgb(95, 0, 128)" }}>recruit@kurlycorp.com</span>
            <br />
            팩스:070-7500-6098
            <br />
          </div>
          <div>
            <SNS src="https://res.kurly.com/pc/ico/1810/ico_instagram.png" alt="none" />
            <SNS src="https://res.kurly.com/pc/ico/1810/ico_fb.png" alt="none" />
            <SNS src="https://res.kurly.com/pc/ico/1810/ico_blog.png" alt="none" />
            <SNS src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png" alt="none" />
            <SNS src="https://res.kurly.com/pc/ico/1810/ico_youtube.png" alt="none" />
          </div>
        </div>
      </div>
      <hr style={{ width: "1057px", border: " 1px solid rgb(235, 235, 235)", marginTop: " 30px" }} />
      {/*  협찬  */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
        <Coworkers>
          <img src="https://res.kurly.com/pc/ico/2208/logo_isms.svg" alt="none" style={{ marginRight: " 10px" }} />
          <div style={{ width: " 180px" }}>
            [인증범위]컬리 쇼핑몰 서비스 개발-운영
            <br />
            (심사받지 않은 물리적 인프라 제외)
            <br />
            [유효기간]2022.01.19~2025.01.18
          </div>
        </Coworkers>
        <Coworkers>
          <img src="https://res.kurly.com/pc/ico/2208/logo_privacy.svg" alt="none" style={{ marginRight: "10px", width: "34px" }} />
          <div style={{ width: "200px" }}>
            개인정보보호 우수 웹사이트 ・<br />
            개인정보처리시스템 인증 (ePRIVACY PLUS)
          </div>
        </Coworkers>
        <Coworkers>
          <img src="https://res.kurly.com/pc/ico/2208/logo_tosspayments.svg" alt="none" style={{ marginRight: "10px", width: "102px" }} />
          <div style={{ width: "190px" }}>
            토스페이먼츠 구매안전(에스크로)
            <br />
            서비스를 이용하실 수 있습니다.
          </div>
        </Coworkers>
        <Coworkers>
          <img src="https://res.kurly.com/pc/ico/2208/logo_wooriBank.svg" alt="none" style={{ marginRight: "10px", width: "34px" }} />
          <div style={{ width: "220px" }}>
            고객님이 현금으로 결제한 금액에 대해 우리은행과
            <br />
            채무지급보증 계약을 체결하여 안전거래를 보장하고
            <br />
            있습니다.
          </div>
        </Coworkers>
      </div>
      {/*  최하단 */}
      <Btom>
        컬리에서 판매되는 상품 중에는 컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다. <br />
        마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을
        부담하지 않습니다. <br />
        <br />© KURLY CORP. ALL RIGHTS RESERVED
      </Btom>
    </>
  );
}
