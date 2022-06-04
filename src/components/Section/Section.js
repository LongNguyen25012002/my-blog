import Styles from './Section.module.scss';
import classNames from 'classnames/bind';
import LineBottomText from '../LineBottomText/LineBottomText';

const cx = classNames.bind(Styles);

const SectionFrames= ({children,title,line}) => {
    return (

            <div className={cx("wrapper")}>
                <div className="container">
                  {title && <h2 className={cx("section-title")}>{title}</h2>}
                  {line && <LineBottomText color/>}
                   {children}
                </div>
             </div> 
         );
}
 
export default SectionFrames;