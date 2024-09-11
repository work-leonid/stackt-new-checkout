<script>
  export let options = [];
  export let selectedOption = options.length > 1 ? options[1].title : null; // Default to second option if it exists

  // Handle single option selection
  function selectOption(option) {
    selectedOption = option.title;
  }
</script>

<div class="grid grid-cols-3 gap-1">
  {#each options as option}
    <div
      class={`p-3 border relative cursor-pointer transition-all duration-300 rounded-lg ${
        selectedOption === option.title
          ? "bg-orange-50 border-orange-500"
          : "bg-white border-gray-300"
      }`}
      on:click={() => selectOption(option)}
    >
      <div>
        {#if option.badge}
          <p
            class="font-semibold absolute -top-3 -right-2 border-4 border-white w-fit text-xs bg-orange-600 text-white px-1.5 rounded-full shrink-0"
          >
            {option.badge}
          </p>
        {/if}

        <h3
          class={`font-semibold leading-none ${
            selectedOption === option.title ? "text-orange-600" : ""
          }`}
        >
          {option.title}
        </h3>
      </div>
    </div>
  {/each}
</div>
