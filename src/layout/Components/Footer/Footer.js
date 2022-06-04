import styles  from './Footer.module.scss';
import classNames from 'classnames/bind';
import Navbar from '../../../components/Navbar/Navbar';
import LineBottomText from '../../../components/LineBottomText/LineBottomText';
const cx = classNames.bind(styles)

const Footer  = () => {
    return ( 
        <footer className={cx('footer')}>
            <div className="container">
               <div className={cx("wrapper")}>
                   <div className={cx("footer-search")}>
                       <h3 className={cx('footer-title')}>Stay in Touch</h3>
                       <LineBottomText />
                       <div className={cx("group-input")}>
                           <input  placeholder="Enter your email address"/>
                           <button type="submit">submit</button>
                       </div>
                   </div>
                  
               </div>
            </div>
            <div className={cx("footer-link")}>  
                    <div className="container">
                        <Navbar />
                  </div>
            </div>
        </footer>
     );
}
 
export default Footer ;