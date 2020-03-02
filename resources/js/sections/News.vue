<template>
	<div>
		<v-container>	
			<v-card>
				<v-card-title>
					News
					<v-spacer></v-spacer>
				</v-card-title>
				<v-container>
					<div class="row">
						<div class="col-lg">
							<router-link
							to="/admin/addnews"
							>
							<v-btn medium color="primary" id="add-button">Add</v-btn>
						</router-link>
					</div>
				</div>
			</v-container>
			<v-data-table
			:headers="headers"
			:items="events"
			:light= true
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
					text: 'Title',
					align: 'start',
					value: 'newsTitle',
				},
				{ 
					text: 'Description',
					value: 'newsDescription',
					expand: true,
				},
				{
					text: 'Date',
					value: 'dateCreated',
				},
				{
					text: 'Created by',
					value: 'postUser',
				},
				{ 
					text: 'Actions', 
					value: 'action', 
					sortable: false 	
				},
				],
				events: [
				{
					newsTitle: 'This is a news',
					newsDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum nunc aliquet bibendum enim.',
					dateCreated:'mm/dd/yyyy',
					postUser: 'Test',
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