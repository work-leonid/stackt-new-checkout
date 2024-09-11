<script>
  import { goto } from "$app/navigation";
  import { totalPrice } from "$lib/stores"; // Import the store to update the price
  import { onMount } from "svelte";

  import Header from "$lib/Header.svelte";
  import HeadlineCard from "$lib/HeadlineCard.svelte";
  import WrapperWithSingleSelectedItem from "$lib/WrapperWithSingleSelectedItem.svelte";
  import ItemHeadline from "$lib/ItemHeadline.svelte";
  import SingleSelectCard from "$lib/SingleSelectCard.svelte";
  import MonthPicker from "$lib/MonthPicker.svelte";

  const storageBenefits = [
    "Storage for everyting: from one box to a whole house",
    "Affordable and secure storage",
  ];

  function goToNextPage() {
    goto("/moving/assembly");
  }
  function goToPreviousPage() {
    goto("/moving/packing");
  }

  const storageVariants = [
    {
      title: "No, thank you",
      description: "I don't need storage",
      price: "",
    },

    {
      title: "Storage collection",
      description:
        "You can store as many of your belongings as you like in our secure storage spaces",
      price: "from £9",
    },
  ];
  let preselectedOption = "Storage collection";
  let preSelectedSlotPosition = 1;

  let storedPriceFromFirstPage = 0; // To hold the stored price from the first page

  let storageItems = [
    {
      title: "Various items",
      description: "3x3x8 ft",
      price: "£11.9/week",
      image: "storage/various.svg",
    },
    {
      title: "Wardrobe",
      description: "5x3x6 ft",
      price: "£19.9/week",
      image: "storage/wardrobe.svg",
    },
    {
      title: "Small room",
      description: "6x4x8 ft",
      price: "£24.9/week",
      image: "storage/smallroom.svg",
    },
    {
      title: "Studio flat",
      description: "6x6x8 ft",
      price: "£27.9/week",
      image: "storage/studio.svg",
    },
    {
      title: "Half of a Garage",
      description: "8x6x8 ft",
      price: "£31.9/week",
      image: "storage/halfofagarage.svg",
    },
    {
      title: "Small Office",
      description: "9x8x8 ft",
      price: "£45.9/week",
      image: "storage/smalloffice.svg",
    },
    {
      title: "1-Car Garage",
      description: "12x8x8 ft",
      price: "£59.9/week",
      image: "storage/cargarage.svg",
    },
    {
      title: "House+",
      description: "Price per 1 sqft",
      price: "£0.82/week",
      image: "storage/house.svg",
    },
  ];

  let monthSelectedOption = "3 months";

  let dateOptions = [
    {
      title: "Monthly",
      badge: "",
    },
    {
      title: "3 months",
      badge: "-25%",
    },
    {
      title: "6 months",
      badge: "-40%",
    },
  ];

  // Subscribe to totalPrice store to retrieve the price from the first page
  onMount(() => {
    totalPrice.subscribe((value) => {
      storedPriceFromFirstPage = value; // Get the price stored from the first page
    });
  });
  // Track the selected packing option's price
  $: selectedPackingOption = storageVariants.find(
    (option) => option.title === preselectedOption,
  );

  // Reactive statement to calculate the total sum
  $: totalSum =
    storedPriceFromFirstPage +
    parseFloat(selectedPackingOption.price.replace(/[£,from ]/g, ""));
</script>

<Header />
<HeadlineCard
  headline="Storage collection"
  subheadline="Need to store items while moving? We got you covered."
  image="/img/packing/bighouse.svg"
  benefits={storageBenefits}
/>

<WrapperWithSingleSelectedItem
  options={storageVariants}
  bind:preselectedOption
  bind:preSelectedSlotPosition
  nextAction={goToNextPage}
  prevAction={goToPreviousPage}
>
  {#if preselectedOption === "Storage collection"}
    <ItemHeadline
      text="All you belongings will be stored in our secure storage spaces, ensuring that they are safe and secure."
      image="https://plus.unsplash.com/premium_photo-1681426730828-bfee2d13861d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FyZWhvdXNlfGVufDB8fDB8fHww"
    />
    <div class="flex flex-col gap-2">
      <MonthPicker options={dateOptions} />
      <SingleSelectCard options={storageItems} bind:monthSelectedOption />
    </div>
  {/if}
</WrapperWithSingleSelectedItem>

<div>
  <p>Price from first page: £{storedPriceFromFirstPage}</p>
  <p>Current selected price: {selectedPackingOption?.price}</p>
  <p>Total sum: £{totalSum}</p>
</div>
