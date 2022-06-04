import styles from './Form.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);


const Form = ({title=false, textMes=false,
     name=false,email=false, password=false , repassword=false}) => {
    return (
        <form className={cx("form")}>
            {title && <h2 className={cx("title-form")}>{title}</h2>}
        {
        name &&
        <label>
            <p>Name:</p>
            <input type="text" name="name"  placeholder="Enter Your Name" />
       </label>
        }
        
        {
            email && 
            <label>
             <p>Email Address:</p>
            <input type="text" name="name" placeholder="Enter Your Email"/>
           </label>
        }

        {
            password &&
            <label>
            <p>your password:</p>
           <input type="text" name="name"  placeholder="Enter Your Password"/>
           </label>
        }

        {
            repassword && 
            <label>
            <p>your again password:</p>
           <input type="password" name="name" placeholder="Enter Your Again Password" />
           </label>
        }

        {
            textMes &&
            <label>
                <p>Your Messages</p>
                <textarea placeholder="Enter Your Messages" rows="10" cols="50"/>
            </label>
        }
         <input type="submit" value="Submit" className={cx("btn-submit")} />
        </form>
     );
}
 
export default Form;