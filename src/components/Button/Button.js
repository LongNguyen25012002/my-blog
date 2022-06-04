import Styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(Styles);

const Button = ({
    to,
     href, children,text = false, className = false,
      onClick, small = false ,
     primary = false , defaultState = false, NavLink = false,active = false,
       ...passProps}) => {

    let Comp = 'button';

    const props = {
        onClick,
        ...passProps
    }

    if (to) {
        props.to = to
        Comp = Link;
    } else if (href){
        props.href = href;
        Comp = 'a';
    } else if (NavLink){
        props.to = to;
        Comp = NavLink
    }

    const classes = cx('wrapper', {
        [className]: className,
        defaultState,
        primary,
    });

    return ( 
        <Comp className={classes } {...props}>
            <span className={cx('title')}>{children}</span>
        </Comp>
     );
}
 
export default Button;