<script>
  export let count = 0; // The current count, initialized to 0
  export let min = 0; // Minimum value (default is 0)
  export let max = Infinity; // Maximum value (default is no limit)

  function increment() {
    if (count < max) {
      count += 1;
    }
  }

  function decrement() {
    if (count > min) {
      count -= 1;
    }
  }
</script>

<div
  class="flex p-1 border border-orange-200 bg-white rounded-xl max-w-36 sm:w-full sm:max-w-xs items-center gap-1"
>
  <button
    on:click={decrement}
    class="py-2 px-3 inline-flex items-center disabled:bg-white disabled:text-orange-200/80 active:scale-90 active:inner-shadow disabled:cursor-not-allowed rounded-lg text-orange-600 hover:bg-orange-100 transition-all duration-300"
    disabled={count <= min}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      class="size-5"
    >
      <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
    </svg>
  </button>

  <span
    class={`font-semibold py-1 rounded-full proportional-nums grow text-center text-lg ${
      count === 0 ? " text-orange-200/80" : ""
    }`}>{count}</span
  >

  <button
    on:click={increment}
    class="py-2 px-3 inline-flex items-center disabled:bg-slate-100 disabled:text-slate-300 active:scale-90 active:inner-shadow disabled:cursor-not-allowed rounded-lg text-orange-600 hover:bg-orange-100 transition-all duration-300"
    disabled={count >= max}
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
</div>
