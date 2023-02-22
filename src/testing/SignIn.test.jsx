import React from "react";
import {render,screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import { MemoryRouter} from "react-router-dom";
import SignIn from "../components/user/SignIn";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () =>({
    ...jest.requireActual("react-router-dom"),
useNavigate:() => mockedUsedNavigate
}));

describe("<SignIn/>", ()=>{
    test("render the email input element",() =>{
        render(
            <MemoryRouter>
              <SignIn/>
            </MemoryRouter>
        );
        const inputElementEmail=screen.getByTestId("email_test");
        expect(inputElementEmail).toBeInTheDocument();
        expect(inputElementEmail).toHaveAttribute("type","email");    
    });
});

describe("password from SignIn component", ()=>{
    test("render password input element",() =>{
        render(
            <MemoryRouter>
              <SignIn/>
            </MemoryRouter>
        );
        const inputElementPassword=screen.getByTestId("password_test");
        expect(inputElementPassword).toBeInTheDocument();
        expect(inputElementPassword).toHaveAttribute("type","password");   
    })
})


