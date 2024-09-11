<script>
  export let benefits = [];
  export let headline = ""; // Optional headline
  export let subheadline = ""; // Optional subheadline
  export let image = ""; // Optional image source
  export let altText = ""; // Optional image alt text
</script>

<div class="flex gap-4 flex-col relative rounded-2xl">
  <div class="flex gap-4 items-end">
    <div>
      <div class="flex flex-col gap-1">
        {#if headline}
          <h3 class="text-2xl text-balance leading-tight font-semibold">
            {headline}
          </h3>
        {/if}
        {#if subheadline}
          <p>{subheadline}</p>
        {/if}
      </div>

      {#if benefits.length > 0}
        <ul class="flex mt-2 flex-col gap-1">
          {#each benefits as benefit}
            <li class="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="size-5 shrink-0 text-orange-600"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              {benefit}
            </li>
          {/each}
        </ul>
      {/if}
    </div>
    {#if image}
      <img
        src={image}
        alt={altText}
        class="size-36 sm:size-56 hidden sm:block ml-auto"
      />
    {/if}
  </div>
</div>
