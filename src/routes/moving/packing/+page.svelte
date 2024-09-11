<script>
  import { goto } from "$app/navigation";
  import { totalPrice } from "$lib/stores"; // Import the store to update the price
  import { onMount } from "svelte";

  import Header from "$lib/Header.svelte";
  import HeadlineCard from "$lib/HeadlineCard.svelte";
  import WrapperWithSingleSelectedItem from "$lib/WrapperWithSingleSelectedItem.svelte";

  const movingBenefits = [
    "No overtime charges",
    "Professional movers with bodycams",
    "Insurance included in price",
  ];

  function goToNextPage() {
    goto("/moving/flat");
  }

  const packingVariants = [
    {
      title: "Packing option",
      description:
        "up to 2 hrs • max 10 boxes or similar sized items • up to 25 miles",
      price: "£1690",
    },
    {
      title: "Packing option 2",
      description: "max 30 large boxes • up to 25 miles",
      price: "£2509",
    },
  ];
  let preselectedOption = "Packing option";
  let preSelectedSlotPosition = 0;

  let storedPriceFromFirstPage = 0; // To hold the stored price from the first page

  // Subscribe to totalPrice store to retrieve the price from the first page
  onMount(() => {
    totalPrice.subscribe((value) => {
      storedPriceFromFirstPage = value; // Get the price stored from the first page
    });
  });
  // Track the selected packing option's price
  $: selectedPackingOption = packingVariants.find(
    (option) => option.title === preselectedOption,
  );

  // Reactive statement to calculate the total sum
  $: totalSum =
    storedPriceFromFirstPage +
    parseFloat(selectedPackingOption.price.replace(/[£,from ]/g, ""));
</script>

<Header />
<HeadlineCard
  headline="Packing 🔥 - flexible & adaptive to your needs"
  subheadline=""
  image="/img/moving.svg"
  benefits={movingBenefits}
/>

<WrapperWithSingleSelectedItem
  options={packingVariants}
  bind:preselectedOption
  bind:preSelectedSlotPosition
  nextAction={goToNextPage}
>
  {#if preselectedOption === "Packing option"}
    asdf!
  {/if}
</WrapperWithSingleSelectedItem>

<div>
  <p>Price from first page: £{storedPriceFromFirstPage}</p>
  <p>Current selected price: {selectedPackingOption?.price}</p>
  <p>Total sum: £{totalSum}</p>
</div>
