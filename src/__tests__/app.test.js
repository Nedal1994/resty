import React from "react";
import {render, fireEvent,waitFor,screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import App from '../app'

test('Loading & displaying the starting app', async () => {
    render(<App />);
    const tester = await waitFor(() => screen.getByTestId('form'));
    expect(tester).toHaveTextContent('URL: GO!GETPOSTPUTDELETE');
  });

test('Submit button should work' , ()=>{
    render(<App/>)
    const tester = screen.getByTestId('submit-button')

    expect(tester).toHaveTextContent('GO!')
})
test('GET button should work' , ()=>{
    render(<App/>)
    const tester = screen.getByTestId('get-button')

    expect(tester).toHaveTextContent('GET')
})
test('POST button should work' , ()=>{
    render(<App/>)
    const tester = screen.getByTestId('post-button')

    expect(tester).toHaveTextContent('POST')
})
test('PUT button should work' , ()=>{
    render(<App/>)
    const tester = screen.getByTestId('put-button')

    expect(tester).toHaveTextContent('PUT')
})
test('DELETE button should work' , ()=>{
    render(<App/>)
    const tester = screen.getByTestId('delete-button')

    expect(tester).toHaveTextContent('DELETE')
})