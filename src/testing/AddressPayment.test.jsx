import React from "react";
import {render,screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import { MemoryRouter} from "react-router-dom";
import AddressPayment from "../components/checkout/AddressPayment";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () =>({
    ...jest.requireActual("react-router-dom"),
useNavigate:() => mockedUsedNavigate
}));

describe("Input Elements from AddressPayment component", ()=>{
    test("render User FullName input element from AddressPayment component",() =>{
        render(
            <MemoryRouter>
              <AddressPayment/>
            </MemoryRouter>
        );
        const inputElementFullname=screen.getByTestId("fullname_test");
        expect(inputElementFullname).toBeInTheDocument();
        expect(inputElementFullname).toHaveAttribute("type","text");
        
    })
})

    test("render the email input element from AddressPayment component",() =>{
        render(
            <MemoryRouter>
              <AddressPayment/>
            </MemoryRouter>
        );
        const inputElementEmail=screen.getByTestId("email_test");
        expect(inputElementEmail).toBeInTheDocument();
        expect(inputElementEmail).toHaveAttribute("type","email");    
    })

    test("render address input element from AddressPayment component",() =>{
        render(
            <MemoryRouter>
              <AddressPayment/>
            </MemoryRouter>
        );
        const inputElementAddress=screen.getByTestId("address_test");
        expect(inputElementAddress).toBeInTheDocument();
        expect(inputElementAddress).toHaveAttribute("type","text");      
    })

    test("render city input element from AddressPayment component",() =>{
        render(
            <MemoryRouter>
              <AddressPayment/>
            </MemoryRouter>
        );
        const inputElementCity=screen.getByTestId("city_test");
        expect(inputElementCity).toBeInTheDocument();
        expect(inputElementCity).toHaveAttribute("type","text");      
    })

    test("render state input element from PaymentAddress component",()=>{
    render(
        <MemoryRouter>
          <AddressPayment/>
        </MemoryRouter>
    );
    const inputElementState=screen.getByTestId("state_test");
    expect(inputElementState).toBeInTheDocument();
    expect(inputElementState).toHaveAttribute("type","text")
    })

    test("render zipcode input element from PaymentAddress component",()=>{
        render(
            <MemoryRouter>
              <AddressPayment/>
            </MemoryRouter>
        )
        const inputElementZipcode=screen.getByTestId("zipcode_test");
        expect(inputElementZipcode).toBeInTheDocument();
        expect(inputElementZipcode).toHaveAttribute("type","number")
    })
