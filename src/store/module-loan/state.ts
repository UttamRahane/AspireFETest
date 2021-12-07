export interface LoanApplicationInterface {
  id: string;
  loanAmount: number;
  loanTerms: number;
  dateOfApllication: Date;
  paidTerms: number;
  dueDate: Date;
  status: 'Pending' | 'Paid';
}

export interface LoanApplicationsInterface {
  loanApplications: LoanApplicationInterface[];
}

function state(): LoanApplicationsInterface {
  return {
    loanApplications: []
  }
};

export default state;
