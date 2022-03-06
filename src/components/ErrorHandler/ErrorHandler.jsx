import React from "react";
import { useErrorMessage } from "../../redux/selectors";
import { ErrorHandlerContainer } from "./ErrorHandler.styled";

const ErrorHandler = () => {
  const errorMessage = useErrorMessage();
  return <ErrorHandlerContainer>{errorMessage}</ErrorHandlerContainer>;
};

export default ErrorHandler;
