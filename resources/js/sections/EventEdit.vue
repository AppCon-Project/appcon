<template>
	<div>
		edit
	</div>
</template>
<script>
	export default {
		created() {
			let id = this.$route.params.id;
			console.log(id);
		}
	}
</script>