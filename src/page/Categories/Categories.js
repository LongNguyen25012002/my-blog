import styles from './Categories.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import SectionFrames from '../../components/Section/Section';
import { listTpyePost } from '../../unilts';

const cx = classNames.bind(styles);

const Categories = () => {
    let urlBG_Banner = "https://images.unsplash.com/photo-1607984281505-ed1208088561?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80";
    
    return (  
        <div className={cx("warpper")}>
            <Banner BG_section={urlBG_Banner}>
                <div className={cx("banner-hero")}>
                    <h2 className={cx("hero-heading")}>Categories</h2>
                </div>
            </Banner>
            <SectionFrames>
                <div className={cx("row")}>
                    {
                        listTpyePost.map((item,index) => {

                            return (
                                <Link to={item.path} key={index} 
                                style={{backgroundImage: `url(${item.background})`}}
                                className={cx("card")}>
                                    <h3>{item.type}</h3>
                                </Link>
                            )
                        })
                    }
                </div>
            </SectionFrames>
        </div>
    );
}
 
export default Categories;