<script lang="ts">
  import { type TagName } from "./types";
  const TAG_TO_TEXT: {[key: string]: string} = {
    'CHEAPEST': 'The cheapest',
    'FASTEST': 'The fastest',
  }
  
  const TAG_TO_COLOR: {[key: string]: string} = {
    'CHEAPEST': 'text-green-500 bg-green-500/30',
    'FASTEST': 'text-blue-500 bg-blue-500/30',
  }

  type TagProps = {
    name: TagName
  }
  const {name}: TagProps = $props();
</script>

<span
  class={ `ml-auto text-xs font-bold inline-block px-3 py-1 ${TAG_TO_COLOR[name]} rounded-md` }
  >{TAG_TO_TEXT[name]}</span
>

