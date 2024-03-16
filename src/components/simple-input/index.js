import React from 'react';

const SimpleInput = (props) => {
  const { label, id, value, onChange } = props;
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default SimpleInput;
