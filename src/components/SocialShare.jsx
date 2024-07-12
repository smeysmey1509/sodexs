import React from "react";
import { Helmet } from "react-helmet";
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

const SocialShare = ({
  shareUrl,
  shareQuote,
  shareHashtag,
  shareTitle,
  shareBody,
  shareDescription,
  shareImage,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        padding: "20px",
      }}
    >
      <Helmet>
        <title>Kleb Jeb</title>
        <meta property="og:url" content={shareUrl} />
        <meta property="og:title" content={shareTitle} />
        <meta property="og:description" content={shareDescription} />
        <meta property="og:image" content={shareImage} />
        <meta property="twitter:url" content={shareUrl} />
        <meta property="twitter:title" content={shareTitle} />
        <meta property="twitter:description" content={shareDescription} />
        <meta property="twitter:image" content={shareImage} />
      </Helmet>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <FacebookShareButton
          url={shareUrl}
          quote={shareQuote}
          hashtag={shareHashtag}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={shareTitle}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton
          url={shareUrl}
          title={shareTitle}
          summary={shareDescription}
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <EmailShareButton
          url={shareUrl}
          subject={shareTitle}
          shareBody={shareBody}
        >
          <EmailIcon size={32} round />
        </EmailShareButton>
      </Box>
    </Box>
  );
};

export default SocialShare;
