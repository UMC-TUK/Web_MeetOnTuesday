import classes from './Search.module.css';

const Search = () => {
  return (
  <div className={classes.search}>
    <div className={classes.search_wrap}>
      <div className={classes.search_button1_wrap}>
        <button className={classes.search_button1}>어디든지</button>
      </div>
      <div className={classes.search_button2_wrap}>
        <button className={classes.search_button2}><div className={classes.search_button2_component1}>언제든 일주일</div></button>
      </div>
      <div className={classes.search_button3_wrap}>
        <button className={classes.search_button3}>
          <div className={classes.search_button3_component1}>게스트 추가</div>
          <svg className={classes.search_button3_component2} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" ><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
        </button>
      </div>
    </div>
  </div>
  );
};

export default Search;