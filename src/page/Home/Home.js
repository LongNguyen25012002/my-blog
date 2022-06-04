
import {Link, Outlet} from 'react-router-dom';

import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Banner from '../../components/Banner/Banner';
import Button from '../../components/Button/Button';
import { listTpyePost } from '../../unilts';
import SectionFrames from '../../components/Section/Section';
import { FeaturedPosts, ListRecent } from './dataStatic';
import Card from '../../components/Card/Card';
const cx = classNames.bind(styles);

const Home = () => {
    let urlBG_Banner = "https://assets.website-files.com/5e4b1929fccc7f2575de825e/5e4b1929fccc7fd4d0de82b2_photo-1439189741837-58720e8d82d5.jpg";
    return ( 
        <div className="wrapper">
            <Banner BG_section={urlBG_Banner}>
                <div className={cx("banner-hero")}>
                    <h2 className={cx("hero-heading")}>Let's do it together.</h2>
                    <p className={cx("hero-mes")}>We travel the world in search of stories. Come along for the ride</p>
                    <Button primary > View Lates Posts</Button>
                </div>
            </Banner>
            <div className={cx("nav-link")}>
                        {
                            listTpyePost.map((link,index) => (
                                <Button defaultState key={index} to={link.path}>{link.type}</Button>
                            ))
                        }
                            <Outlet />
            </div>
            <SectionFrames title="Featured Posts" line>
                <div className="d-flex">
                    {
                        FeaturedPosts.map(item => {
                            const {bg} = item;
                            return   (
                                    <Link to={`/blog/${item.path}`} style={{backgroundImage: `url(${bg})`}}
                                     className={cx(`card`,[item.typePosts])} key={item.id}>
                                        <span 
                                        className={cx("type-post")
                                        }>{item.typePosts}</span>
                                        <h2 className={cx("title-post")}>{item.title}</h2>
                                        <p className={cx("des-post")}>{item.des}</p>
                                        <div className="d-flex d-flex-sp">
                                            <div className={cx("box")}>
                                                <img src={item.imageAuthor} alt="img-auhtor"/>
                                                <span className={cx("name-author")}>{item.nameAuthor}</span>
                                            </div>
                                            <p className={cx("item-post")}>{item.timeNow}</p>
                                        </div>
                                    </Link>
                                )

                            }
                        )
                    }
                </div>
            </SectionFrames>
            <SectionFrames title="Most Recent" line>
                    <Card dataCard={ListRecent}/>
            </SectionFrames>
        </div>
     );
}
 
export default Home;