import React from 'react'
import SignIn from './components/user/SignIn'
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
    
    const onSubmit = jest.fn()
    
    test('Login form test sending correct data as parameter', async () => {
        render(<SignIn/>)

      const emailupdate = screen.getByTestId('email')
      const passwordupdate = screen.getByTestId('password')
      userEvent.type(emailupdate, "fillWithTestEmail")
      userEvent.type(passwordupdate, "fillWithTestPassword")
    
      userEvent.click(screen.getByTestId('login-button'))
    
      await waitFor(()=>{
        expect(onSubmit).toBeCalledTimes(1)
  })
})

