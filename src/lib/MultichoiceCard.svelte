<script>
  export let options = []; // Array of options
  export let selectedOptions = []; // Allow two-way binding for multiple selected options

  // Function to handle selecting or deselecting a card
  function toggleOption(option) {
    if (selectedOptions.includes(option.title)) {
      // If the option is already selected, remove it
      selectedOptions = selectedOptions.filter((o) => o !== option.title);
    } else {
      // Otherwise, add the option to the selected options
      selectedOptions = [...selectedOptions, option.title];
    }
  }
</script>

<div class="grid grid-cols-1 gap-2 md:grid-cols-2">
  {#each options as option}
    <div
      class={`p-4 border cursor-pointer transition-all duration-300 rounded-2xl ${
        selectedOptions.includes(option.title)
          ? "bg-orange-50 ring-4 border-orange-500 ring-orange-500/20"
          : "bg-white hover:border-orange-500 ring-slate-300"
      }`}
      on:click={() => toggleOption(option)}
    >
      <div class="flex gap-3 justify-between items-center">
        <div class="flex gap-4 justify-between items-center">
          <div class="w-full flex flex-col gap-1">
            <h3
              class={`font-semibold leading-tight ${
                selectedOptions.includes(option.title) ? "text-orange-600" : ""
              }`}
            >
              {option.title}
            </h3>

            <!-- Conditionally show description if it's not empty -->
            {#if option.description && option.description.trim() !== ""}
              <p
                class={`text-slate-500 leading-tight text-sm ${
                  selectedOptions.includes(option.title) ? "text-slate-900" : ""
                }`}
              >
                {option.description}
              </p>
            {/if}
            <p class="font-semibold text-orange-600 shrink-0">
              {option.price}
            </p>
          </div>
        </div>
        <!-- Add "+" button or check icon based on selection -->
        <div>
          {#if selectedOptions.includes(option.title)}
            <!-- Show check icon when selected -->
            <div
              class="p-2 bg-orange-600 text-white rounded-full leading-none inline-flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="size-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          {:else}
            <!-- Show "+" button when not selected -->
            <button
              class="p-2 bg-orange-100 text-orange-600 rounded-full leading-none inline-flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="size-5"
              >
                <path
                  d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"
                />
              </svg>
            </button>
          {/if}
        </div>
      </div>
    </div>
  {/each}
</div>
