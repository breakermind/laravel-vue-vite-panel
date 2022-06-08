<?php
namespace App\Models;

use Webi\Models\WebiUser;
// use Laravel\Sanctum\HasApiTokens;

class User extends WebiUser
{
	// use HasApiTokens;

	protected $casts = [
		// 'email_verified_at' => 'datetime',
	];

	protected $dispatchesEvents = [
		// 'saved' => UserSaved::class,
		// 'deleted' => UserDeleted::class,
	];
}