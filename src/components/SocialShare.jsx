import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
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

const SocialShare = () => {
  const { menu_id, detail_page, detail_page_id } = useParams();
  const shareUrl = `http://127.0.0.1:5173/${menu_id}/${detail_page}/${detail_page_id}`;

  console.log("shareUrl", shareUrl);

  const title = "SODEXS";
  const description = "Your description here ah klebjeb";
  const image =
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg";

  console.log(shareUrl);

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
        <meta property="og:type" content="website" />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:title" content="Hello" />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={shareUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta
          property="twitter:image"
          content="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        />
      </Helmet>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <FacebookShareButton url={shareUrl} quote={description} hashtag={title}>
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
    </Box>
  );
};

export default SocialShare;
