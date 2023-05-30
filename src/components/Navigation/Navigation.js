// import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { NavigationLink } from './Navigation.styled';
// import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavigationLink to="/">Home</NavigationLink>
      {isLoggedIn && <NavigationLink to="/contacts">Contacts</NavigationLink>}
    </nav>
  );
};

// import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks';
// // import css from './Navigation.module.css';

// export const Navigation = () => {
//   const { isLoggedIn } = useAuth();

//   return (
//     <nav>
//       <NavLink to="/">Home</NavLink>
//       {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
//     </nav>
//   );
// };
