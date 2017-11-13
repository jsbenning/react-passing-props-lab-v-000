import React from 'react';

const Filter = (props) => {
  return (
    <select onChange={props.handleChange}>
      <option value='all'>All</option>

      {props.filters.map(filter =>
        <option key={filter} value={filter}>{filter}</option>
      )}
    </select>
  )
}

Filter.defaultProps = {
  filters: [],
  handleChange: 'all'
}

export default Filter;
