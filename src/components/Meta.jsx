import React from "react";
import { Helmet } from "react-helmet-async";

const Meta = ({ mainTitle, shareUrl, shareTitle, shareDescription, shareImage }) => {
  return (
    <Helmet>
      <title>{mainTitle}</title>
      <meta property="og:type" content="Webpage" />
      <meta property="og:url" content={shareUrl} />
      <meta property="og:title" content={shareTitle} />
      <meta property="og:description" content={shareDescription} />
      <meta property="og:image" content={shareImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="twitter:card" content="Card" />
      <meta property="twitter:url" content={shareUrl} />
      <meta property="twitter:title" content={shareTitle} />
      <meta property="twitter:description" content={shareDescription} />
      <meta property="twitter:image" content={shareImage} />
    </Helmet>
  );
};

export default Meta;
