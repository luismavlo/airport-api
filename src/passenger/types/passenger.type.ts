export type UserGender = 'male' | 'female';

export interface infoToUpdateUser {
  email: string;
  celphone: string;
}

export interface PassengerRequest extends Request {
  data: any;
}
