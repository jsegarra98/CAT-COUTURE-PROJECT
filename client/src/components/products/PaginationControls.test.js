import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PaginationControls from "./PaginationControls";

describe("PaginationControls", () => {
  test("WHEN the user is on the first page of the products page, THEN the previous/back button of the pagination control will be disabled", () => {
    const setPage = jest.fn();
    render(
      <PaginationControls setPage={setPage} currentPage={1} totalPages={5} />
    );
    const previousButton = screen.getByRole("button", {
      name: "Previous page",
    });
    expect(previousButton).toBeDisabled();
    userEvent.click(previousButton);
    expect(setPage).not.toHaveBeenCalled();
  });

  test("WHEN the user is on the second page of the main product page, THEN the previous/back button of the pagination control will be enabled.", () => {
    const setPage = jest.fn();
    render(
      <PaginationControls setPage={setPage} currentPage={2} totalPages={5} />
    );
    const previousButton = screen.getByRole("button", {
      name: "Previous page",
    });
    expect(previousButton).not.toBeDisabled();
    userEvent.click(previousButton);
    expect(setPage).toHaveBeenCalled();
  });

  test("WHEN the user is on the last page of the main product page, THEN next button of the pagination control will be disabled.", () => {
    const setPage = jest.fn();
    render(
      <PaginationControls setPage={setPage} currentPage={5} totalPages={5} />
    );
    const nextButton = screen.getByRole("button", {
      name: "Next page",
    });
    expect(nextButton).toBeDisabled();
    userEvent.click(nextButton);
    expect(setPage).not.toHaveBeenCalled();
  });
});
