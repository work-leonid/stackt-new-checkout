<script>
  import { goto } from "$app/navigation";
  import { totalPrice } from "$lib/stores"; // Import the store to update the price

  import Header from "$lib/Header.svelte";
  import HeadlineCard from "$lib/HeadlineCard.svelte";
  import WrapperWithSingleSelectedItem from "$lib/WrapperWithSingleSelectedItem.svelte";
  import ItemHeadline from "$lib/ItemHeadline.svelte";

  const movingBenefits = [
    "No overtime charges",
    "Professional movers with bodycams",
    "Insurance included in price",
  ];

  function goToNextPage() {
    goto("/moving/packing");
  }

  const flatMovingVariants = [
    {
      title: "Mini Move",
      description:
        "up to 2 hrs • max 10 boxes or similar sized items • up to 25 miles",
      price: "£169",
    },
    {
      title: "1 bedroom/Studio",
      description: "max 30 large boxes • up to 25 miles",
      price: "£259",
    },
    {
      title: "2 bedrooms",
      description: "max 55 large boxes • up to 25 miles",
      price: "£449",
    },
    {
      title: "3 bedrooms",
      description: "max 75 large boxes • up to 25 miles",
      price: "£849",
    },
    {
      title: "Personalised quote",
      description:
        "If you have a specific need, we can create a personalised quote for you",
      price: "from £99",
    },
  ];
  let preselectedOption = "Mini Move";
  let preSelectedSlotPosition = 0;

  // Reactive statement to track the selected option's price
  $: selectedOption = flatMovingVariants.find(
    (option) => option.title === preselectedOption,
  );

  // Whenever the selected option changes, update the store with the price
  $: if (selectedOption) {
    totalPrice.set(parseFloat(selectedOption.price.replace(/[£,from ]/g, ""))); // Remove £ and commas from the price
  }
</script>

<Header />
<HeadlineCard
  headline="Moving - flexible & adaptive to your needs"
  subheadline=""
  image="/img/moving.svg"
  benefits={movingBenefits}
/>

<WrapperWithSingleSelectedItem
  options={flatMovingVariants}
  bind:preselectedOption
  bind:preSelectedSlotPosition
  nextAction={goToNextPage}
>
  {#if preselectedOption === "Mini Move"}
    <ItemHeadline title="Mini Move" />
    asdf!
  {/if}
</WrapperWithSingleSelectedItem>

<p>Price: {selectedOption?.price}</p>
