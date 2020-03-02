<template>
	<div class="wrapper">
		<div class="row">
			<div class="col"><h2>Users Manager</h2></div>
			<div class="col">
				<div class="h-100 d-flex justify-content-end align-items-center">
					<router-link to="/admin/user">
						<v-btn 
						medium 
						color="primary" 
						id="back-button"
						>
						<v-icon dark left>mdi-arrow-left</v-icon>
						Back
					</v-btn>
				</router-link>
				<v-btn
				medium
				color="primary"
				id="create-button"
				@click="addNews()"
				>
				Create
			</v-btn>
		</div>
	</div>
</div>
<hr>
<div class="row mt-2">
	<div class="col-12">
		<div class="row">
			<div class="col-2">
				<div class="form-group">
					<label for="userId" class="custom-label">ID</label>
					<input type="text" class="form-control custom-input" id="userId" autocomplete="off">
				</div>
			</div>
			<div class="col-6">
				<div class="form-group">
					<label for="fullName" class="custom-label">Full Name</label>
					<input type="text" class="form-control custom-input" id="fullName" autocomplete="off">
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-8">
				<div class="form-group">
					<label for="emailAddress" class="custom-label">E-mail Address</label>
					<input type="text" class="form-control custom-input" id="emailAddress" autocomplete="off">
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-2">
				<div class="form-group">
					<select class="custom-select" id="inputGroupSelect01">
						<option selected disabled>Select position...</option>
						<option value="employee">Employee</option>
						<option value="manager">Manager</option>
						<option value="admin">Admin</option>
					</select>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</template>
<script>
	export default {
		mounted() {
			this.setLabel();
		},
		methods: {
			setLabel() {
				let inputs = this.$el.querySelectorAll(".custom-input");
				let labels = this.$el.querySelectorAll(".custom-label");
				for (let i = 0; i < inputs.length; i++) {
					inputs[i].addEventListener("focus", () => {
						labels[i].classList.add("active-label");
						console.log("Test");
					})
					inputs[i].addEventListener("focusout", () => {
						let text = inputs[i].value;
						if (text.length < 1)
							labels[i].classList.remove("active-label");
					})
				}
			},
			addNews(){
				alert('Event Added!');
			}
		}
	}
</script>
<style scoped>
.wrapper {
	padding: 20px 50px;
}
hr {
	margin-bottom: 0;
}
.form-group {
	position: relative;
	margin-bottom: 0;
}
.form-group label {
	margin-bottom: .2rem;
}
.form-group .custom-label {
	position: absolute;
	top: 0;
	left: 0;
	padding: 5px;
	color: #ababab;
	transition: all 300ms ease-in-out;
}
.form-group .active-label {
	top: -35px;
	color: black;
}
.custom-input {
	margin: 30px 0 0;
}
#back-button{
	background-color: #e74c3c;
	margin: 0 2%;
	text-decoration: none;
}
#create-button{
	background-color: #2980b9;
	margin: 0 2%;
	text-decoration: none;
}
.custom-select{
	margin: 30px 0 0;
}
</style>