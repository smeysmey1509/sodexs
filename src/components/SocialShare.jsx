import React from "react";
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
import { Helmet } from "react-helmet";

const SocialShare = ({
  shareUrl,
  shareQuote,
  shareHashtag,
  shareTitle,
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
        padding: "0px 20px",
      }}
    >
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
          data-testid="facebook-share-button"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={shareUrl}
          title={shareTitle}
          data-testid="twitter-share-button"
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton
          url={shareUrl}
          title={shareTitle}
          summary={shareDescription}
          data-testid="linkedin-share-button"
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <EmailShareButton
          url={shareUrl}
          subject={shareTitle}
          description={shareDescription}
          data-testid="email-share-button"
        >
          <EmailIcon size={32} round />
        </EmailShareButton>
      </Box>
    </Box>
  );
};

export default SocialShare;

export const Metadata = ({
  mainTitle,
  shareUrl,
  shareTitle,
  shareDescription,
  shareImage,
}) => {
  return (
    <Helmet>
      <title>{mainTitle}</title>

      {/* Facebook */}
      <meta property="og:type" content="Webpage" />
      <meta property="og:url" content={shareUrl} />
      <meta property="og:title" content={shareTitle} />
      <meta property="og:description" content={shareDescription} />
      <meta property="og:image" content={shareImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta property="twitter:card" content="Card" />
      <meta property="twitter:url" content={shareUrl} />
      <meta property="twitter:title" content={shareTitle} />
      <meta property="twitter:description" content={shareDescription} />
      <meta property="twitter:image" content={shareImage} />
    </Helmet>
  );
};
