<script>
  import { goto } from "$app/navigation";
  import { totalPrice } from "$lib/stores"; // Import the store to update the price

  import Header from "$lib/Header.svelte";
  import HeadlineCard from "$lib/HeadlineCard.svelte";
  import WrapperWithSingleSelectedItem from "$lib/WrapperWithSingleSelectedItem.svelte";
  import ItemHeadline from "$lib/ItemHeadline.svelte";
  import MultichoiceCard from "$lib/MultichoiceCard.svelte";

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

  let benefitsMiniMove = [
    "up to 2 hrs",
    "max 10 boxes or similar sized items",
    "up to 25 miles",
    "2 movers",
    "1 van",
  ];
  let benefits1Bedroom = [
    "max 30 large boxes",
    "up to 25 miles",
    "2 movers",
    "1 van",
  ];
  let benefits2Bedrooms = [
    "max 55 large boxes",
    "up to 25 miles",
    "3 movers",
    "1 van",
  ];
  let benefits3Bedrooms = [
    "max 75 large boxes",
    "up to 25 miles",
    "4 movers",
    "2 vans",
  ];
  const personalisedQuoteVariants = [
    {
      title: "Moving",
      description: "",
      price: "from £99",
    },
    {
      title: "Packing",
      description: "",
      price: "from £99",
    },
    { title: "Cleaning", description: "", price: "£209" },
    { title: "Assembly/Disassembly", description: "", price: "£49" },
  ];
  let personalisedQuoteOptions = [];

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
    <ItemHeadline
      image="/img/moving/mini.svg"
      benefits={benefitsMiniMove}
      text="The most cost-effective small space moving option not only among other options, but also among competitors."
    />
  {/if}
  {#if preselectedOption === "1 bedroom/Studio"}
    <ItemHeadline
      image="/img/moving/1bed.svg"
      benefits={benefits1Bedroom}
      text="hether it’s a compact space or a cozy home, we handle every detail with care, ensuring your belongings arrive safely at your new place. Quick, efficient, and affordable moving services!"
    />
  {/if}
  {#if preselectedOption === "2 bedrooms"}
    <ItemHeadline
      image="/img/moving/2bed.svg"
      benefits={benefits2Bedrooms}
      text="Our professional movers are ready to take the hassle out of your move.
      From packing and loading to transporting and unloading, we provide
      full-service moving tailored to your needs."
    />
  {/if}
  {#if preselectedOption === "3 bedrooms"}
    <ItemHeadline
      image="/img/moving/3bed.svg"
      benefits={benefits3Bedrooms}
      text="Our experienced movers ensure every room is packed, transported, and
      unpacked with precision and care. We handle large moves with ease, so
      you can focus on settling into your new home."
    />
  {/if}
  {#if preselectedOption === "Personalised quote"}
    <ItemHeadline
      image="/img/contact.svg"
      text="Contact us for a personalised quote tailored to your
      move. Whether it’s a unique request or a custom plan, we’ll ensure you
      get the best service at the right price."
    />
    <MultichoiceCard
      options={personalisedQuoteVariants}
      bind:personalisedQuoteOptions
    />
  {/if}
</WrapperWithSingleSelectedItem>

<p>Price: {selectedOption?.price}</p>
