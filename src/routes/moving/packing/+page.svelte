<script>
  import { goto } from "$app/navigation";
  import { totalPrice } from "$lib/stores"; // Import the store to update the price
  import { onMount } from "svelte";

  import Header from "$lib/Header.svelte";
  import HeadlineCard from "$lib/HeadlineCard.svelte";
  import WrapperWithSingleSelectedItem from "$lib/WrapperWithSingleSelectedItem.svelte";
  import PackingAdditionalServices from "$lib/PackingAdditionalServices.svelte";
  import ItemHeadline from "$lib/ItemHeadline.svelte";
  import Stepper from "$lib/Stepper.svelte";
  import Pricing from "$lib/Pricing.svelte";

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
  let preselectedOption = "All-inclusive packing";
  let preSelectedSlotPosition = 1;

  let storedPriceFromFirstPage = 0; // To hold the stored price from the first page

  let allInclusiveOptions = [
    "Boxes",
    "Paper packs",
    "PVC tape",
    "Bubble wraps",
    "Packing services",
  ];

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

  let itemCount = 1; // Track the stepper count
  let packingByFurniturePrice = 0; // Initialize total price
  $: packingByFurniturePrice = itemCount === 0 ? 0 : 179 + (itemCount - 1) * 42;
</script>

<Header />
<HeadlineCard
  headline="Professional packing. Save your belongings while moving"
  subheadline=""
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
  {#if preselectedOption === "No, thank you"}
    <PackingAdditionalServices />
  {/if}
  {#if preselectedOption === "All-inclusive packing"}
    <div class="flex flex-col gap-2">
      <ItemHeadline
        text="We will carefully pack all your items in one go in the safest way possible. You'll get unlimited packing materials included."
        image="https://plus.unsplash.com/premium_photo-1664300914931-76c0f99a96b8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHBhY2tpbmclMjBib3glMjBtb3ZlcnxlbnwwfDB8MHx8fDE%3D"
        benefits={allInclusiveOptions}
      />
      <PackingAdditionalServices />
    </div>
  {/if}
  {#if preselectedOption === "Professional packing service"}
    <ItemHeadline
      text="We'll use professional packing materials to pack your furniture in the
              safest way possible. All materials are 100% organic and sustainable.
              Save your time."
      image="https://plus.unsplash.com/premium_photo-1665203545714-44b60e4c9688?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHBhY2tpbmclMjBib3glMjBtb3ZlcnxlbnwwfDB8MHx8fDE%3D"
    />
    <PackingAdditionalServices />
  {/if}
  {#if preselectedOption === "Packing by furniture"}
    <div class="flex flex-col gap-8">
      <ItemHeadline
        text=""
        image="https://plus.unsplash.com/premium_photo-1723701918806-bf9b3b37a02a?q=80&w=3496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      >
        <div class="flex flex-col gap-2">
          <h3 class="headline">How much furniture do you need to pack?</h3>
          <Stepper bind:count={itemCount} min={1} />
          <div>
            <p class="headline">
              Total: <span class="text-orange-600"
                >£{packingByFurniturePrice}</span
              >
            </p>
            <p class="text-sm">
              Price includes high quality packing materials and proffesional
              packing service.
            </p>
          </div>
        </div>
      </ItemHeadline>
    </div>
    <PackingAdditionalServices />
  {/if}
  {#if preselectedOption === "Additional services"}
    <ItemHeadline
      text="Save your time with professional unpacking service. Recycled packing materials"
      image="https://plus.unsplash.com/premium_photo-1679858781690-71bffb438658?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHBhY2tpbmclMjBtYXRlcmlhbHMlMjBtb3Zpbmd8ZW58MHwwfDB8fHww"
    />
    <PackingAdditionalServices />
  {/if}
</WrapperWithSingleSelectedItem>

<Pricing pricing={selectedPackingOption?.price} />

<div>
  <p>Price from first page: £{storedPriceFromFirstPage}</p>
  <p>Current selected price: {selectedPackingOption?.price}</p>
  <p>Total sum: £{totalSum}</p>
</div>
