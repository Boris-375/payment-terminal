import getters from './getters';
import actions from './actions';
import mutations from './mutations';

//При желании оператора можно разнести в отдельные модули,
//но тут не так много строк, чтоб с этим заморачиваться

const state = {
  userData: {
    email: "",
    password: "",
  },
  currentOperator:{
    name: "",
    logo: "",
    userBalance: "",
    userPhone: "",
    userAmount: ""
  },
  //Заглушка
  operatorList:[
    {
      name: "MTS",
      logo: "@/assets/img/MTS.png",//ссылка на какой-нибудь внешний ресурс.
      userBalance: 100
    },
    {
      name: "Beeline",
      logo: "@/assets/img/mts.png",
      userBalance: 150
    },
    {
      name: "Megafon",
      logo: "@/assets/img/mts.png",
      userBalance: 10
    },
  ],
};

export default {
  state,
  getters,
  actions,
  mutations,
};
