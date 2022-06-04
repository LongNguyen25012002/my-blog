import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Navbar from '../../../components/Navbar/Navbar';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cx('header')}>
            <div className="container">
                <Navbar />
            </div>
        </header>
    );
}
 
export default Header;