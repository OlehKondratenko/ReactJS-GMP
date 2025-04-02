import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm from "./SearchForm";

describe("SearchForm Component", () => {
  const initialValue = "Comedy";
  const onSearchMock = jest.fn();

  test("renders an input with the value equal to initial value passed in props", () => {
    render(<SearchForm initialValue={initialValue} onSearch={onSearchMock} />);
    const inputElement = screen.getByDisplayValue(initialValue);
    expect(inputElement).toBeInTheDocument();
  });

  test('calls "onSearch" prop with proper value after typing and clicking the Search button', () => {
    render(<SearchForm initialValue={initialValue} onSearch={onSearchMock} />);
    const inputElement = screen.getByDisplayValue(initialValue);
    const searchButton = screen.getByText("Search");

    fireEvent.change(inputElement, { target: { value: "Action" } });
    fireEvent.click(searchButton);

    expect(onSearchMock).toHaveBeenCalledWith("Action");
  });

  test('calls "onSearch" prop with proper value after typing and pressing Enter key', () => {
    render(<SearchForm initialValue={initialValue} onSearch={onSearchMock} />);
    const inputElement = screen.getByDisplayValue(initialValue);

    fireEvent.change(inputElement, { target: { value: "Drama" } });
    fireEvent.keyPress(inputElement, { key: "Enter", code: 13 });

    expect(onSearchMock).toHaveBeenCalledWith("Drama");
  });
});
