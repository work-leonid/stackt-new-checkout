<script>
  import { goto } from "$app/navigation";

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
    asdf!
  {/if}
</WrapperWithSingleSelectedItem>
