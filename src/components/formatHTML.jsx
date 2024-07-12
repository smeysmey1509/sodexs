import format from "html-format";

const formatHTML = (markup) => {
  return format(
    markup
      .replace("<html>", "<html>\n")
      .replace("<head>", "<head>\n")
      .replaceAll(/<\/script>/g, "</script>\n")
      .replaceAll(/<style([^>]*)\/>/g, "<style $1/>\n\n")
      .replaceAll(/<\/style>/g, "\n    </style>\n")
      .replaceAll(/<link([^>]*)\/>/g, "<link $1/>\n")
      .replaceAll(/<meta([^/]*)\/>/g, "<meta $1/>\n")
      .replace("</head>", "</head>\n")
      .replace("<body>", "<body>\n")
      .replace("</body>", "\n</body>\n")
      .replace("</h1>", "</h1>\n")
  );
};

export default formatHTML;
