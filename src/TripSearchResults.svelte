<script lang="ts">
  import type { Snippet } from "svelte";

  type TripSearchResultsProps = {
    totalResults: number;
    children: Snippet;
  };
  const { totalResults, children }: TripSearchResultsProps = $props();
</script>

<h2 class="text-black text-xl font-bold">
  {totalResults} active flight{totalResults > 1 ? "s" : ""}
</h2>
<ul class="flex flex-col gap-4 mt-4">
  {@render children?.()}
</ul>
