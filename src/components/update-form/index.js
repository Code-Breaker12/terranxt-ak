import React, { useState } from 'react';
import Number from '../../components/number';
import SimpleInput from '../../components/simple-input';

const UpdateForm = (props) => {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [formDataArray, setFormDataArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { fullName, age};
    setFormDataArray([...formDataArray, formData]);
    // console.log('Submitted:', { fullName, age});
    // console.log('FormDataArray:', formDataArray);
    setFullName('');
    setAge('');
  };

  const handleNumberChange = (newAge) => {
    setAge(newAge);
  };

  return (
    <div>
      <h2>Update :</h2>
      <form onSubmit={handleSubmit}>
        <SimpleInput
          label="Full Name"
          id="fullName"
          value={fullName}
          onChange={setFullName}
        />
        <Number age={age} onChange={handleNumberChange} />
        <button onClick={()=>{props.onUpdate(props.id, { fullName, age })}}>Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;
