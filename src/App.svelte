<script lang="ts">
  import Header from "./Header.svelte";
  import TripDetails from "./TripDetails.svelte";
  import TripSearchResults from "./TripSearchResults.svelte";
  import FlightTiming from "./FlightTiming.svelte";
  import Icon from "@iconify/svelte";
  import data from "./data";

  const dollarFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const FLIGHTCLASS_TO_TEXT: { [key: string]: string } = {
    BUSINESS: "Business Class",
    ECONOMY: "Economy Class",
    FIRST: "First Class",
  };
</script>

<main
  class="max-w-xl py-10 mx-auto bg-[#cd2c22] rounded-[1.5rem] my-2 text-white"
>
  <Header from="fco" to="pvg" />
  <section class="bg-[#f0f2f2] rounded-[1.5rem] px-6 py-8 mx-4 mt-8">
    <TripSearchResults totalResults={data.length}>
      {#each data as tripDetail}
        <TripDetails>
          <FlightTiming
            departureDate={tripDetail.srcToDest.departureDate}
            departureTime={tripDetail.srcToDest.departureTime}
            arrivalDate={tripDetail.srcToDest.arrivalDate}
            arrivalTime={tripDetail.srcToDest.arrivalTime}
            totalTime={tripDetail.srcToDest.totalTime}
            flightNumber={tripDetail.srcToDest.flightNumber}
            tag={tripDetail.tag}
          />
          <hr class="my-6 mx-6 border border-dashed" />
          <FlightTiming
            returnFlight
            departureDate={tripDetail.destToSrc.departureDate}
            departureTime={tripDetail.destToSrc.departureTime}
            arrivalDate={tripDetail.destToSrc.arrivalDate}
            arrivalTime={tripDetail.destToSrc.arrivalTime}
            totalTime={tripDetail.destToSrc.totalTime}
            flightNumber={tripDetail.destToSrc.flightNumber}
          />
          <div class="flex items-center gap-4 my-4">
            <div class="bg-[#f0f2f2] h-6 w-3 rounded-r-full"></div>
            <hr class="flex-1 border border-dashed" />
            <div class="bg-[#f0f2f2] h-6 w-3 rounded-l-full"></div>
          </div>
          <div class="flex items-center gap-2 px-6">
            {#if tripDetail.flightClass === "BUSINESS"}
              <Icon
                icon="solar:sofa-linear"
                style="font-size: 1.5rem; color: #cd2c22 ;"
              />
            {:else if tripDetail.flightClass === "ECONOMY"}
              <Icon
                icon="material-symbols:flight-class-rounded"
                style="font-size: 1.5rem; color: #cd2c22 ;"
              />
            {/if}
            <span>{FLIGHTCLASS_TO_TEXT[tripDetail.flightClass]}</span>
            <strong class="ml-auto text-2xl"
              >{dollarFormatter.format(tripDetail.totalCost)}
            </strong>
          </div>
        </TripDetails>
      {/each}
    </TripSearchResults>
  </section>
</main>
<p class="text-center text-lg my-10">
  Original Design -
  <a
    href="https://dribbble.com/shots/21551032-Flight-Tickets-Booking"
    class="font-bold hover:underline text-blue-500"
    target="_blank"
  >
    https://dribbble.com/shots/21551032-Flight-Tickets-Booking
  </a>
</p>
