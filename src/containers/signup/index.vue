<template>
	<div class="form">
		<div class="form-group">
			<input type="text" name="login_id" placeholder="Login ID" class="form-control">
			<small>Your unique identifier required for log in. Don't forget it.</small>
		</div>
		<div class="form-group">
			<input type="password" name="password" placeholder="Password" class="form-control">
			<small>Required for log in.</small>
		</div>
		<div class="form-group">
			<input type="password" name="password_confirmation" placeholder="Password (Again)" class="form-control">
			<small>Enter the same password again for double confirmation.</small>
		</div>
		<div class="form-group">
			<input type="text" name="display_name" placeholder="Display Name" class="form-control">
			<small>Your nickname for public areas of word engine</small>
		</div>
		<div class="form-group">
			<input type="email" name="email" placeholder="Email" class="form-control">
			<small>Used only for ID/Password recovery. If you do not provide a working email, we cannot help you recover a lost ID or Password</small>
		</div>
		<div class="form-group">
			<label>	
				<input type="checkbox" name="agree_to_terms" >
				I agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy</a>
			</label>
		</div>
		<div class="form-group">
			<button class="btn">Sign Up</button>
		</div>
	</div>
</template>

<script type="text/javascript" src="./controller.js"></script>