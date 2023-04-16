import Footer1 from './footer1/Footer1';
import Footer2 from './footer2/Footer2';
import classes from './Footer.module.css';
import MapButton from './mapbutton/MapButton';

const Footer = () => {
  return (
  <div className={classes.footer}>
    <MapButton />
    <div className={classes.footer_wrap}>
      <Footer1 />
      <Footer2 />
    </div>
  </div>);
};

export default Footer;