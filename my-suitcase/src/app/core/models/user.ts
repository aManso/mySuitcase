// Information about our users
export interface User {
  _id?: string;
  address: {
    country: string,
    city: string,
    street: string,
    number: string,
    postCode: string,
    coordinates: string,
  };
  admin: boolean,
  age: number;
  email: string;
  joiningDate: Date;
  name: string;
  password: string,
}
