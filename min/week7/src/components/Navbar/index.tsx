import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
  const [menu, setMenu] = useState<boolean>(false);
  console.log(menu);
  const toggleMenu = () => {
    setMenu((menu) => !menu);
  };
  return (
    <NavbarContainer>
      <LogoContainer>
        <img
          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&amp;w=17&amp;q=75"
          alt="hamberger menu"
          height="14"
          onMouseOver={toggleMenu}
          onMouseOut={toggleMenu}
        />
        <div onMouseOver={toggleMenu} onMouseOut={toggleMenu}>
          <svg width="100" height="30" viewBox="0 0 140 32">
            <path
              fill="currentColor"
              d="M89.8 2.2l-5.6 2.4v4.8h-3.8v5.2h3.8v10.2c0 4.2 2.6 7 6.6 7 1.6 0 2.6-.4 3.2-.6V26c-.2 0-1 .2-1.8.2-1.6 0-2.4-.6-2.4-2.6v-8.8H94V9.6h-4.2V2.2zM28.6 9.6l-4 14-4.6-14h-5.6l-4.6 14L6 9.6H0l6.8 21.8h6l4.4-14.6 4.6 14.6h6l6.8-21.8zM134.4 2.2v8.6c-1.4-1-3-1.6-4.8-1.8h-.4-1.6c-5 .4-8.2 4.2-9.2 9-.2.8-.2 1.4-.2 2.2V22c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.4V0l-5.4 2.2zm-5.2 24.4c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM116.2 18c-.8-5.2-4.6-9-10-9s-9.2 3.8-10 9c-.2.8-.2 1.6-.2 2.6v1.6c.6 5.6 4.4 10 10.2 10 4.6 0 8-2.8 9.4-6.8l-5-1.2c-.8 1.8-2.4 3.2-4.4 3.2-2.8 0-4.6-2.2-5-5.2h15.2v-1.6c0-1 0-1.8-.2-2.6zm-14.8 0c.8-2.2 2.4-3.6 4.8-3.6s4 1.6 4.8 3.6h-9.6zM50.6 11c-1.4-1-3.2-1.8-5.2-1.8H44.8h-.6c-5.2.4-8.6 4-9.4 9-.2.8-.2 1.4-.2 2.2v1.8c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.6V9.6h-5.6V11zm-5.2 15.6c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM71.2 9c-2.2 0-4.6 1-6 3.2V9.6h-5.6v21.8h5.6V18.8c0-2.6 1.4-4.6 4-4.6 2.8 0 3.8 2 3.8 4.4v12.8h5.6V17.6c.2-4.8-2.2-8.6-7.4-8.6z"
            ></path>
          </svg>
        </div>
        {menu ? <div>dd</div> : ''}
      </LogoContainer>
      <MenuContainer>
        <ul>
          <li>
            <Link to="/other/채용">채용</Link>
          </li>
          <li>
            <Link to="/other/이벤트">이벤트</Link>
          </li>
          <li>
            <Link to="/other/직군별 연봉">직군별 연봉</Link>
          </li>
          <li>
            <Link to="/other/이력서">이력서</Link>
          </li>
          <li>
            <Link to="/other/커뮤니티">커뮤니티</Link>
          </li>
          <li>
            <Link to="/other/프리랜서">프리랜서</Link>
          </li>
          <li>
            <Link to="/other/채용">AI 합격예측</Link>
          </li>
        </ul>
      </MenuContainer>
      <EtcContainer>
        <EtcBtn>
          <svg
            xmlns="https://www.w3.org/2000/svg"
            xmlnsXlink="https://www.w3.org/1999/xlink"
            width="20"
            height="20"
            viewBox="0 0 18 18"
          >
            <defs>
              <path
                id="qt2dnsql4a"
                d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
              ></path>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <use
                fill="#333"
                fill-rule="nonzero"
                stroke="#333"
                stroke-width=".3"
                xlinkHref="#qt2dnsql4a"
              ></use>
            </g>
          </svg>
        </EtcBtn>
        <EtcBtn>
          <svg
            xmlns="https://www.w3.org/2000/svg"
            xmlnsXlink="https://www.w3.org/1999/xlink"
            width="20"
            height="20"
            viewBox="0 0 18 18"
          >
            <defs>
              <path
                id="bpnpn3yn0a"
                d="M7.554 14.813h3.183a1.689 1.689 0 01-3.183 0zm1.592 2.25a2.813 2.813 0 002.812-2.813.563.563 0 00-.562-.563h-7.5c-.31 0-.541-.014-.699-.04.018-.036.04-.077.066-.123.036-.065.354-.605.46-.8.477-.875.735-1.676.735-2.599V6.75c0-2.656 2.057-4.688 4.688-4.688 2.63 0 4.687 2.032 4.687 4.688v3.375c0 .923.258 1.724.736 2.6.106.194.424.734.46.799.026.046.047.087.065.123-.157.026-.389.04-.698.04a.564.564 0 000 1.126c1.263 0 1.896-.221 1.896-1.002 0-.26-.092-.494-.28-.833-.045-.083-.361-.619-.456-.792-.395-.724-.598-1.355-.598-2.061V6.75c0-3.28-2.563-5.813-5.812-5.813S3.333 3.47 3.333 6.75v3.375c0 .706-.203 1.337-.598 2.06-.094.174-.41.71-.456.793-.188.339-.279.572-.279.833 0 .78.632 1.002 1.896 1.002H6.39a2.813 2.813 0 002.756 2.25z"
              ></path>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(-1079 -16) translate(224 7) translate(855 9)">
                <mask id="1dencd96ob" fill="#fff">
                  <use xlinkHref="#bpnpn3yn0a"></use>
                </mask>
                <use
                  fill-rule="nonzero"
                  stroke="currentColor"
                  stroke-width=".3"
                  xlinkHref="#bpnpn3yn0a"
                ></use>
                <g fill="currentColor" mask="url(#1dencd96ob)">
                  <path d="M0 0H18V18H0z"></path>
                </g>
              </g>
            </g>
          </svg>
        </EtcBtn>
        <ProfileBtn>
          <div>민지</div>
        </ProfileBtn>
        <hr />
        <ServiceBtn>기업 서비스</ServiceBtn>
      </EtcContainer>
    </NavbarContainer>
  );
}

