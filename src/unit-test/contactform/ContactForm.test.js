import React from "react";
import { render } from "@testing-library/react";
import { PostApi } from "../../components/APIs/FullAPI";
import ContactForm from "../../components/ContactForm";
import axios from "axios";

jest.mock("../../components/APIs/FullAPI");

describe("ContactForm", () => {
  beforeEach(() => {
    PostApi.mockClear();
  });
  const formData = {
    fullname: "John Doe",
    email: "john.doe@example.com",
    company: "Company Inc.",
    phone: "123-456-7890",
    subject: "Subject",
    message: "Message",
    country: "Country",
  };

  const mockResponse = {
    data: {
      fullname: "John Doe",
      email: "john.doe@example.com",
      company: "Company Inc.",
      phone: "123-456-7890",
      subject: "Subject",
      country: "Country",
      message: "Message",
      status: "publish",
      updated_at: "2024-07-25 14:24:18",
      created_at: "2024-07-25 14:24:18",
      id: 140,
    },
  };

  it("should call PostApi with form data and return response data", async () => {
    PostApi.mockResolvedValue(mockResponse);

    const result = await ContactForm(formData);

    const expectedUrl =
      "/api/v1/save_contact?" +
      "fullname=" +
      formData?.fullname +
      "&email=" +
      formData?.email +
      "&company=" +
      formData?.company +
      "&phone=" +
      formData?.phone +
      "&subject=" +
      formData?.subject +
      "&country=" +
      formData?.country +
      "&message=" +
      formData?.message;

    expect(PostApi).toHaveBeenCalledWith(expectedUrl);
    expect(result).toEqual(mockResponse.data);
  });
});
