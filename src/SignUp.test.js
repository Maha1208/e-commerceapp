import React from "react";
import { render, fireEvent,userEvent,screen } from "@testing-library/react";
import SignUp from "./components/user/SignUp";

//test block
test("increments counter", () => {
// render the component on virtual dom
render(<SignUp />);

//select the elements you want to interact with
const nameupdate = screen.getByTestId('name');
const emailupdate = screen.getByTestId("email");
const passwordupdate = screen.getByTestId('password');
const phoneupdate = screen.getByTestId('phone');

userEvent.click(screen.getByTestId('login-button'))


//interact with those elements
fireEvent.click(nameupdate);
fireEvent.click(emailupdate);
fireEvent.click(passwordupdate);
fireEvent.click(phoneupdate);

//assert the expected result
expect(emailupdate).toHaveTextContent("1");
});
