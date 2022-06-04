
const dataType = [
    {
        id: 1,
        typePosts: "nature",
        title: "The Road Ahead",
        path: "The-Road-Ahead",
        des: "The road ahead might be paved - it might not be.",
        nameAuthor: "Mat Vogels",
        bg: "https://images.unsplash.com/photo-1604143054406-5834a2650392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        timeNow: "September 25, 2015",
        imageAuthor: "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7ff9f8de8335_128-14.jpg"
    },
    {
        id: 2,
        typePosts: "Adventure",
        path: "From-Top-Down",
        title: "From Top Down",
        des: "Once a year, go someplace you’ve never been before.",
        nameAuthor: "William Wong",
        bg: "https://images.unsplash.com/photo-1626973216154-8bcfeb0cd726?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        timeNow: "September 25, 2015",
        imageAuthor: "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg"
    },
    {
        id: 3,
        typePosts: "relaxation",
        title: "sunny side up",
        path: "sunny-side-up",
        des: "The road ahead might be paved - it might not be.",
        nameAuthor: "Mat Vogels",
        bg: "https://images.unsplash.com/photo-1637957227627-7f308d640891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        timeNow: "September 25, 2015",
        imageAuthor: "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7ff9f8de8335_128-14.jpg"
    },
    {
        id: 4,
        typePosts: "travel",
        path: "still-standing-tall",
        title: "still standing tall",
        des: "Once a year, go someplace you’ve never been before.",
        nameAuthor: "William Wong",
        bg: "https://images.unsplash.com/photo-1645910439006-7d8edfab89d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        timeNow: "September 25, 2015",
        imageAuthor: "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg"
    },
    {
        id: 5,
        typePosts: "vacation",
        title: "from top down",
        path: "from-top-down",
        des: "The road ahead might be paved - it might not be.",
        nameAuthor: "Mat Vogels",
        bg: "https://images.unsplash.com/photo-1652282357359-7ca894d12e30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        timeNow: "September 25, 2015",
        imageAuthor: "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7ff9f8de8335_128-14.jpg"
    },
    {
        id: 6,
        typePosts: "vacation",
        path: "water-falls",
        title: "water falls",
        des: "Once a year, go someplace you’ve never been before.",
        nameAuthor: "William Wong",
        bg: "https://images.unsplash.com/photo-1614694193336-fffdf14ea100?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        timeNow: "September 25, 2015",
        imageAuthor: "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg"
    },
    {
        id: 7,
        typePosts: "Adventure",
        path: "try-it-always",
        title: "try it always",
        des: "Once a year, go someplace you’ve never been before.",
        nameAuthor: "William Wong",
        bg: "https://images.unsplash.com/photo-1627097586241-e469dc9add04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        timeNow: "September 25, 2015",
        imageAuthor: "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg"
    },
    {
        id: 8,
        typePosts: "Adventure",
        path: "Parlors-visited-noisier",
        title: "Parlors visited noisier",
        des: "Once a year, go someplace you’ve never been before.",
        nameAuthor: "William Wong",
        bg: "https://images.unsplash.com/photo-1606240174415-434439bd6d46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        timeNow: "September 25, 2015",
        imageAuthor: "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg"
    },
    {
        id: 9,
        typePosts: "photography",
        path: "drawings",
        title: "drawings",
        des: "Once a year, go someplace you’ve never been before.",
        nameAuthor: "William Wong",
        bg: "https://images.unsplash.com/photo-1627097586241-e469dc9add04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        timeNow: "September 25, 2015",
        imageAuthor: "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg"
    },
    {
        id: 10,
        typePosts: "photography",
        path: "elegance",
        title: "elegance",
        des: "Once a year, go someplace you’ve never been before.",
        nameAuthor: "William Wong",
        bg: "https://images.unsplash.com/photo-1606240174415-434439bd6d46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        timeNow: "September 25, 2015",
        imageAuthor: "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg"
    },
];

export default dataType

