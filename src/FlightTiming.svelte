<script lang="ts">
  import Icon from "@iconify/svelte";
  import Tag from "./Tag.svelte";
  import { type TagName } from "./types";

  type FlightTimingProps = {
    departureTime: string;
    arrivalTime: string;
    departureDate: string;
    arrivalDate: string;
    totalTime: string;
    flightNumber: string;
    returnFlight?: boolean;
    tag?: TagName;
  };

  const {
    departureDate,
    departureTime,
    arrivalDate,
    arrivalTime,
    totalTime,
    flightNumber,
    returnFlight,
    tag,
  }: FlightTimingProps = $props();
</script>

<div class="px-6">
  <div class="flex">
    <span class="flex gap-2 items-center">
      <Icon icon="simple-icons:britishairways" style="font-size: 1.5rem" />
      <small class="text-gray-500 font-bold">{flightNumber}</small>
    </span>
    {#if tag}
      <Tag name={tag}/>
    {/if}
  </div>
  <div class="mt-4">
    <div class="flex items-center gap-2">
      <span class="text-xl font-semibold uppercase">{departureTime}</span>
      <div class="flex gap-1 text-gray-400 items-center flex-1">
        <span class="border-2 border-gray-300 h-2 w-2 rounded-full"></span>
        <div class="relative flex-1 border-b border-gray-300 border-dashed">
          <Icon
            icon="fa6-solid:plane"
            class="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
            flip={returnFlight ? "horizontal" : ""}
          />
        </div>
        <span class="border-2 border-gray-300 h-2 w-2 rounded-full"></span>
      </div>
      <span class="text-xl font-semibold uppercase">{arrivalTime}</span>
    </div>
    <div class="flex justify-between mt-1">
      <small class="text-gray-500">{departureDate}</small>
      <small class="text-gray-400">{totalTime}</small>
      <small class="text-gray-500">{arrivalDate}</small>
    </div>
  </div>
</div>
