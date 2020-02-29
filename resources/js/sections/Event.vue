<template>
	<div>
		<v-container>	
			<v-card>
				<v-card-title>
					Events
					<v-spacer></v-spacer>
				</v-card-title>
				<v-container>
					<div class="row">
						<div class="col-lg">
							<router-link
							to="/admin/addevent"
							>
							<v-btn medium color="primary" id="add-button">Add</v-btn>
						</router-link>
					</div>
				</div>
			</v-container>
			<v-data-table
			:headers="headers"
			:items="events"
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
					text: 'Calamities',
					align: 'start',
					value: 'calamityName',
				},
				{ 
					text: 'Start',
					value: 'startDate',
				},
				{
					text: 'End',
					value: 'endDate',
				},
				{ 
					text: 'Actions', 
					value: 'action', 
					sortable: false 	
				},
				],
				events: [
				{
					calamityName: 'Taas Volcano Eruption',
					startDate: 'mm/dd/yyyy',
					endDate:'mm/dd/yyyy',

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