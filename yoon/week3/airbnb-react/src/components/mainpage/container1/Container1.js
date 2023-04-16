import Category from './category/Cateogry';
import Filter from './filter/Filter';
import classes from './Container1.module.css';


const Container1 = () => {
  return (
  <div className={classes.container1}>
    <div className={classes.container1_wrap}>
      <Category />
      <Filter />
    </div>
  </div>
  );
};

export default Container1;