import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
const cx = classNames.bind(styles);

const Banner = ({children, BG_section,title = false}) => {
    const BG_BANNER = {
        backgroundImage:  `linear-gradient(135deg, rgba(30, 33, 33, 0.82) 1%, rgba(32, 32, 32, 0.14) 98%), url(${BG_section})`,
        height: "inherit",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50%"
    }
    
    return ( 
       <div style={BG_BANNER}>
              <div className={cx("banner-hero")}>
              {title && <h2 className={cx("hero-heading")}>{title}</h2>}
                   {children}
               </div>
       </div>
    );
}
 
export default Banner;