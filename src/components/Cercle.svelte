<script>
    import { fade } from 'svelte/transition';
    import { spring } from 'svelte/motion';
    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
    // Spring
	let coords = spring({ x: 0, y: 0 }, {
		stiffness: 0.1,
		damping: 0.25
	});
	let size = spring(10);


    
   
</script>

<svg
	transition:fade 
	on:mousemove="{e => {
	coords.set({ x: e.clientX, y: e.clientY })
}}"
	on:mousedown="{() => {
		size.set(30);
		dispatch('mouseDown');
		}}"
	on:mouseup="{() => {
		size.set(30);
		dispatch('mouseUp');
		}}"
>
	<circle cx={$coords.x} cy={$coords.y} r={$size}/>
</svg>


<style>
    svg {
		width: 100%;
		height: 100%;
		margin: -8px;
		position: absolute;
		z-index: 100;
	}
	circle {
		fill: #ff3e00;
	}
</style>