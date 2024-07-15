import React from "react";
import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { Metadata } from "../../components/SocialShare";

describe("Metadata component", () => {
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

    const helmet = HelmetProvider.peek();

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
