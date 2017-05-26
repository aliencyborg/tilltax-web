import { validator } from 'ember-cp-validations';

export const email = [
  validator('presence', true),
  validator('format', { type: 'email' })
];

export const filingRegion = [
  validator('presence', true)
];

export const filingStatus = [
  validator('presence', true)
];

export const filingYears = [
  validator('collection', true),
  validator('length', {
    min: 1
  })
];

export const name = [
  validator('presence', true),
  validator('length', {
    max: 100
  })
];

export const password = [
  validator('presence', true),
  validator('length', {
    min: 8,
    max: 32
  })
];

export const passwordConfirmation = [
  validator('presence', true),
  validator('confirmation', {
    on: 'model.password',
    message: '{description} do not match',
    description: 'Passwords'
  })
];

export const phone = [
  validator('presence', true),
  validator('format', { type: 'phone' })
];

export default {
  email,
  filingRegion,
  filingStatus,
  filingYears,
  name,
  password,
  passwordConfirmation,
  phone
};
