
import { Link } from 'react-router-dom';

import Styles from './Card.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(Styles);

const Card = ({dataCard}) => {

    // style={{backgroundImage: `url(${bg})`}}
    return ( 
        <div className={cx("warpper")}>
            {
                dataCard.map((card,index) => {
                    
                    return (
                        <Link to={`/blog/${card.path}`} className={cx("card")} 
                        key={index}>
                            <div style={{backgroundImage: `url(${card.bg} )`}} className={cx("image")} ></div>
                            <span className={cx("post-type",[card.typePosts])}>{card.typePosts}</span>
                            <div className={cx("details")}>
                                <h3>{card.title}</h3>
                                <p>{card.des}</p>
                            </div>
                            <div className={cx("author-wwith-post")}>
                                <div className={cx("wrapper-author")}>
                                    <img src={card.imageAuthor} alt="author-img"/>
                                    <span className={cx("name-auhtor")}>William</span>
                                </div>
                                <div className={cx("date-up")}>9/25/2015</div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
     );
}
 
export default Card;

// id: 3,
// typePosts: "PHOTOGRAPHY",
// title: "The Road Ahead",
// path: "The-Road-Ahead",
// des: "The road ahead might be paved - it might not be.",
// nameAuthor: "Mat Vogels",
// bg: "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7fb465de834a_photo-1443926818681-717d074a57af.jpg",
// timeNow: "September 25, 2015",
// imageAuthor: "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7ff9f8de8335_128-14.jpg"