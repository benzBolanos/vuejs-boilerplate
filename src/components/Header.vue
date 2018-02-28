<template>
	<div>
		<header class="header">
			<div class="container">
				<div class="row">
					<div class="col col-12">
						<div class="mobile-menu">
							<div></div>
							<div></div>
							<div></div>
							<span class="notif">2</span>
						</div>

						<h3 class="page-title">{{ this.$route.name }}</h3>

						<div class="test-date">
							<label>Test Date:</label>
							<p class="date">2018-02-01</p>
						</div>

					</div>
				</div>
			</div>
		</header>

		<div class="drawer">
			<div class="header">
				<div class="left">
					<div class="translation">				
						<span class="english">English</span>
						<span class="japanese">日本語</span>
					</div>
				</div>

				<div class="right">					
				</div>
			</div>

			<div class="body">
				<div class="profile">
					<img src="@/assets/images/profile-img.png">
					<p class="greetings">Welcome! <span>Yuuto</span></p>
				</div>
			</div>
		</div>	
	</div>
</template>

<script type="text/javascript">
</script>\
