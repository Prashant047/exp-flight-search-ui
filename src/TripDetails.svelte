<script lang="ts">
import { type Snippet } from "svelte";
let { children }: {children: Snippet} = $props();
</script>

<li class="py-6 bg-white text-black rounded-[1.5rem]">
  {@render children?.() }
</li>
