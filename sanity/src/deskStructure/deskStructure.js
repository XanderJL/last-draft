import S from "@sanity/desk-tool/structure-builder";
import { AiFillHome, AiFillEdit } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";

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
        .title("Entrepreneur Services Page")
        .icon(RiServiceLine)
        .child(
          S.editor()
            .id("entrepreneurServicesPage")
            .schemaType("servicesPage")
            .documentId("entrepreneurServicesPage")
        ),
      S.listItem()
        .title("Artist Services Page")
        .icon(RiServiceLine)
        .child(
          S.editor()
            .id("artistServicesPage")
            .schemaType("servicesPage")
            .documentId("artistServicesPage")
        ),
      S.divider(),
      S.listItem()
        .title("Blog")
        .icon(AiFillEdit)
        .child(
          S.editor()
            .id("blog")
            .schemaType("blog")
            .documentId("blog")
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
