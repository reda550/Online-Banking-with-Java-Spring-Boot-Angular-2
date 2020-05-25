export class UserForm {
  username;
  firstName;
  lastName;
  email;
  phone;
  password;

  constructor(username,password,firstName,lastName,email, phone,){
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.phone = phone;
  }

}
