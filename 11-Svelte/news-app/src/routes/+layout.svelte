<script>
	import '../app.css';
</script>

<div>
	<main>
		<slot />
	</main>

	<footer class="footer">
		this is a footer
	</footer>
</div>


<style>

	.footer{
		position:absolute;
		bottom: 0;
		width: 100%;
		margin: 0 auto;
	}
</style>

