import classes from './Search.module.css';

const Search = () => {
  return (
    <div className={classes.search}>
      <div className={classes.search_buttons}>
        <button className={classes.search_button1}>
          <div className={classes.search_button1_div}>어디...</div>
        </button>
        <button className={classes.search_button2}>
          <div className={classes.search_button2_div}>언제든 일...</div>
        </button>
        <button className={classes.search_button3}>
          <div className={classes.search_button3_div}>
            <div className={classes.search_button3_1}>게스트 ...</div>
            <div className={classes.search_button3_2}>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className={classes.svgfile}
              >
                <g fill="none">
                  <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                </g>
              </svg>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Search;
