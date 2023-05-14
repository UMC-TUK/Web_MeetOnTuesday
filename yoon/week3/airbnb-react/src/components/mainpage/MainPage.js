import Container1 from './container1/Container1';
import Container2 from './container2/Container2';
import Header from './header/Header';
import Footer from './footer/Footer';
import classes from './MainPage.module.css';

const MainPage = () => {
  return (
    <div className={classes.main}>
      <Header />
      <Container1 />
      <Container2 />
      <Footer />
    </div>
  );
};

export default MainPage;
