import Styles from './LineBottomText.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(Styles);

const LineBottomText = ({color}) => {
    return ( 
        <div className={cx('line', {color})}></div>
    );
}
 
export default LineBottomText;