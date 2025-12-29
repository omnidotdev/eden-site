import app from "@/lib/config/app.config";

interface Params {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string;
  url?: string;
}

/**
 * Create meta tags.
 */
const createMetaTags = ({
  title: _title,
  description: _description,
  image,
  keywords,
}: Params = {}) => {
  const title = _title
    ? `${_title} | ${app.name}`
    : `${app.name} - ${app.tagline}`;
  const description = _description ?? app.description;

  const tags = [
    { title },
    {
      name: "description",
      content: description,
    },
    { name: "keywords", content: keywords ?? app.keywords.join(", ") },
    { name: "twitter:title", content: title },
    {
      name: "twitter:description",
      content: description,
    },
    { name: "twitter:creator", content: "@omnidotdev" },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    {
      property: "og:description",
      content: description,
    },
    ...(image
      ? [
          { name: "twitter:image", content: image },
          { name: "twitter:card", content: "summary_large_image" },
          { property: "og:image", content: image },
          { property: "og:image:width", content: "1200" },
          { property: "og:image:height", content: "630" },
        ]
      : [{ name: "twitter:card", content: "summary" }]),
  ];

  return tags;
};

export default createMetaTags;
