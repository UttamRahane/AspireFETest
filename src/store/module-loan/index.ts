import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { LoanApplicationsInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const loanModule: Module<LoanApplicationsInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default loanModule;
