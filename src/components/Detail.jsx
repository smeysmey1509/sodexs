import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Box } from "@mui/material";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

const Detail = () => {
  const location = useLocation();
  const item = location.state?.item;

  console.log(location)

  if (!item) {
    return <div>Loading...</div>;
  }

  const shareUrl = window.location.href;
  const title = item.title;
  const description = item.description;
  const image = item.image || "https://via.placeholder.com/150";

  console.log(shareUrl);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:title" content="title" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={shareUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
      </Helmet>
      <div className="flex flex-col items-center justify-center border p-4">
        <h2 className="text-lg font-medium text-black">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <img src={image} alt={title} className="w-50 h-80" />
      </div>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <FacebookShareButton
          url={shareUrl}
          quote={description}
          hashtag={`#${title}`}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={shareUrl} title={title} summary={description}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <EmailShareButton url={shareUrl} subject={title} body={description}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </Box>
    </>
  );
};

export default Detail;
