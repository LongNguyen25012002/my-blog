import Card from "../../../../components/Card/Card";
import SectionFrames from "../../../../components/Section/Section";
import Banner from "../../../../components/Banner/Banner";
import { filterHandler } from "../../../../Config/ConfigRouter";

import styles from './Vacation.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const Vacation = () => {
    let urlBG_Banner = "https://images.unsplash.com/photo-1638542316561-9f1b7ed1e7e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

    return (
        <div className="wrapper" >
            <Banner BG_section={urlBG_Banner}>
            <div className={cx("banner-hero")}>
                    <h2 className={cx("hero-heading")}>Let's do it together.</h2>
                </div>
             </Banner>
            <SectionFrames>
                <div className="row">
                        <Card dataCard={filterHandler("vacation")}/>
                </div>
            </SectionFrames>
        </div>
     );
}
 
export default Vacation;