<template>
	<div class="wrapper">
		<div class="row">
			<div class="col"><h2>News Manager</h2></div>
			<div class="col">
				<div class="h-100 d-flex justify-content-end align-items-center">
					<router-link to="/admin/news">
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
			<div class="col-8">
				<div class="form-group">
					<label for="title" class="custom-label">Title</label>
					<input type="text" class="form-control custom-input" id="title" autocomplete="off">
				</div>
			</div>
			<div class="col">
				<div class="form-group">
					<label for="location" class="custom-label">Location</label>
					<input type="text" class="form-control custom-input" id="location" autocomplete="off">
				</div>
			</div>
		</div>
		<div class="form-group">
			<label for="description" class="custom-label">Description</label>
			<textarea class="form-control custom-input" id="description" rows="5"></textarea>
		</div>
		<div class="form-group">
			<div class="row">
				<div class="col">
					<label for="startDate" class="mt-1">Start Date</label>
					<input type="date" class="form-control" id="startDate">
				</div>
				<div class="col">
					<label for="startDate" class="mt-1">End Date</label>
					<input type="date" class="form-control" id="endDate">
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
</style>