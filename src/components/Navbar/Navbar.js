import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { Link ,NavLink } from "react-router-dom";

const cx = classNames.bind(styles);

const Navbar = () => {
    return ( 
        <div className={cx("inner_nav")}>
                    <a href="/" className={cx("Logo-link")}>Escape</a>

                    <ul className={cx("list-menu")}>
                        < NavLink to="/" className={cx("item-menu")} activeClassName={cx('active')}>HOME</NavLink>
                        < NavLink to="/categories" className={cx("item-menu")} activeClassName={cx('active')}>CATEGORIES</NavLink>
                        < NavLink to="/about" className={cx("item-menu")} activeClassName={cx('active')}>ABOUT</NavLink>
                        < NavLink to="/contact" className={cx("item-menu")} activeClassName={cx('active')}>CONTACT</NavLink>
                    </ul>
        </div>
     );
}
 
export default Navbar;