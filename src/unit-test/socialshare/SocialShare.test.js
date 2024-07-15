// SocialShare.test.js
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import SocialShare from "../../components/SocialShare";

describe("SocialShare", () => {
  test("renders social share buttons with props", async () => {
    const mockProps = {
      shareUrl: "https://example.com",
      shareQuote: "Check out this link!",
      shareHashtag: "#example",
      shareTitle: "Example Title",
      shareDescription: "Description of the share",
      shareImage: "https://example.com/image.jpg",
    };

    render(
      <SocialShare
        shareUrl={mockProps.shareUrl}
        shareQuote={mockProps.shareQuote}
        shareHashtag={mockProps.shareHashtag}
        shareTitle={mockProps.shareTitle}
        shareDescription={mockProps.shareDescription}
        shareImage={mockProps.shareImage}
      />
    );

    await waitFor(() => {
      const facebookButtons = screen.getAllByRole("button", {
        name: /facebook/gsv,
      });
      expect(facebookButtons.length).toBeGreaterThan(0);

      const twitterButtons = screen.getAllByRole("button", {
        name: /twitter/gsv,
      });
      expect(twitterButtons.length).toBeGreaterThan(0);

      const linkedinButtons = screen.getAllByRole("button", {
        name: /linkedin/gsv,
      });
      expect(linkedinButtons.length).toBeGreaterThan(0);

      const emailButtons = screen.getAllByRole("button", { name: /email/gsv });
      expect(emailButtons.length).toBeGreaterThan(0);
    });
  });
});
