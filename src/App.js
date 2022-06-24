import logo from './logo.svg';
import './App.css';
import { userSchema } from './validations/UserValidation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Form from './Form';

function App() {
  const createUser = async (e) =>{
    e.preventDefault();
    let formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };
    console.log(formData)

    // const isValid = await userSchema.isValid(formData);
    // console.log(isValid)
  };

  return (
    <div className="App">
      <form action="" onSubmit={createUser}>
        <h1 className="title">sign up</h1>
        <input type="text" placeholder='name...' />
        <input type="email" placeholder='email...'/>
        <input type="password" placeholder='password...'/>
        <input type="submit"/>
      </form>

      <Form/>
    </div>
  );
}

export default App;
