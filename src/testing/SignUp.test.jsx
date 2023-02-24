import React from "react";
import {render,screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import { MemoryRouter} from "react-router-dom";
import SignUp from "../components/user/SignUp";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () =>({
    ...jest.requireActual("react-router-dom"),
useNavigate:() => mockedUsedNavigate
}));

describe("Input Elements from SignUp component", ()=>{
    test("render User Name input element",() =>{
        render(
            <MemoryRouter>
              <SignUp/>
            </MemoryRouter>
        );
        const inputElementPassword=screen.getByTestId("password_test");
        expect(inputElementPassword).toBeInTheDocument();
        expect(inputElementPassword).toHaveAttribute("type","password");
        
    })
})

    test("render the email input element",() =>{
        render(
            <MemoryRouter>
              <SignUp/>
            </MemoryRouter>
        );
        const inputElementEmail=screen.getByTestId("email_test");
        expect(inputElementEmail).toBeInTheDocument();
        expect(inputElementEmail).toHaveAttribute("type","email");   
    })

    test("render password input element",() =>{
        render(
            <MemoryRouter>
              <SignUp/>
            </MemoryRouter>
        );
        const inputElementPassword=screen.getByTestId("password_test");
        expect(inputElementPassword).toBeInTheDocument();
        expect(inputElementPassword).toHaveAttribute("type","password");      
    })

    test("render phone number input element",() =>{
        render(
            <MemoryRouter>
              <SignUp/>
            </MemoryRouter>
        );
        const inputElementPassword=screen.getByTestId("phoneno_test");
        expect(inputElementPassword).toBeInTheDocument();
        expect(inputElementPassword).toHaveAttribute("type","number");   
    })

    