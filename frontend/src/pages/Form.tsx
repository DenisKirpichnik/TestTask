import React, { FC, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles';
import {
  allNumbers,
  calculateClosestFibonacciNumber,
  getAllTheNumbers,
  returnedNumber,
} from '../features/number/numberSlice';

const Form: FC = () => {
  const [formData, setFormData] = useState(0);
  const [error, setError] = useState<null | string>(null);

  const returnNumber = useSelector(returnedNumber);
  const allNumberInDB = useSelector(allNumbers);
  const dispatch = useDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormData(Number(e.target.value));

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Validating inputfield value
    if (typeof formData !== 'number') {
      setError('value should be a number');
      return;
    }
    if (formData >= 0) {
      setError(null);
      dispatch(calculateClosestFibonacciNumber({ number: formData }));
    }
    if (Number(formData) < 0) {
      setError('number should be greater than zero');
      return;
    }
  };

  const handleLookAtDB = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(getAllTheNumbers());
  };

  return (
    <S.FormWrapper>
      <form onSubmit={handleSubmit}>
        <S.FormInnerContainer>
          <h2>Fibonacci Calculator</h2>
          <S.InputHeader>Enter number </S.InputHeader>
          <S.StyledInput type="number" required name="number" onChange={onChange} />
          <S.ErrorSpan>{error && error}</S.ErrorSpan>
          <S.StyledButton type="submit">RUN</S.StyledButton>
          <S.ResultSpan>Result : {returnNumber && returnNumber}</S.ResultSpan>
        </S.FormInnerContainer>
      </form>
      <S.StyledButton onClick={handleLookAtDB}>Look at DB</S.StyledButton>
      {allNumberInDB && <h5>All the numbers in the DB :</h5>}
      <S.AllNumbersContainer>
        {allNumberInDB?.map((el: any) => (
          <S.NumberFromDB key={el._id}>{el.number},</S.NumberFromDB>
        ))}
      </S.AllNumbersContainer>
    </S.FormWrapper>
  );
};

export default memo(Form);
