import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Box, Typography } from "@mui/material";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

const SocialShare = () => {
  const { menu_id, detail_page, detail_page_id } = useParams();
  const shareUrl = `https://main--klebjeb.netlify.app`;
  // const shareUrl = `https://main--klebjeb.netlify.app/${menu_id}/${detail_page}/${detail_page_id}`;
  const title = "SODEXS";
  const quote = "Qoute";
  const description = "Your description here";
  const image =
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg";

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
        <title>{title}</title>
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://main--klebjeb.netlify.app/" />
        <meta property="og:title" content="SODEX" />
        <meta property="og:description" content="" />
        <meta property="og:image" content={image} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://main--klebjeb.netlify.app/"
        />
        <meta property="twitter:title" content="SODEX" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content={image} />
      </Helmet>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <FacebookShareButton url={shareUrl} hashtag={title} media={image}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <LinkedinShareButton
          url={shareUrl}
          title={title}
          summary="Check out this link!"
          source={shareUrl}
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>

        <EmailShareButton url={shareUrl} title={title}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </Box>
    </Box>
  );
};

export default SocialShare;
