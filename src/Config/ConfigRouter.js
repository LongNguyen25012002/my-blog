import dataType from "../page/Categories/Type/data";;

// ConfigRouter for website
const Router = {
    home: "/",
    categories: "/categories",
    about: "/about",
    contact: "/contact",
    nature: "/categories/nature",
    photography : "/categories/photography",
    relaxation : "/categories/relaxation",
    vacation : "/categories/vacation",
    travel : "/categories/travel",
    adventure : "/categories/adventure",
    blog : "blog/:blogName",

}

// function use for filter type data for render ui
const filterHandler = (type) => {
    const filterItem = dataType.filter(item => {
        return item.typePosts === type ;
    });

    return filterItem;
}

export {Router,filterHandler}