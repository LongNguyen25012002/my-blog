import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import Banner from '../../components/Banner/Banner';
import SectionFrames from '../../components/Section/Section';
import Form from '../../components/Form/Form';

const cx = classNames.bind(styles);

const Contact = () => {
    let urlBG_Banner = "https://images.unsplash.com/photo-1606240174415-434439bd6d46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
    
    return (  
        <div className={cx("warpper")}>
            <Banner BG_section={urlBG_Banner}>
                <div className={cx("banner-hero")}>
                    <h2 className={cx("hero-heading")}>Let's Connect</h2>
                </div>
            </Banner>
            <SectionFrames>
                <div className="row">
                    <div className={cx("connect-info")}>
                        <h3>Connect with Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                        <a href="https://www.facebook.com/profile.php?id=100014107590054" className={cx("link-social")}>Facebook</a>
                        <a href="https://www.instagram.com/ndl.23/" className={cx("link-social")}>Instagram</a>
                        <a href="https://twitter.com/Long84831436" className={cx("link-social")}>Twitter</a>
                    </div>
                    <div className={cx("form-submit")}>
                        <Form textMes email name title="Send a Request"/>
                    </div>
                </div>
            </SectionFrames>
        </div>
    );
}
 
export default Contact;