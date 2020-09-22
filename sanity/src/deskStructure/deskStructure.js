import S, { listItem } from "@sanity/desk-tool/structure-builder";
import { AiFillHome, AiFillEdit } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";

// // Simple example of web preview
// const url =
//   "https://www.gatsbyjs.com/dashboard/7a0e3543-160d-45fe-8e0e-eaa310ee3062/sites/d60554fe-9f49-42ad-af3d-167a43454cda/production";
// const WebPreview = ({ document }) => {
//   const { displayed } = document;
//   return <iframe src={url + displayed.slug.current} frameBorder={0} />;
// };

// export const getDefaultDocumentNode = ({ schemaType }) => {
//   // Conditionally return a different configuration based on the schema type
//   if (schemaType === "project") {
//     return S.document().views([
//       S.view.form(),
//       S.view.component(WebPreview).title("Web"),
//     ]);
//   }
// };

// export default S.defaults();

const hiddenDocTypes = (listItem) =>
  !["aboutPage", "indexPage", "servicesPage", "blog"].includes(
    listItem.getId()
  );

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home Page")
        .icon(AiFillHome)
        .child(
          S.editor()
            .id("indexPage")
            .schemaType("indexPage")
            .documentId("homePage")
        ),
      S.listItem()
        .title("About Page")
        .icon(BsInfoCircleFill)
        .child(
          S.editor()
            .id("sboutPage")
            .schemaType("aboutPage")
            .documentId("aboutPage")
        ),
      S.listItem()
        .title("Services Page")
        .icon(RiServiceLine)
        .child(
          S.editor()
            .id("sservicesPage")
            .schemaType("servicesPage")
            .documentId("servicesPage")
        ),
      S.divider(),
      S.listItem()
        .title("Blog")
        .icon(AiFillEdit)
        .child(S.editor().id("blog").schemaType("blog").documentId("blog")),
      S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
