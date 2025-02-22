import { model, Schema } from 'mongoose';
import { TCustomer } from './customer.interface';

const customerSchema = new Schema<TCustomer>({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
    unique: true,
  },
  profileImg: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default: false,
    required: true,
  },
  //   address: {
  //     type: String,
  //   },
  //   gender: {
  //     type: String,
  //     enum: ['MALE', 'FEMALE'],
  //     required: true,
  //   },
  //   city: {
  //     type: String,
  //   },
  //   state: {
  //     type: String,
  //   },
  //   country: {
  //     type: String,
  //   },
  //   pincode: {
  //     type: String,
  //   },
});

export const Customer = model<TCustomer>('Customer', customerSchema);