export default Navbar;

const NavbarContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: fixed;
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const LogoContainer = styled.div`
  width: 13%;
  display: flex;
  align-items: center;
  height: 100%;
  > img {
    width: 1.3rem;
    height: 1rem;
    cursor: pointer;
  }
  > div {
    margin-left: 1rem;
    cursor: pointer;
  }
  @media screen and (max-width: 1200px) {
    width: 18%;
    > img {
      width: 1rem;
    }
  }
  @media screen and (max-width: 800px) {
  }
`;
const MenuContainer = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  height: 100%;
  > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    bottom: 0;
  }
  > ul > li {
    margin-right: 2rem;
    list-style: none;
    font-size: 1rem;
    font-weight: 500;
    height: 100%;
    cursor: pointer;
  }
  > ul > li > a {
    text-decoration: none;
  }
  > ul > li > a:link,
  a:visited,
  a:hover,
  a:active {
    color: black;
  }
  @media screen and (max-width: 1200px) {
    width: 50%;
    justify-content: flex-start;
    > ul {
      justify-content: flex-start;
    }
    > ul > li {
      font-size: 0.8rem;
      margin-right: 1.5rem;
    }
  }
  @media screen and (max-width: 800px) {
  }
`;
const EtcContainer = styled.div`
  height: 100%;
  width: 18%;
  display: flex;
  align-items: center;
  justify-content: center;
  > hr {
    width: 0.1px;
    height: 10px;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
    color: #e1e2e3;
  }
`;
const EtcBtn = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 0.3rem;
`;
const ProfileBtn = styled.button`
  background-color: rgb(180, 0, 73);
  border: 1px solid #e1e2e3;
  border-radius: 50%;
  font-size: 0.5rem;
  width: 2.3rem;
  height: 2.3rem;
  color: white;
`;

const ServiceBtn = styled.button`
  border: 1px solid #e1e2e3;
  width: 6.5rem;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 3rem;
  color: #666;
  background-color: transparent;
  @media screen and (max-width: 1200px) {
    width: 20rem;
    font-size: 0.7rem;
  }
  @media screen and (max-width: 800px) {
  }
`;
