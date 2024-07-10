// SocialShare.js

import React from "react";

const SocialShare = ({ url, title, description, image }) => {
  const shareData = {
    title: title,
    text: description,
    url: url,
  };

  const handleShare = async () => {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  return (
    <div className="social-share">
      <button
        onClick={handleShare}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Share
      </button>
      <div className="flex gap-4 mt-2">
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            title
          )}&url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400"
        >
          Twitter
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600"
        >
          Facebook
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default SocialShare;
