import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  RegisterFormBox,
  RegisterFormButton,
  RegisterFormInput,
  RegisterFormLabel,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // if (!form.elements.name) {
    //   alert('Введите Имя');
    // }
    // if (!form.elements.name) {
    //   alert('Введите Имя');
    // }
    // if (!form.elements.name) {
    //   alert('Введите Имя');
    // }

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegisterFormBox onSubmit={handleSubmit} autoComplete="off">
      <RegisterFormLabel>
        Username
        <RegisterFormInput type="text" name="name" required />
      </RegisterFormLabel>
      <RegisterFormLabel>
        Email
        <RegisterFormInput type="email" name="email" required />
      </RegisterFormLabel>
      <RegisterFormLabel>
        Password
        <RegisterFormInput
          type="password"
          name="password"
          required
          minLength="7"
        />
      </RegisterFormLabel>
      <RegisterFormButton type="submit">Register</RegisterFormButton>
    </RegisterFormBox>
  );
};

// import { useDispatch } from 'react-redux';
// import { register } from 'redux/Auth/operations';
// // import css from './RegisterForm.module.css';

// export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );

//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit} autoComplete="off">
//       <label>
//         Username
//         <input type="text" name="name" />
//       </label>
//       <label>
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Register</button>
//     </form>
//   );
// };
