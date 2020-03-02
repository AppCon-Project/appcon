<template>
	<div>
		<v-container>	
			<v-card>
				<v-card-title>
					Users
					<v-spacer></v-spacer>
				</v-card-title>
				<v-container>
					<div class="row">
						<div class="col-lg">
							<router-link
							to="/admin/adduser"
							>
							<v-btn medium color="primary" id="add-button">Add</v-btn>
						</router-link>
					</div>
				</div>
			</v-container>
			<v-data-table
			:headers="headers"
			:items="users"
			>
			<template v-slot:item.action="{ item }">
				<v-icon
				small
				class="mr-2"
				>
				fas fa-edit
			</v-icon>
			<v-icon
			small
			>
			fas fa-lock
		</v-icon>
	</template>
</v-data-table>
</v-card>
</v-container>
</div>
</template>

<script>
	export default {
		data() {
			return {
				headers: [
				{
					text: 'ID',
					value: 'userId',
					align: 'start',
				},
				{
					text: 'Name',
					value: 'fullName',
				},
				{ 
					text: 'E-mail',
					value: 'email',
				},
				{
					text: 'Position',
					value: 'userPosition',
				},
				{ 
					text: 'Actions', 
					value: 'action', 
					sortable: false 	
				},
				],
				users: [
				{
					userId: '100001',
					fullName: 'Carl Joshua T. Barbosa',
					email: 'tongsonbarbs@gmail.com',
					userPosition: 'Manager',

				},
				],
			}
		},
		methods: {
			filterData() {

			}
		}
	}
</script>
<style type="text/css" scoped>
.col-lg{
	text-align: right;
}
#add-button{
	background-color: #2980b9;
	text-decoration: none !important;
}
</style>