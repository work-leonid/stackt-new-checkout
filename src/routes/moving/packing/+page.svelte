<script>
  import { goto } from "$app/navigation";
  import { totalPrice } from "$lib/stores"; // Import the store to update the price
  import { onMount } from "svelte";

  import Header from "$lib/Header.svelte";
  import HeadlineCard from "$lib/HeadlineCard.svelte";
  import WrapperWithSingleSelectedItem from "$lib/WrapperWithSingleSelectedItem.svelte";
  import PackingAdditionalServices from "$lib/PackingAdditionalServices.svelte";

  const packingBenefits = [
    "Proffessional packing materials",
    "Save your time and money",
    "Insurance included in price",
  ];

  function goToNextPage() {
    goto("/moving/cleaning");
  }
  function goToPreviousPage() {
    goto("/moving/flat");
  }

  const packingVariants = [
    {
      title: "No, thank you",
      description: "I'll pack all my items myself",
      price: "",
    },

    {
      title: "All-inclusive packing",
      description: "Unlimited packing materials included",
      price: "£349",
    },
    {
      title: "Professional packing service",
      description:
        "We will pack your items in the safest way possible. You can add any additional packing materials if you'd like",
      price: "£259",
    },
    {
      title: "Packing by furniture",
      description:
        "For big furniture like wardrobe, desk, etc. Includes packing materials",
      price: "from £179",
    },
    {
      title: "Additional services",
      description:
        "If you want to pack your own belongings and need professional packing materials.",
      price: "",
    },
  ];
  let preselectedOption = "No, thank you";
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
  headline="Save your belongings while moving"
  subheadline="Professional packing service for your items"
  image="/img/packing.svg"
  benefits={packingBenefits}
/>

<WrapperWithSingleSelectedItem
  options={packingVariants}
  bind:preselectedOption
  bind:preSelectedSlotPosition
  nextAction={goToNextPage}
  prevAction={goToPreviousPage}
>
  <PackingAdditionalServices />
</WrapperWithSingleSelectedItem>

<div>
  <p>Price from first page: £{storedPriceFromFirstPage}</p>
  <p>Current selected price: {selectedPackingOption?.price}</p>
  <p>Total sum: £{totalSum}</p>
</div>
