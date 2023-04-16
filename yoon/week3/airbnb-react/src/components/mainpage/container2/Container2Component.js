import classes from './Container2Component.module.css';


const Container2Component = (props) => {
  return (
    <div className={classes.component}>
      <div>
      </div>
        <img src={props.img_src} alt="호텔 사진"/>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
    </div>
  );
};

export default Container2Component;