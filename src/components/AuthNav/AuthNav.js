// import { NavLink } from 'react-router-dom';
// import css from './AuthNav.module.css';
import { AuthLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <AuthLink to="/register">Register</AuthLink>
      <AuthLink to="/login">Log In</AuthLink>
    </div>
  );
};
// import { NavLink } from 'react-router-dom';
// // import css from './AuthNav.module.css';

// export const AuthNav = () => {
//   return (
//     <div>
//       <NavLink to="/register">Register</NavLink>
//       <NavLink to="/login">Log In</NavLink>
//     </div>
//   );
// };
