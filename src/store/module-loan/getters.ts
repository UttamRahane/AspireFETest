import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { LoanApplicationsInterface } from './state';

const getters: GetterTree<LoanApplicationsInterface, StateInterface> = {
  getLoanApplications: state => {
    return state.loanApplications;
  }
};

export default getters;
