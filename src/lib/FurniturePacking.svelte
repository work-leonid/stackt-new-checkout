<script>
  import Stepper from "$lib/Stepper.svelte";
  let itemCount = 1; // Track the stepper count
  let packingByFurniturePrice = 0; // Initialize total price
  $: packingByFurniturePrice = itemCount === 0 ? 0 : 179 + (itemCount - 1) * 42;
</script>

<div class="flex flex-col mt-4 gap-2">
  <img
    src="https://plus.unsplash.com/premium_photo-1723701918806-bf9b3b37a02a?q=80&w=3496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt=""
    class="rounded-xl h-28 object-cover"
  />

  <p class="font-medium text-2xl leading-tight">
    {itemCount} × £{179} =
    <span class="text-orange-600">£{packingByFurniturePrice}</span> total
  </p>

  <div class="flex gap-2 items-center">
    <Stepper bind:count={itemCount} min={1} />
    <h3 class="font-medium text-lg leading-tight">
      {itemCount === 1 ? "piece" : "pieces"} of furniture
    </h3>
  </div>
  <div>
    <ul class="leading-tight space-y-1">
      <li class="flex gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="size-4 shrink-0 mt-0.5"
        >
          <path
            fill-rule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            clip-rule="evenodd"
          />
        </svg>
        Hight quality packing materials included
      </li>
      <li class="flex gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="size-4 shrink-0 mt-0.5"
        >
          <path
            fill-rule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            clip-rule="evenodd"
          />
        </svg>
        Professional packaging service
      </li>
      <li class="flex gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="size-4 shrink-0 mt-0.5"
        >
          <path
            fill-rule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            clip-rule="evenodd"
          />
        </svg>
        Only for big furniture like wardrobe, desk, etc.
      </li>
    </ul>
  </div>
</div>
