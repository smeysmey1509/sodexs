import React from "react";
import { render } from "@testing-library/react";
import SocialShare, { Metadata } from "../../components/SocialShare";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";

describe("SocialShare", () => {
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

describe("Metadata", () => {
  const mockProps = {
    mainTitle: "Example Page",
    shareUrl: "https://example.com",
    shareTitle: "Example Title",
    shareDescription: "This is an example description.",
    shareImage: "https://example.com/image.jpg",
  };

  it("renders metadata tags for Open Graph and Twitter", () => {
    render(
      <HelmetProvider>
        <Metadata {...mockProps} />
      </HelmetProvider>
    );

    const helmet = Helmet.peek();

    // Check Open Graph tags
    expect(helmet.metaTags).toContainEqual({
      property: "og:type",
      content: "Webpage",
    });
    expect(helmet.metaTags).toContainEqual({
      property: "og:url",
      content: mockProps.shareUrl,
    });
    expect(helmet.metaTags).toContainEqual({
      property: "og:title",
      content: mockProps.shareTitle,
    });
    expect(helmet.metaTags).toContainEqual({
      property: "og:description",
      content: mockProps.shareDescription,
    });
    expect(helmet.metaTags).toContainEqual({
      property: "og:image",
      content: mockProps.shareImage,
    });
    expect(helmet.metaTags).toContainEqual({
      property: "og:image:width",
      content: "1200",
    });
    expect(helmet.metaTags).toContainEqual({
      property: "og:image:height",
      content: "630",
    });

    // Check Twitter tags
    expect(helmet.metaTags).toContainEqual({
      property: "twitter:card",
      content: "Card",
    });
    expect(helmet.metaTags).toContainEqual({
      property: "twitter:url",
      content: mockProps.shareUrl,
    });
    expect(helmet.metaTags).toContainEqual({
      property: "twitter:title",
      content: mockProps.shareTitle,
    });
    expect(helmet.metaTags).toContainEqual({
      property: "twitter:description",
      content: mockProps.shareDescription,
    });
    expect(helmet.metaTags).toContainEqual({
      property: "twitter:image",
      content: mockProps.shareImage,
    });
  });
});
