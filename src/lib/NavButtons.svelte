<script>
  export let nextAction = () => {}; // Function to handle the "Next" button
  export let prevAction = null; // Function to handle the "Previous" button, if provided
  export let text = "Select"; // Name of the button
</script>

<div class="flex max-w-xs mx-auto gap-1.5">
  <!-- Conditionally render the "Previous" button if `prevAction` is provided -->
  {#if prevAction}
    <button
      on:click={prevAction}
      class="px-5 size-12 sm:px-4 sm:size-14 aspect-square rounded-full flex items-center justify-center shrink-0 text-xl bg-white ring-1 ring-slate-200 text-slate-900 hover:bg-slate-50 transition-all duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="size-4 shrink-0"
      >
        <path
          fill-rule="evenodd"
          d="M12.5 9.75A2.75 2.75 0 0 0 9.75 7H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 1.06L4.56 5.5h5.19a4.25 4.25 0 0 1 0 8.5h-1a.75.75 0 0 1 0-1.5h1a2.75 2.75 0 0 0 2.75-2.75Z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  {/if}

  <!-- Main "Next" button -->
  <button
    on:click={nextAction}
    class="px-3 py-2 flex-1 active:scale-95 rounded-full text-lg bg-orange-600 font-semibold text-white hover:bg-orange-500 transition-all duration-300"
  >
    {text}
  </button>
</div>
