import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    expect(screen.getByText(/checkout form/i)).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />);

    // grab the fields in the form //
    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const state = screen.getByLabelText(/state/i);
    const zip = screen.getByLabelText(/zip/i);
    const submit = screen.getByRole('button');

    // input data into the previously grabbed fields //
    userEvent.type(firstName, 'Chad');
    userEvent.type(lastName, 'Diaz');
    userEvent.type(address, '10 Downing Street');
    userEvent.type(city, 'London');
    userEvent.type(state, 'England');
    userEvent.type(zip, '12345');

    // make the assertions
    expect(firstName).toHaveValue('Chad');
    expect(lastName).toHaveValue('Diaz');
    expect(address).toHaveValue('10 Downing Street');
    expect(city).toHaveValue('London');
    expect(state).toHaveValue('England');
    expect(zip).toHaveValue('12345')

    // click the checkout button
    userEvent.click(submit);

    //see if the message is on the screen
    const submitMesg = await screen.queryByText(/Your new green friends will be shipped to:/i);
    expect(submitMesg).toBeInTheDocument();

    // make sure that after the message, the form data is showing up.
    const formName = submitMesg.nextElementSibling.nextElementSibling.nextElementSibling;
    const formStreet = formName.nextElementSibling;
    const formCityStateZip = formStreet.nextElementSibling;

    expect(formName).toBeTruthy();
    expect(formStreet).toBeTruthy();
    expect(formCityStateZip).toBeTruthy();
});
