import styled from 'styled-components';

export const FormWrapper = styled.div`
  padding: 16px;
  align-self: center;
  background-color: white;
  width: 400px;
  min-height: 500px;
  border-radius: 10px;
  box-shadow: 0px 2px 22px rgba(0, 0, 0, 0.11);
  h5 {
    margin: 15px 143px 5px 0px;
  }

  @media (max-width: 414px) {
    width: 100%;
  }
`;

export const InputHeader = styled.p`
  margin: 0px auto 4px 0px;
`;

export const FormInnerContainer = styled.div`
  width: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
`;

export const StyledInput = styled.input`
  justify-self: center;
  height: 40px;
  width: 300px;
  border-radius: 10px;
  border: 0.5px solid #d2d2d2;
  padding-left: 10px;
  font-size: 18px;
  :focus-visible {
    outline: none;
  }
`;

export const ErrorSpan = styled.span`
  color: red;
  margin: 10px 0px;
`;

export const ResultSpan = styled.span`
  margin: 10px auto 0px 0px;
`;

export const StyledButton = styled.button`
  padding: 5px 0px;
  width: 310px;
  margin-top: 10px;
  border: 0.5px solid #d2d2d2;
  cursor: pointer;
  height: 30px;
  border-radius: 6px;
`;
export const AllNumbersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: auto;
  margin: 0px 40px;
`;

export const NumberFromDB = styled.p`
  margin-bottom: 0px;
  margin-left: 5px;
`;
