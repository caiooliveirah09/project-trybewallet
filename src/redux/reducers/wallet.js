// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  edit: false,
  idEditable: 0,
  expenseEditable: {},
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'CURRENCIES':
    return { ...state, currencies: action.currencies };
  case 'EXPENSES':
    return { ...state, expenses: [...state.expenses, action.expenses] };
  case 'DELETE':
    return { ...state, expenses: state.expenses.filter(({ id }) => id !== action.id) };
  case 'EDIT':
    return { ...state,
      edit: true,
      idEditable: action.id,
      expenseEditable: state.expenses.find(({ id }) => id === action.id) };
  default:
    return state;
  }
}

export default wallet;
