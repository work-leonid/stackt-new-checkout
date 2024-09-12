<script>
  import Stepper from "$lib/Stepper.svelte";
  export let options = []; // Array of options (each card option)
  export let selectedOptions = []; // Allow two-way binding for multiple selected options

  // Stepper values for each option
  let itemCounts = options.map(() => 0); // Initialize counts for each option

  // Function to handle stepper changes (count)
  function updateCount(index, count) {
    itemCounts[index] = count; // Update the count for the specific option
  }
</script>

<div class="flex overflow-x-scroll p-1 disable-scrollbars gap-2 *:shrink-0">
  {#each options as option, index}
    <div
      class={`p-3 border flex flex-col sm:flex-col w-56 gap-2 sm:gap-3 justify-between transition-all duration-300 rounded-xl ${itemCounts[index] > 0 ? "bg-orange-50 ring-1 border-orange-500 ring-orange-500/20" : "bg-white  border-slate-200"}`}
    >
      <img
        src={`/img/${option.image}`}
        alt="Wardrobe"
        class={`size-20 ${itemCounts[index] > 0 ? "bg-orange-100" : "bg-slate-100"}  rounded-lg sm:w-full sm:h-auto`}
      />

      <div
        class="flex justify-between pr-2 sm:pr-0 sm:py-0 flex-1 flex-col gap-1"
      >
        <div class="flex flex-col">
          <h3
            class={`font-medium leading-tight ${
              itemCounts[index] > 0 ? "text-orange-600" : ""
            }`}
          >
            {option.title}
          </h3>
          <p class="font-medium text-orange-600">
            {option.price}
          </p>
        </div>
        {#if option.description && option.description.trim() !== ""}
          <p
            class={`text-slate-500 leading-tight text-xs ${
              selectedOptions.includes(option.title) ? "text-slate-900" : ""
            }`}
          >
            {option.description}
          </p>
        {/if}
        <div class="mt-2">
          <Stepper
            bind:count={itemCounts[index]}
            min={0}
            on:change={() => updateCount(index, itemCounts[index])}
          />
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  .disable-scrollbars::-webkit-scrollbar {
    background: transparent; /* Chrome/Safari/Webkit */
    width: 0px;
  }

  .disable-scrollbars {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
  }
</style>
