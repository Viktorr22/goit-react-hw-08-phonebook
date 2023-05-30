import { FilterBox, FilterInput } from './Filter.styled';
import { changeFilterValue } from 'redux/Contacts/filterSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(changeFilterValue(event.target.value));
  };

  return (
    <FilterBox>
      Find contacts by name
      <FilterInput type="text" onChange={changeFilter} />
    </FilterBox>
  );
};
