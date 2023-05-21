import React, { useEffect } from 'react';
import classes from './Header.module.css';
import Logo from './logo/Logo';
import Search from './search/Search';
import YourInfo from './your_info/YourInfo';
import styled from 'styled-components';

styled.header`
  border-bottom: 1px solid #ccc;
  height: 80px;
  width: 941px;
  max-width: 2520px;
  background-color: #ffffff;
  display: flex;
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  z-index: 1;
`;

const Header = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('컴포넌트가 마운트되었습니다.');
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={classes.header}>
      <div className={classes.header_wrap}>
        <Logo />
        <Search />
        <YourInfo />
      </div>
    </div>
  );
};

export default Header;
