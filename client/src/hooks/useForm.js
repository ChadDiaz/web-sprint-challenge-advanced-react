// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = (initialValue) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [initialValues, setInitialValues] = useState(initialValue);

  const handleChanges = (e) => {
    setInitialValues({ ...initialValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return [initialValues, showSuccessMessage, handleChanges, handleSubmit];
};

export default useForm;
