<script>
  import Stepper from "$lib/stepper.svelte";
  export let options = []; // Array of options (each card option)
  export let selectedOptions = []; // Allow two-way binding for multiple selected options

  // Stepper values for each option
  let itemCounts = options.map(() => 0); // Initialize counts for each option

  // Function to handle stepper changes (count)
  function updateCount(index, count) {
    itemCounts[index] = count; // Update the count for the specific option
  }
</script>

<div class="grid grid-cols-1 gap-2 sm:grid-cols-3">
  {#each options as option, index}
    <div
      class={`sm:p-3 border flex sm:flex-col gap-2 sm:gap-3 justify-between transition-all duration-300 rounded-lg sm:rounded-2xl ${itemCounts[index] > 0 ? "bg-orange-50 ring-4 border-orange-500 ring-orange-500/20" : "bg-white hover:border-orange-500 border-slate-200"}`}
    >
      <img
        src={`/img/${option.image}`}
        alt="Wardrobe"
        class="size-20 sm:w-full sm:h-auto"
      />

      <div
        class="flex justify-between py-2 pr-2 sm:pr-0 sm:py-0 flex-1 flex-col gap-1"
      >
        <div class="flex gap-2 justify-between items-center">
          <h3
            class={`font-semibold leading-tight ${
              itemCounts[index] > 0 ? "text-orange-600" : ""
            }`}
          >
            {option.title}
          </h3>
          <p class="font-semibold text-orange-600">
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
