<script>
  export let options = []; // Array of options with title, description, and component to render
  export let selectedOption = null; // Track selected option for this instance

  function toggleOption(option) {
    if (selectedOption === option) {
      selectedOption = null; // Deselect to show all options again
    } else {
      selectedOption = option; // Select the clicked option
    }
  }

  function deselectOption() {
    selectedOption = null;
  }
</script>

<div class="flex flex-col gap-2">
  {#each options as option (option.title)}
    <!-- If no option is selected, or this option is selected, render it -->
    {#if selectedOption === null || selectedOption === option}
      <div
        class={`bg-white ring-1 ring-slate-200 p-4 rounded-2xl ${selectedOption === option ? "" : ""}`}
      >
        <!-- Option is not selected, show as a button -->
        {#if selectedOption === null}
          <div class="flex gap-4 justify-between items-start">
            <div class="flex w-full gap-4">
              <img src={option.image} alt="" class="size-28" />
              <div class="w-full flex-col flex justify-between">
                <div class="flex w-full gap-1 flex-col">
                  <h3 class="text-lg leading-none font-medium">
                    {option.title}
                  </h3>
                  {#if option.description}
                    <p class="text-sm leading-tight">{option.description}</p>
                  {/if}
                </div>
                <div
                  class="flex gap-3 flex-row justify-between mt-3 items-center"
                >
                  <p class="font-medium text-lg leading-none text-orange-600">
                    {option.price}
                  </p>
                  <button
                    class="bg-orange-600 text-white px-4 py-1 rounded-full text-base w-fit font-medium"
                    on:click={toggleOption(option)}
                  >
                    {option.button || "Add"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        {/if}

        <!-- Option is selected, show as a card with a back button -->
        {#if selectedOption === option}
          <div>
            <div class="">
              <div class="flex w-full gap-4">
                <img src={option.image} alt="" class="size-24" />

                <div>
                  <div class="flex gap-4">
                    <div class="flex flex-col w-full gap-1">
                      <h3 class="text-lg leading-none font-medium">
                        {option.title}
                      </h3>
                      <p
                        class="font-medium mb-1 text-lg leading-none text-orange-600"
                      >
                        {option.price}
                      </p>
                      {#if option.description}
                        <p class="text-sm leading-tight">
                          {option.description}
                        </p>
                      {/if}
                    </div>

                    <button
                      class="size-10 shrink-0 flex items-center justify-center bg-slate-100 rounded-full"
                      on:click={deselectOption}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-2">
            <!-- Conditionally render the component dynamically based on the selected option -->
            {#if option.component}
              <div>
                <svelte:component this={option.component} />
              </div>
            {/if}
          </div>
        {/if}
      </div>
    {/if}
  {/each}
</div>
