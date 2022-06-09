<script setup>
import	ChangeLocale from '@/components/ChangeLocale.vue'
</script>

<template>

<div class="part">
	<p>DASHBOARD</p>
	<RouterLink to="/panel" class="navbar-link"> <i class="fas fa-home"></i> Profil </RouterLink>
</div>

<div class="part">
	<p>SETTINGS</p>
	<RouterLink to="/panel/password" class="navbar-link"> <i class="fas fa-user"></i> Password </RouterLink>
	<RouterLink to="/panel/account" class="navbar-link"> <i class="fas fa-cogs"></i> Account </RouterLink>
</div>

<div class="part">
	<p>LANGUAGE</p>
	<div class="locale">
		<ChangeLocale />
	</div>
</div>
</template>

<style scoped>
.locale {
	float: left;
	width: 100%;
}
.locale .locale-changer {
	float: left;
	padding: 5px;
}
.locale .locale-changer .locale-changer-select {
	padding: 5px;
}

.part {
	float: left;
	width: 100%;
	margin-bottom: 25px;
}

.navbar-link {
	float: left;
	width: 100%;
	padding: 5px;
}
</style>