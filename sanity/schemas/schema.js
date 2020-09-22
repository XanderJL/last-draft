// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import homePage from "./pages/homePage";
import aboutPage from "./pages/aboutPage";
import blog from "./blog/blog";
import servicesPage from "./pages/servicesPage";
import blockContent from "./blockContent";
import blockImage from "./blockImage";
import embed from "./embed";
import hr from "./hr";
import metaDescription from "./metaDescription";
import landingCard from "./landingCard";
import brands from "./brands";
import employee from "./employee";
import socials from "./socials";
import service from "./service";
import section from "./section";
import post from "./blog/post";
import author from "./blog/author";
import category from "./blog/category";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    blockContent,
    blockImage,
    embed,
    hr,
    homePage,
    aboutPage,
    blog,
    servicesPage,
    employee,
    brands,
    service,
    metaDescription,
    landingCard,
    socials,
    section,
    post,
    author,
    category,
  ]),
});
