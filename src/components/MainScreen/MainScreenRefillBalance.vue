<template>
	<div class="refill">
		
		<header>
			<h2>Refill your balance</h2>
		</header>

		<router-link to="/list" class="back-btn">
			<p>Back</p>
		</router-link>

		<div class="refill_form">

			<div class="refill_form_selected-operator">
				
				<div class="refill_form_selected-operator_info">
					<div class="refill_form_selected-operator_info_logo">
						<img src="@/assets/img/MTS.png" :alt="currentOperator.name">
					</div>
					<p>{{currentOperator.name}}</p>
				</div>

				<div class="refill_form_selected-operator_balance">
					<p>Your balance: {{currentOperator.userBalance}}$</p>
				</div>

			</div>

			<div class="refill_form_input form-block">
				<label for="phoneNumber">Phone number:</label>

				<!--Ещё не успел прикрутить маску-->

				<input type="text" id="phoneNumber"
					:value="currentOperator.userPhone"
					oninput="this.value = this.value.replace(/[^0-9]/g, '')"
					@input="SET_CURRENT_OPERATOR_PHONE($event.target.value)">
			</div>

			<div class="refill_form_input form-block">
				<label for="amount">Amount:</label>
				<!--Ещё не успел прикрутить валидацию (1$<x<1000$)-->
				<input type="text" id="amount"
					:value="currentOperator.userAmount"
					oninput="this.value = this.value.replace(/[^0-9]/g, '')"
					@input="SET_CURRENT_OPERATOR_AMOUNT($event.target.value)">
			</div>

			<button class="form-btn" @click="submit()">
				Submit
			</button>
		</div>
	</div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
export default {
  name: 'MainScreen',
  computed:{
      ...mapGetters('terminal', ['currentOperator']),
  },
  methods: {
  	...mapMutations({
  		SET_USER: "terminal/SET_USER",
  		SET_CURRENT_OPERATOR: "terminal/SET_CURRENT_OPERATOR",
        SET_CURRENT_OPERATOR_PHONE: "terminal/SET_CURRENT_OPERATOR_PHONE",
        SET_CURRENT_OPERATOR_AMOUNT: "terminal/SET_CURRENT_OPERATOR_AMOUNT",
      }),
  	submit(){
  		alert("Здесь будет отправка инфы на сервер");
  		/*Обнуление в случае успешной отправки.
  		this.SET_CURRENT_OPERATOR({
  			name: "",
		    logo: "",
		    userBalance: "",
		    userPhone: "",
		    userAmount: ""
  		});
  		this.SET_USER({
  			email:"",
  			password:""
  		});
  		*/
  		//this.$router.push({path: "/"});
  	}
 },
}
</script>

<style scoped lang="scss">
.refill{
	display: grid;
	grid-template-columns: auto 100px;
	grid-row-gap: 10px;
	header{
		text-align: center;
	}
	&_form{
		grid-column: 1/3;
		display: grid;
		grid-template-columns: 1fr 2.5fr;
		grid-gap: 10px;
		&_selected-operator{
			grid-column: 1/2;
			grid-row: 1/3;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			text-align: center;
			font-weight: 600;
			&_info{
				margin: auto;
				padding: 5px;
				position: relative;
				border: 2px solid $primaryColor;
				border-radius: 15px;
				&_logo{
					position: relative;
					display: flex;
					height: 80px;
					img{
						margin: auto;
						max-width: 100%;
						max-height: 100%;
					}
				}
			}
			&_balance{
				margin-top: 10px;
			}
		}
		&_input{
			margin: auto 0;
		}
		button{
			grid-column: 1/3;
			margin: 0 auto;
		}
		@media($phone){
			grid-template-columns: 1fr;
			&_selected-operator{
				grid-column: 1/2;
				grid-row: 1/2;
				flex-direction: row;
				justify-content: center;
				&_balance{
					margin: auto;
				}
			}
			button{
				grid-column: 1/2;
			}
		}
	}
}

</style>