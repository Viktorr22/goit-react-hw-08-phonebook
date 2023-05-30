import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  LoginFormBox,
  LoginFormButton,
  LoginFormInput,
  LoginFormLabel,
} from './LoginForm.styled';
// import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginFormBox onSubmit={handleSubmit} autoComplete="off">
      <LoginFormLabel>
        Email
        <LoginFormInput type="email" name="email" />
      </LoginFormLabel>
      <LoginFormLabel>
        Password
        <LoginFormInput type="password" name="password" />
      </LoginFormLabel>
      <LoginFormButton type="submit">Log In</LoginFormButton>
    </LoginFormBox>
  );
};

// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/Auth/operations';
// // import css from './LoginForm.module.css';

// export const LoginForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       logIn({
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit} autoComplete="off">
//       <label>
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Log In</button>
//     </form>
//   );
// };
