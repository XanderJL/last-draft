import { BsFillPersonFill } from "react-icons/bs";

export default {
  name: "employee",
  title: "Employees",
  type: "document",
  icon: BsFillPersonFill,
  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string",
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      description:
        'Important for the navigation on the team page! Make sure to click generate after altering the "Employee Name" field.',
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "jobTitle",
      title: "Job Title",
      type: "string",
    },
    {
      name: "headshot",
      title: "Headshot",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "alt",
      title: "Alternative Text",
      description:
        "A descriptive sentence about the image. Important for SEO and accessibility!",
      type: "string",
    },
    {
      name: "quote",
      title: "Quote",
      type: "blockContent",
    },
    {
      name: "bio",
      title: "Biography",
      type: "blockContent",
    },
    {
      name: "socials",
      title: "Social Media",
      type: "socials",
    },
  ],
  orderings: [
    {
      title: "Start Date",
      name: "startDate",
      by: [
        {
          field: "startDate",
          direction: "desc",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "firstName",
      subtitle: "jobTitle",
      media: "headshot",
    },
  },
};
