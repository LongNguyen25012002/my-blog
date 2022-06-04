import styles from "./Blog.module.scss";
import { useParams } from 'react-router-dom';
import dataType from "../Categories/Type/data";
import Banner from "../../components/Banner/Banner";
import SectionFrames from "../../components/Section/Section";
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Blog = () => {

    const {blogName} = useParams();

    const blog = dataType.filter(blog => {
        return blog.path === blogName;
   });

   let urlBG_Banner = blog[0].bg;

   function RenderBlog(){
       return (
               <div className={cx("inner-content")}>
                   {
                       blog.map((blogPost,index)=> {
                           const {title, typePosts, nameAuthor} = blogPost;
                          return (
                              <div key={index}>
                                <h2>{title}</h2>
                                <p>{typePosts}</p>
                                <h3>{nameAuthor}</h3>
                              </div>
                          )
                       })
                   }
               </div>    
       )
   }

    return ( 
        <div className={cx("wrapper")}>
            <Banner BG_section={urlBG_Banner}>
            <div className={cx("banner-hero")}>
                    <h2 className={cx("hero-heading")}>Let's do it together.</h2>
                </div>
            </Banner>
            <SectionFrames>
                <RenderBlog />
            </SectionFrames>
        </div>
     );
}
 
export default Blog;