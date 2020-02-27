<template>
	<div>
		<v-container>	
			<v-card>
				<v-card-title>
					Events
					<v-spacer></v-spacer>
					<v-text-field
					v-model="search"
					append-icon="mdi-magnify"
					label="Search"
					single-line
					hide-details
					></v-text-field>
				</v-card-title>
				<v-data-table
				:headers="headers"
				:items="events"
				:search="search"
				>
				<template v-slot:item="row">
					<tr>
						<td>{{row.item.name}}</td>
						<td>{{row.item.location}}</td>
						<td>
							<router-link :to="'/admin/event/edit/' + row.item.id" class="btn btn-primary">Edit</router-link>
						</td>
					</tr>
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
				search: '',
				headers: [
				{
					text: 'Name',
					align: 'start',
					value: 'name',
				},
				{ text: 'Location', value: 'location' },
				{ text: '', value: 'actions' },
				],
				events: [
				{
					id: 1,
					name: 'Frozen Yogurt',
					location: 159,
				},
				{
					id: 2,
					name: 'Ice cream sandwich',
					location: 237,
				},
				{
					id: 3,
					name: 'Eclair',
					location: 262,
				},
				{
					id: 4,
					name: 'Cupcake',
					location: 305,
				},
				],
			}
		},
	}
</script>