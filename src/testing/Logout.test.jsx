import React from "react";
import { render, screen } from "@testing-library/react";
import swal from 'sweetalert'
import Logout from "../components/user/Logout";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () =>({
    ...jest.requireActual("react-router-dom"),
useNavigate:() => mockedUsedNavigate
}));

describe("Logout", () => {
  it("should clear session storage and navigate to home page", () => {
    sessionStorage.setItem("email", "testemail");
    render(<Logout/>);
    expect(sessionStorage.getItem("email")).toBeNull();
    expect(screen.getByText("You are Logged out Successfully!")).toBeInTheDocument();
    expect(screen.getByText("Thank you")).toBeInTheDocument();
    expect(swal).toHaveBeenCalledWith("You are Logged out Successfully!", "Thank you", "success");
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
    expect(screen.queryByRole("button", { name: "Logout" })).not.toBeInTheDocument();
  });
});
