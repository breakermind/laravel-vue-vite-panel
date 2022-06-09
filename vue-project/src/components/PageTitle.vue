<template></template>
<script>
export default {
	name: 'PageTitle',
	props: {
		'title': {
			type: String,
			default: 'Panel'
		}
	},
	mounted() {
		document.title = this.title
	}
}
</script>