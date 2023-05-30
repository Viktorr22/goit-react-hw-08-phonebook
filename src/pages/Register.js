// import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { RegisterBox, RegisterTitle } from './Styles/Register.styled';

export default function Register() {
  return (
    <RegisterBox>
      <div>
        <RegisterTitle>Registration</RegisterTitle>
        <RegisterForm />
      </div>
    </RegisterBox>
  );
}

// import { Helmet } from 'react-helmet';
// import { RegisterForm } from 'components/RegisterForm/RegisterForm';

// export default function Register() {
//   return (
//     <div>
//       <Helmet>
//         <title>Registration</title>
//       </Helmet>
//       <RegisterForm />
//     </div>
//   );
// }
