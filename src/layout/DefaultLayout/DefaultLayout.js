
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const DefaultLayout = ({children}) => {
    return (
         <div className="wrapper">
          <Header />
            <div className="content">    
                {children}
            </div>
          <Footer />
         </div>
     );
}
 
export default DefaultLayout;