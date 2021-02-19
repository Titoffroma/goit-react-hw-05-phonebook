import StyledError from "./ErrorStyled";

const ErrorNote = ({ children }) => {
  return (
    <StyledError>
      <i className="material-icons">error</i>
      {children}
    </StyledError>
  );
};

export default ErrorNote;
