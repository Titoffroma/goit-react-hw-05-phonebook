import styled from "styled-components";

const StyledError = styled.div`
  width: 240px;
  height: 80px;
  background: red;
  padding: 20px;
  border-radius: 4px;
  font-size: 14px;
  color: white;
  display: flex;
  justify-content: flex-start;
  & > .material-icons {
    margin-right: 10px;
    font-size: 34px;
  }
`;
export default StyledError;
