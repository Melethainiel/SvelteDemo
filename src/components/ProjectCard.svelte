<!-- Example Svelte card component -->
<script lang="ts">
	import { Project } from '../models/project';
	import { fade } from 'svelte/transition';

    export let delay = 0;
	export let project: Project;
	export let onOpen: (roject: Project) => void;


</script>

<div class="card overflow-hidden bg-base-100 bg-primary shadow-xl" transition:fade={{ delay }}>
	<figure>
		<img
			class="h-96 w-full object-cover brightness-75 transition-transform duration-300 hover:scale-105"
			src={project.pictureUrl || 'https://images.unsplash.com/photo-1750810977337-43176811e758'}
			alt="Shoes"
		/>
	</figure>
	<div class="absolute bottom-0 left-0 card-body w-full p-3 backdrop-blur-sm">
		<div class="flex flex-grow flex-col gap-1 text-sm">
			<p class="font-bold">{project.name}</p>
			<p class="font-medium">
				Created by {project.createdBy} on {project.createdAt.toLocaleDateString()}
			</p>
		</div>
		<div class="card-actions justify-end">
			<button class="btn btn-sm btn-primary" onclick={() => onOpen(project)}>open</button>
		</div>
	</div>
</div>
