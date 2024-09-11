<script>
  export let title = "";
  export let image = "";
  export let benefits = [];
</script>

<div class="flex flex-col *:flex-1 gap-3 sm:gap-6 sm:flex-row sm:items-end">
  <div>
    <slot />
    <p class="text-balance">
      {title}
    </p>
    {#if benefits.length > 0}
      <ul class="flex mt-2 flex-col gap-1.5">
        {#each benefits as benefit}
          <li class="flex gap-1 leading-tight items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="size-5 shrink-0 text-orange-600"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
              />
            </svg>
            {benefit}
          </li>
        {/each}
      </ul>
    {/if}
  </div>
  <img
    src={`${image}`}
    alt=""
    class="bg-slate-50 shrink-0 max-w-80 rounded-2xl flex-1"
  />
</div>
