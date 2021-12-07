import { MutationTree } from 'vuex';
import { LoanApplicationsInterface } from './state';

const mutation: MutationTree<LoanApplicationsInterface> = {
  addLoanApplication (state: LoanApplicationsInterface, loanApplication) {
    state.loanApplications.push(loanApplication);
  },
  doRepayment(state: LoanApplicationsInterface, id: string) {
    const index = state.loanApplications.findIndex((application) => application.id === id && application.status === 'Pending');
    if(index >= 0){
      const { paidTerms } = state.loanApplications[index];
      state.loanApplications[index] = {
        ...state.loanApplications[index],
        status: 'Paid',
        paidTerms: paidTerms + 1,
      }
    }
  },
  doReadyForPayment(state: LoanApplicationsInterface){
    const index = state.loanApplications.findIndex((application) => application.status === 'Paid' && (new Date() >= new Date(application.dateOfApllication.setMonth(application.dateOfApllication.getMonth()+application.paidTerms))));
    if(index >= 0){
      const { dueDate } = state.loanApplications[index];
      const nextDueDate = new Date(dueDate.setMonth(dueDate.getMonth()+1))
      state.loanApplications[index] = {
        ...state.loanApplications[index],
        status: 'Pending',
        dueDate: nextDueDate,
      }
    }
  }
};

export default mutation;
