// import React from 'react'
// import SignIn from './components/user/SignIn'
// import { render, screen, waitFor } from "@testing-library/react"
// import userEvent from "@testing-library/user-event"
    
//     const onSubmit = jest.fn()
    
//     test('Login form test sending correct data as parameter', async () => {
//         render(<SignIn/>)

//       const emailupdate = screen.getByTestId('email')
//       const passwordupdate = screen.getByTestId('password')
//       userEvent.type(emailupdate, "fillWithTestEmail")
//       userEvent.type(passwordupdate, "fillWithTestPassword")
    
//       userEvent.click(screen.getByTestId('login-button'))
    
//       await waitFor(()=>{
//         expect(onSubmit).toBeCalledTimes(1)
//   })
// })

// import React from "react";
// import SignIn from './components/user/SignIn'
// import { render, fireEvent,userEvent,screen } from "@testing-library/react";
// import Counter from './components/Testing/Counter'

// //test block
// test("increments counter", () => {
// // render the component on virtual dom
// render(<Counter />);

// //select the elements you want to interact with
// const emailupdate = screen.getByTestId('password');
// const passwordupdate = screen.getByTestId("password");
// userEvent.click(screen.getByTestId('login-button'))


// //interact with those elements
// fireEvent.click(emailupdate);
// fireEvent.click(passwordupdate);

// //assert the expected result
// expect(emailupdate).toHaveTextContent("1");
// });
