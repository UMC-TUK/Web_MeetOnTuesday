import classes from './Header.module.css';
import Logo from './logo/Logo';
import Search from './search/Search';
import YourInfo from './your_info/YourInfo';

const Header = () => {
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