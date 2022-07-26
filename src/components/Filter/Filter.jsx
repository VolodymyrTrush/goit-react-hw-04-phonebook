import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

const Filter = ({ onFilterChange }) => {
  return (
    <div>
      <Label htmlFor="filter">Find contacts by name</Label>
      <input
        onChange={event => onFilterChange(event.target.value)}
      />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};