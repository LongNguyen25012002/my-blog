import Home from "../page/Home/Home";
import Categories from "../page/Categories/Categories";
import About from "../page/About/About";
import Contact from "../page/Contact/Contact";
import Relaxation from "../page/Categories/Type/Relaxation/Relaxation";
import Nature from "../page/Categories/Type/Nature/Nature";
import Vacation from "../page/Categories/Type/Vacation/Vacation";
import Photography from "../page/Categories/Type/Photography/Photography";
import Travel from "../page/Categories/Type/Travel/Travel";
import Adventure from "../page/Categories/Type/Adventure/Adventure";
import Blog from "../page/Blog/Blog";

import { Router as ConfigRouter } from "../Config/ConfigRouter";

const publicRoutes = [
    {path : ConfigRouter.home, component: Home},
    {path : ConfigRouter.categories, component: Categories},
    {path : ConfigRouter.about, component: About},
    {path : ConfigRouter.contact, component: Contact},
    {path : ConfigRouter.blog, component:  Blog},


    // children router categories
    {path : ConfigRouter.relaxation , component: Relaxation},
    {path : ConfigRouter.nature , component: Nature},
    {path : ConfigRouter.photography , component: Photography},
    {path : ConfigRouter.travel , component: Travel},
    {path : ConfigRouter.adventure , component: Adventure},
    {path : ConfigRouter.vacation , component: Vacation},
]

const privateRoutes = [

]

export {publicRoutes ,privateRoutes}