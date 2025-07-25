<script>
	// Import your icon components or SVGs here if needed
	// Example: import HomeIcon from './HomeIcon.svelte';
</script>

<aside
	class="scrollbar fixed inset-0 top-[4.0625rem] right-auto left-[1.5rem] z-20 hidden w-[14.5rem] overflow-y-auto pb-10 lg:block"
>
	<nav class="lg:text-sm lg:leading-6">
		<div class="pointer-events-none sticky top-0">
			<div class="h-10"></div>
		</div>
		<ul class="space-y-8">
			<li>
				<div class="text-foreground mb-3 flex items-center gap-2">
					<h5 class="text-foreground-900 font-semibold">general</h5>
				</div>
				<ul class="border-divider space-x-2">
					<li class="border-l hover:text-primary py-1 ">
						<a href="/" class="block pl-4">
							<div class="flex gap-x-1.5">
								<!-- Replace with your icon component or SVG -->
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1"
									stroke="currentColor"
									class="size-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
									/>
								</svg>

								my_projects
							</div>
						</a>
					</li>
					<li class="border-l hover:text-primary py-1">
						<a href="/admin" class="block pl-4">
							<div class="flex gap-x-1.5">
								<!-- Replace with your icon component or SVG -->
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1"
									stroke="currentColor"
									class="size-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
									/>
								</svg>
								admin
							</div>
						</a>
					</li>
				</ul>
			</li>
		</ul>
	</nav>
</aside>

<style>
	/* Add your styles here */
</style>
