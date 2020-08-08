import React from "react";
import "assets/fonts/style.css";
import FormInput from "components/FormInput";
import FormButton from "components/FormButton";

export default (props) => {
  return (
    <form className="login-form" action="##">
      <FormInput
        type="text"
        placeholder="User Name"
        iconClassName="icon-mobile2"
      ></FormInput>
      <FormInput
        type="password"
        placeholder="Password"
        iconClassName="icon-key"
      ></FormInput>
      <FormButton isLoginButton={true}>Login</FormButton>
      <FormButton type="regular">Forget Password</FormButton>
      <FormButton>Sign Up</FormButton>&emsp;
      <FormButton>Guest Login</FormButton>
    </form>
  );
};
