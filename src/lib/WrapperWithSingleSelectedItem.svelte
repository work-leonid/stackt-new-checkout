<script>
  import NavButtons from "$lib/NavButtons.svelte";
  export let options = []; // Array of card options
  export let preselectedOption = null; // Allow two-way binding for selected option
  export let preSelectedSlotPosition = null; // Position where the content will be shown

  // Function to handle selecting a card
  function selectOption(option, index) {
    preselectedOption = option;
    preSelectedSlotPosition = index; // Save the index to show content between cards
  }

  export let nextAction = () => {}; // Function to handle the "Next" button
  export let prevAction = null;
</script>

<div class="grid grid-cols-1 gap-2">
  {#each options as option, index}
    <div>
      <!-- Card -->
      <div
        class={`card-wrapper sm:pt-0 ${
          preselectedOption === option.title ? "card-wrapper-selected" : ""
        }`}
        on:click={() => selectOption(option.title, index)}
      >
        <div
          class={`sticky top-0 z-40 bg-white/90 backdrop-blur-md ${preselectedOption === option.title ? "border-b pb-4 border-b-slate-200" : ""}`}
        >
          <div class="flex justify-between sm:pt-4 items-baseline">
            <h3
              class={`headline ${
                preselectedOption === option.title ? "text-orange-600" : ""
              } ${option.description.length > 0 ? "" : ""}`}
            >
              {option.title}
            </h3>
            <p class="headline text-orange-600">
              {option.price}
            </p>
          </div>
          {#if option.description}
            <p
              class={`text-slate-500 mt-2 max-w-lg leading-tight text-sm ${
                preselectedOption === option.title ? "text-slate-900" : ""
              }`}
            >
              {option.description}
            </p>
          {/if}
        </div>

        <!-- Custom content slot (shown after the selected card) -->
        {#if preSelectedSlotPosition === index}
          <div class="mt-4">
            <slot />
          </div>
        {/if}
        {#if preselectedOption === option.title}
          {#if nextAction && prevAction}
            <div class="mt-4 bottom-2">
              <NavButtons {nextAction} {prevAction} />
            </div>
          {/if}
        {/if}
      </div>
    </div>
  {/each}
</div>
