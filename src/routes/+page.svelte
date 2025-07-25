<script lang="ts">
	import { onMount } from 'svelte';
	import { Project } from '../models/project';
    import ProjectCard from '../components/ProjectCard.svelte';

	let data = $state<Project[]>([]);

	onMount(() => {
		setTimeout(() => {
			data.push(new Project('1', 'Item 1', 'User A', new Date('2023-01-01'), undefined));
            data.push(new Project('2', 'Item 2', 'User B', new Date('2023-01-02'), undefined));
            data.push(new Project('3', 'Item 3', 'User C', new Date('2023-01-03'), undefined));
            data.push(new Project('4', 'Item 4', 'User D', new Date('2023-01-04'), undefined));
		}, 1000); // Simulate 1s API delay
	});
</script>


<div class="mb-20 grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {#each data as item, i}
        <ProjectCard project={item} delay={i * 300} />
    {/each}
</div>
<style>
  
</style>