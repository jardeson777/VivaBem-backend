import { Gender } from './gender.enum';

export class User {
  constructor(
    private email: string,
    private firstName: string,
    private lastName: string,
    private password: string,
    private birthday: Date,
    private gender: Gender,
    private weight: number,
    private height: number,
    private id?: number,
  ) {
    //
  }
  getEmail() {
    return this.email;
  }
  getFirstName() {
    return this.firstName;
  }
  getLastName() {
    return this.lastName;
  }
  getPassword() {
    return this.password;
  }
  getBirthday() {
    return this.birthday;
  }
  getGender() {
    return this.gender;
  }
  getWeight() {
    return this.weight;
  }
  getHeight() {
    return this.height;
  }
  getId() {
    return this.id;
  }
}
