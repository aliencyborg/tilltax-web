import Ember from 'ember';
import { buildValidations } from 'ember-cp-validations';
import {
  email,
  filingRegion,
  filingStatus,
  filingYears,
  name,
  phone
} from '../utils/user-validations';

const { Component } = Ember;

const Validations = buildValidations({
  'model.email': email,
  'model.name': name,
  'model.phone': phone,
  'model.details.filingRegion': filingRegion,
  'model.details.filingStatus': filingStatus,
  'model.details.filingYears': filingYears
});

export default Component.extend(Validations, {
});
