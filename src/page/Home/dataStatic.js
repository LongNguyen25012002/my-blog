
import dataType from "../Categories/Type/data";

// get two news post
const postReceten = dataType.slice(-2)
const FeaturedPosts = postReceten

const ListRecent = dataType.slice(0, 6);
console.log(ListRecent)
export {FeaturedPosts,ListRecent}

