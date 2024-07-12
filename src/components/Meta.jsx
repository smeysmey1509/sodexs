import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ mainTitle, shareUrl, shareTitle, shareDescription, shareImage }) => {
  return (
    <Helmet>
      <title>{mainTitle}</title>
      <meta property="og:type" content="Webpage" />
      <meta property="og:url" content={shareUrl} />
      <meta property="og:title" content={shareTitle} />
      <meta property="og:description" content={shareDescription} />
      <meta property="og:image" content={shareImage} />
      <meta property="twitter:card" content="Card" />
      <meta property="twitter:url" content={shareUrl} />
      <meta property="twitter:title" content={shareTitle} />
      <meta property="twitter:description" content={shareDescription} />
      <meta property="twitter:image" content={shareImage} />
    </Helmet>
  );
};

export default Meta;
