import { renderToStaticMarkup } from "react-dom/server";
import formatHTML from "./formatHTML";

const ShowRenderedHTML = ({ children }) => {
  const markup = renderToStaticMarkup(
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
  return (
    <>
      <h1>Rendered HTML:</h1>
      <pre>{formatHTML(markup)}</pre>
    </>
  );
};

export default ShowRenderedHTML;
