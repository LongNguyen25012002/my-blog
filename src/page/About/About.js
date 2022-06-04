import styles from './About.module.scss';
import classNames from 'classnames/bind';
import Banner from '../../components/Banner/Banner';
import SectionFrames from '../../components/Section/Section';

const cx = classNames.bind(styles);
const About = () => {
    let urlBG_Banner = "https://images.unsplash.com/photo-1643318882652-e1190f4d6ff5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";
    
    return (  
        <div className={cx("warpper")}>
            <Banner BG_section={urlBG_Banner}>
                <div className={cx("banner-hero")}>
                    <h2 className={cx("hero-heading")}>We love writing</h2>
                </div>
            </Banner>
            <SectionFrames>
                <div className="row">
                    <div className={cx("image")}>
                        <img src="https://assets.website-files.com/5e4b1929fccc7f2575de825e/5e4b1929fccc7f1c02de82bd_looking-to-lake-prof.jpg" alt="author-img" />
                    </div>

                    <div className={cx("details-mes")}>
                        <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
                        <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>

                        <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
                    </div>
                </div>
            </SectionFrames>
        </div>
    );
}
 
export default About;