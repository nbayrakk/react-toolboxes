import { useState, useEffect } from "react";
import Input from "../toolbaxes/Input";
const FormComponent = (props) => {
  return (
    <div>
      <Input
        name="fullName"
        onChange={props.onChange}
        label="Full Name:"
        placeholder="Fullname.."
        value={props.selectedUser.fullName}
      ></Input>
      <Input
        name="email"
        onChange={props.onChange}
        label="Email:"
        placeholder="Email..."
        value={props.selectedUser.email}
      ></Input>
      <Input
        name="password"
        onChange={props.onChange}
        label="Password:"
        value={props.selectedUser.password}
      ></Input>
      <Input
        name="confirmPassword"
        onChange={props.onChange}
        label="Confirm Password:"
        value={props.selectedUser.confirmPassword}
      ></Input>
    </div>
  );
};
export default FormComponent;
