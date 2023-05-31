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
