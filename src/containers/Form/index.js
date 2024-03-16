import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFormData, setCity, setFullName, setId, setRefetching, setAge } from '../../reducers/formSlice';
import Number from '../../components/number';
import SimpleInput from '../../components/simple-input';
import CreateUser from '../../services/create-user';

const Form = (props) => {
  const dispatch = useDispatch();
  const {id, fullName, age, city, formDataArray} = useSelector(state=> state.form);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      id,
      fullName,
      age: parseInt(age),
      city,
    };
    console.log(formData, '------FORM DATA------')
    dispatch(addFormData(formData));
    await CreateUser(formData);
    dispatch(setAge(''))
    dispatch(setFullName(''));
    dispatch(setAge(''));
    dispatch(setCity(''));
    dispatch(setId(''));
    dispatch(setRefetching((prev) => !prev));
  };
  const handleNumberChange = (newAge) => {
    dispatch(setAge(newAge));
  };

  return (
    <div>
      <h2>Enter Your Information</h2>
      <form onSubmit={handleSubmit}>
        <SimpleInput label="ID" id="id" value={id} onChange={(value) => dispatch(setId(value))} />
        <SimpleInput
          label="Full Name"
          id="fullName"
          value={fullName}
          onChange={(value) => dispatch(setFullName(value))}
        />
        <Number age={age} onChange={handleNumberChange}/>
        <SimpleInput label="City" id="city" value={city} onChange={(value)=>dispatch(setCity(value))}/>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Form;
