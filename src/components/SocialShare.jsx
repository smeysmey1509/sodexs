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

// import React from "react";
// import { Box } from "@mui/material";

// const SocialShare = ({ shareUrl, shareTitle, shareDescription, shareImage }) => {
//   const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
//   const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
//   const linkedinShareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}&summary=${encodeURIComponent(shareDescription)}`;
//   const emailShareUrl = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareUrl)}%0D%0A${encodeURIComponent(shareDescription)}`;

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "white",
//         padding: "20px",
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "10px",
//         }}
//       >
//         <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer">
//           <img src="/path/to/facebook-icon.png" alt="Facebook Share" width={32} height={32} />
//         </a>
//         <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
//           <img src="/path/to/twitter-icon.png" alt="Twitter Share" width={32} height={32} />
//         </a>
//         <a href={linkedinShareUrl} target="_blank" rel="noopener noreferrer">
//           <img src="/path/to/linkedin-icon.png" alt="LinkedIn Share" width={32} height={32} />
//         </a>
//         <a href={emailShareUrl} target="_blank" rel="noopener noreferrer">
//           <img src="/path/to/email-icon.png" alt="Email Share" width={32} height={32} />
//         </a>
//       </Box>
//     </Box>
//   );
// };

// export default SocialShare;

