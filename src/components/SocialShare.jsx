import React from "react";
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

const SocialShare = ({ world }) => {
  const { menu_id, detail_page, detail_page_id } = useParams();
  const shareUrl = `https://sodexs.vercel.app`;
  const title = "SODEXS";
  const description = "Your description here ah klebjeb";
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
