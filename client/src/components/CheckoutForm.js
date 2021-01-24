import React, { useState } from "react";
import useForm from '../hooks/useForm';

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = () => {

  const [initialValues, showSuccessMessage, handleChanges, handleSubmit] = useForm(initialValue)

  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  // const [values, setValues] = useState(initialValue);

  // const handleChanges = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setShowSuccessMessage(true);
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            id='firstName'
            name="firstName"
            value={initialValues.firstName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            id='lastName'
            name="lastName"
            value={initialValues.lastName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Address:
          <input
            id='address'
            name="address"
            value={initialValues.address}
            onChange={handleChanges}
          />
        </label>
        <label>
          City:
          <input id='city' name="city" value={initialValues.city} onChange={handleChanges} />
        </label>
        <label>
          State:
          <input id='state' name="state" value={initialValues.state} onChange={handleChanges} />
        </label>
        <label>
          Zip:
          <input id='zip' name="zip" value={initialValues.zip} onChange={handleChanges} />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {initialValues.firstName} {initialValues.lastName}
          </p>
          <p>{initialValues.address}</p>
          <p>
            {initialValues.city}, {initialValues.state} {initialValues.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
