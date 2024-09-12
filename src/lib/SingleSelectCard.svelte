<script>
  export let options = [];
  export let selectedOption = null; // Bind a single selected option

  // Handle single option selection
  function selectOption(option) {
    selectedOption = option.title;
  }
</script>

<div class="grid grid-cols-2 gap-2">
  {#each options as option}
    <div
      class={`group card-wrapper ${
        selectedOption === option.title
          ? " card-wrapper-selected !bg-orange-50"
          : ""
      }`}
      on:click={() => selectOption(option)}
    >
      <div class="flex justify-between">
        {#if option.image}
          <img
            src={`/img/${option.image}`}
            alt="Wardrobe"
            class="size-20 group-hover:scale-105 transition-all duration-300 sm:mb-2 sm:w-full sm:h-auto"
          />
        {/if}

        <div class="flex z-20 flex-col flex-1">
          <div class="flex flex-col justify-between items-baseline">
            <h3
              class={`headline ${
                selectedOption === option.title ? "text-orange-600" : ""
              }`}
            >
              {option.title}
            </h3>
            {#if option.price}
              <p class="headline text-orange-600">
                {option.price}
              </p>
            {/if}
          </div>
          {#if option.description && option.description.trim() !== ""}
            <p
              class={`text-slate-500 mt-1 leading-tight text-xs ${
                selectedOption === option.title ? "text-slate-900" : ""
              }`}
            >
              {option.description}
            </p>
          {/if}
        </div>
      </div>
    </div>
  {/each}
</div>
