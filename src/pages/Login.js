// import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { LoginBox, LoginTitle } from './Styles/Login.styled';

export default function Login() {
  return (
    <LoginBox>
      <div>
        <LoginTitle>Login</LoginTitle>
        <LoginForm />
      </div>
    </LoginBox>
  );
}

// import { Helmet } from 'react-helmet';
// import { LoginForm } from 'components/LoginForm/LoginForm';

// export default function Login() {
//   return (
//     <div>
//       <Helmet>
//         <title>Login</title>
//       </Helmet>
//       <LoginForm />
//     </div>
//   );
// }
