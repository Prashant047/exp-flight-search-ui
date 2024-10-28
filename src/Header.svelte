<script lang="ts">
  import Icon from "@iconify/svelte";

  const CODE_AIRPORT_MAP: { [key: string]: string } = {
    fco: "Rome, Italy",
    pvg: "Shanghai, China",
  };

  type HeaderProps = {
    from: string;
    to: string;
  };
  let { from, to }: HeaderProps = $props();

  const from_airport = CODE_AIRPORT_MAP[from];
  const to_airport = CODE_AIRPORT_MAP[to];
</script>

<div class="px-4">
  <div class="flex justify-between">
    <small>
      {from_airport}
    </small>
    <small>{to_airport}</small>
  </div>
  <div class="flex items-center gap-2">
    <strong class="text-4xl uppercase">{from}</strong>
    <div class="flex gap-1 items-center flex-1">
      <span class="border-2 border-white h-2 w-2 rounded-full"></span>
      <div class="relative flex-1 border-b border-dashed">
        <Icon
          icon="fa6-solid:plane"
          class="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <span class="border-2 border-white h-2 w-2 rounded-full"></span>
    </div>
    <strong class="text-4xl uppercase">{to}</strong>
  </div>
</div>
