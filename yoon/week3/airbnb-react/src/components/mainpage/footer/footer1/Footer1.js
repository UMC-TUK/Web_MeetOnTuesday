import classes from './Footer1.module.css';

const Footer1 = () => {
  return ( 
  <div className={classes.footer1}>
    <span className={classes.footer1_inc_name} >© 2023 Airbnb, Inc.</span>
    <span className={classes.footer1_dot}>·</span>
    <span>
      <ol className={classes.footer1_ol}>
        <li className={classes.footer1_li}><a className={classes.footer1_a} href="/terms/privacy_policy" >개인정보 처리방침</a></li>
        <li className={classes.footer1_li}><span className={classes.footer1_dot} aria-hidden="true">·</span><a href="/terms" className={classes.footer1_a}>이용약관</a></li>
        <li className={classes.footer1_li}><span className={classes.footer1_dot} aria-hidden="true">·</span><a className={classes.footer1_a} href="/sitemaps/v2">사이트맵</a></li>
        <li className={classes.footer1_li}><span className={classes.footer1_dot} aria-hidden="true">·</span><a className={classes.footer1_a} target="_blank" href="/home/updated_cancellation_policies?korean_strict_policy=true#strict">한국의 변경된 환불 정책</a></li>
        <li className={classes.footer1_li}><span className={classes.footer1_dot} aria-hidden="true">·</span><a className={classes.footer1_a} target="_blank" href="/about/company-details">회사 세부정보</a></li>
      </ol>
    </span>
  </div>);
};

export default Footer1;
