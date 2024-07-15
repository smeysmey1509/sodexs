import React from "react";
import { render } from "@testing-library/react";
import SocialShare from "../../components/SocialShare";

describe("SocialShare component", () => {
  const mockProps = {
    shareUrl: "https://example.com",
    shareQuote: "Check out this example!",
    shareHashtag: "#example",
    shareTitle: "Example Title",
    shareDescription: "This is an example description.",
    shareImage: "https://example.com/image.jpg",
  };

  it("renders social share buttons", () => {
    const { getByTestId } = render(<SocialShare {...mockProps} />);

    const facebookButton = getByTestId("facebook-share-button");
    expect(facebookButton).toBeInTheDocument();

    const twitterButton = getByTestId("twitter-share-button");
    expect(twitterButton).toBeInTheDocument();

    const linkedinButton = getByTestId("linkedin-share-button");
    expect(linkedinButton).toBeInTheDocument();

    const emailButton = getByTestId("email-share-button");
    expect(emailButton).toBeInTheDocument();
  });
});
