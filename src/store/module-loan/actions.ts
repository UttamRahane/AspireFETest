import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { LoanApplicationsInterface } from './state';

const actions: ActionTree<LoanApplicationsInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
