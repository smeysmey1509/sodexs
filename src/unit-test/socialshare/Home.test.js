import React from "react";
import {
  render,
  screen,
  waitFor,
  fireEvent,
  act,
} from "@testing-library/react";
import mockAxios from "jest-mock-axios";
import Home from "../../components/Home";
import axios from "axios";

jest.mock("axios");

const mockData = [
  { id: 1, title: "Product 1", description: "Description 1" },
  { id: 2, title: "Product 2", description: "Description 2" },
];

describe("Home", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockData });
    axios.post.mockResolvedValue({
      data: { id: 3, title: "Product 3", description: "Description 3" },
    });
    axios.put.mockResolvedValue({});
    // axios.delete.mockResolvedValue({});
  });

  test("fetches and displays products", async () => {
    render(<Home />);

    // Verify if fetch was called once
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("https://fakestoreapi.com/products");

    // Wait for the component to update with the fetched data
    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("Product 2")).toBeInTheDocument();
    });
  });

  test("adds a new product", async () => {
    render(<Home />);

    fireEvent.click(screen.getByTestId("Add"));

    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: { value: "Product 3" },
    });
    fireEvent.change(screen.getByPlaceholderText("Description"), {
      target: { value: "Description 3" },
    });
    fireEvent.click(screen.getByTestId("Submit"));

    await waitFor(() => {
      expect(screen.getByText("Product 3")).toBeInTheDocument();
      expect(screen.getByText("Description 3")).toBeInTheDocument();
    });
  });

  test("updates a product", async () => {
    axios.put.mockResolvedValueOnce();

    render(<Home />);
    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeInTheDocument();
    });

    const updateButtons = await screen.findAllByTestId("Edit");
    fireEvent.click(updateButtons[0]);

    await waitFor(() => {
      expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    });

    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: { value: "Updated Product 1" },
    });

    fireEvent.change(screen.getByPlaceholderText("Description"), {
      target: { value: "Updated Description 1" },
    });

    fireEvent.click(screen.getByTestId("Submit"));

    await waitFor(() => {
      expect(screen.getByText("Updated Product 1")).toBeInTheDocument();
      expect(screen.getByText("Updated Description 1")).toBeInTheDocument();
    });
  });

  test("deletes a product", async () => {
    axios.get.mockResolvedValueOnce({ data: mockData });
    axios.delete.mockResolvedValueOnce();

    render(<Home />);

    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("Product 2")).toBeInTheDocument();
    });

    const deleteButtons = await screen.findAllByText("Delete");
    fireEvent.click(deleteButtons[0]);

    await waitFor(() => {
      expect(screen.queryByText("Product 1")).not.toBeInTheDocument();
    });

    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });
});
