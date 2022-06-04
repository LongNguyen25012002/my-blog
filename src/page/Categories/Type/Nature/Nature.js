import Card from "../../../../components/Card/Card";
import SectionFrames from "../../../../components/Section/Section";
import Banner from "../../../../components/Banner/Banner";
import { filterHandler } from "../../../../Config/ConfigRouter";

import styles from './Nature.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Nature = () => {

    let urlBG_Banner = "https://images.unsplash.com/photo-1580886330052-056f2cc8bd86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

    return (
        <div className="wrapper" >
            <Banner BG_section={urlBG_Banner}>
            <div className={cx("banner-hero")}>
                    <h2 className={cx("hero-heading")}>Let's do it together.</h2>
                </div>
             </Banner>
            <SectionFrames>
                <div className="row">
                        <Card dataCard={filterHandler("nature")}/>
                </div>
            </SectionFrames>
        </div>
     );
}
 
export default Nature;