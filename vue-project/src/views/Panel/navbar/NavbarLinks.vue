<template>
<p>DASHBOARD</p>
<RouterLink to="/panel" class="navbar-link"> <i class="fas fa-home"></i> Profil </RouterLink>

<p>SETTINGS</p>
<RouterLink to="/panel/password" class="navbar-link"> <i class="fas fa-user"></i> Password </RouterLink>
<RouterLink to="/panel/account" class="navbar-link"> <i class="fas fa-cogs"></i> Account </RouterLink>
</template>

<style scoped>
.navbar-link {
	float: left;
	width: 100%;
	padding: 5px;
}
</style>