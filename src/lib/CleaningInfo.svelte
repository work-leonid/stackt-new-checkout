<script>
  let cleaningOptions = [
    {
      title: "Kitchen",
      image:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=3552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Bathrooms",
      image:
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Bedrooms",
      image:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Common areas",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
</script>

<div class="flex gap-2 flex-col">
  <p>
    All our standard cleanings include dusting and washing of all reachable
    surfaces, wiping the outside of kitchen appliances & cabinets, basic
    cleaning of the bathrooms, and vacuuming & mopping of all floors
  </p>
  <div class="flex gap-2 *:shrink-0 overflow-x-scroll disable-scrollbars">
    {#each cleaningOptions as option}
      <div class="relative">
        <span
          class="bg-slate-900/90 px-3 py-1 rounded-full text-sm text-white absolute top-2 flex items-center gap-1 pl-2 left-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="size-5"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
              clip-rule="evenodd"
            />
          </svg>

          {option.title}</span
        >
        <img src={option.image} alt="" class="h-40 object-cover rounded-lg" />
      </div>
    {/each}
  </div>
</div>

<style>
  .disable-scrollbars::-webkit-scrollbar {
    background: transparent; /* Chrome/Safari/Webkit */
    width: 0px;
  }

  .disable-scrollbars {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
  }
</style>
