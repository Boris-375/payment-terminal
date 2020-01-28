export default {

  //Для списка понадобится
  'SET_OPERATORS': (state, operators) => {
    state.operatorList = operators;
  },

  'SET_CURRENT_OPERATOR': (state, data) => {
    state.currentOperator.name = data.name;
    state.currentOperator.logo = data.logo;
    state.currentOperator.userBalance = data.userBalance;
    state.currentOperator.userPhone = data.userPhone;
    state.currentOperator.userAmount = data.userAmount;
  },

  'SET_CURRENT_OPERATOR_PHONE': (state, userPhone) => {
    state.currentOperator.userPhone = userPhone;
  },

  'SET_CURRENT_OPERATOR_AMOUNT': (state, userAmount) => {
    state.currentOperator.userAmount = userAmount;
  },

  'SET_USER': (state, data) => {
    state.userData.email = data.email;
    state.userData.email = data.password;
  },
  'SET_USER_EMAIL': (state, email) => {
    state.userData.email = email;
  },
  'SET_USER_PASSWORD': (state, pass) => {
    state.userData.password = pass;
  },
};