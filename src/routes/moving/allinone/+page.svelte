<script>
  import { goto } from "$app/navigation";
  import { totalPrice } from "$lib/stores"; // Import the store to update the price
  import SingleButtonChoice from "$lib/SingleButtonChoice.svelte";
  import SingleButtonMain from "$lib/SingleButtonMain.svelte";
  import AllInclusivePacking from "$lib/AllInclusivePacking.svelte";

  import Header from "$lib/Header.svelte";
  import HeadlineCard from "$lib/HeadlineCard.svelte";
  import WrapperWithSingleSelectedItem from "$lib/WrapperWithSingleSelectedItem.svelte";
  import ItemHeadline from "$lib/ItemHeadline.svelte";
  import MultichoiceCard from "$lib/MultichoiceCard.svelte";
  import Pricing from "$lib/Pricing.svelte";
  import PackingAdditionalServices from "$lib/PackingAdditionalServices.svelte";
  import Stepper from "$lib/Stepper.svelte";
  import FurniturePacking from "$lib/FurniturePacking.svelte";

  const options = [
    {
      title: "All-inclusive packing",
      description: "Unlimited packing materials included",
      price: "£349",
      component: AllInclusivePacking,
    },
    {
      title: "Professional packing service",
      description: "We will pack your items in the safest way possible",
      price: "£259",
      component: AllInclusivePacking,
    },
    {
      title: "Furniture packing",
      description: "For big furniture like wardrobe, desk, etc.",
      price: "from £179/piece",
      component: FurniturePacking,
    },
  ];
  const optionsassembly = [
    {
      title: "Assemble/Disassemble furniture",
      component: AllInclusivePacking,
    },
    {
      title: "Assemble/Disassemble with fixed price",
      component: AllInclusivePacking,
    },
  ];
  const packingMaterials = [
    {
      title: "Packing materials",
      description: "Professional recycled packing materials",
      price: "from £2.72/box",
    },
  ];
  let multiselectedOptions = [];

  const unpacking = [
    {
      title: "Unpacking service",
      description: "We will carefully unpack all your items after delivery.",
      price: "169",
    },
  ];
  let unpuckingOptions = [];

  const movingBenefits = [
    "No overtime charges",
    "Professional movers with bodycams",
    "Insurance included in price",
  ];

  function goToNextPage() {
    goto("/moving/packing");
  }

  // Flat variants with price
  const flatMovingVariants = [
    {
      title: "Mini Move",
      description:
        "up to 2 hrs • max 10 boxes or similar sized items • up to 25 miles",
      price: "£169",
      button: "Select",
      image: "/img/moving.svg",
    },
    {
      title: "1 bedroom/Studio",
      description: "max 30 large boxes • up to 25 miles",
      price: "£259",
      button: "Select",
      image: "/img/moving/1bed.svg",
    },
    {
      title: "2 bedrooms",
      description: "max 55 large boxes • up to 25 miles",
      price: "£449",
      button: "Select",
      image: "/img/moving/2bed.svg",
    },
    {
      title: "3 bedrooms",
      description: "max 75 large boxes • up to 25 miles",
      price: "£849",
      button: "Select",
      image: "/img/moving/3bed.svg",
    },
    {
      title: "Personalised quote",
      description:
        "If you have a specific need, we can create a personalised quote for you",
      price: "from £99",
      button: "Select",
      image: "/img/contact.svg",
    },
  ];

  // Benefits for each option
  let benefitsMiniMove = [
    "up to 2 hrs",
    "max 10 boxes",
    "up to 25 miles",
    "2 movers, 1 van",
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

  // Options for additional services (Packing, Cleaning, etc.)
  const quoteVariants = [
    { title: "Cleaning", description: "", price: "£209" },
    { title: "Assembly/Disassembly", description: "", price: "£49" },
    { title: "Storage", description: "", price: "from £9/week" },
  ];

  const packingVariants = [
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

  // Initialize selectedService as an empty array (not null)
  let preselectedOption = ""; // Default selected option for flat variants
  let selectedService = []; // Track selected services (Packing, Cleaning, etc.)
  let personalisedQuoteOptions = []; // Declare this variable for selected options in personalised quote
  let quoteOptions = []; // For other options like Packing, Cleaning

  let preSelectedSlotPosition = 0;

  // Reactive statement to track the selected flat variant's price
  $: selectedOption = flatMovingVariants.find(
    (option) => option.title === preselectedOption,
  );

  // Update total price based on the selected flat option
  $: if (selectedOption) {
    totalPrice.set(parseFloat(selectedOption.price.replace(/[£,from ]/g, "")));
  }

  // Show specific additional content based on the selected service
  $: showPackingOptions = selectedService.includes("Packing");
  $: showCleaningCalendar = selectedService.includes("Cleaning");
  $: showAssemblyOptions = selectedService.includes("Assembly/Disassembly");
  $: showStorageOptions = selectedService.includes("Storage");
  let selectedPackingOption = ""; // Track selected packing options
  let selectedAssemblyOption = ""; // Track selected assembly options

  let itemCount = 1; // Track the stepper count
  let packingByFurniturePrice = 0; // Initialize total price
  $: packingByFurniturePrice = itemCount === 0 ? 0 : 179 + (itemCount - 1) * 42;
</script>

<Header />
<HeadlineCard
  headline="Moving - flexible & adaptive to your needs"
  subheadline=""
  image="/img/moving.svg"
  benefits={movingBenefits}
/>
<SingleButtonMain options={flatMovingVariants} bind:selectedOption />
{#if selectedOption?.title === "1 bedroom/Studio"}
<div class="flex gap-2 flex-col">
  <SingleButtonChoice options={unpacking} />
  <SingleButtonChoice options={packingMaterials} />
</div>
{/if}


<div class="bg-slate-50 hidden border-y -px-4 py-3 overflow-hidden">
  <div class="relative">
    <div class="p-3 absolute -top-2 bg-green-100 -right-2 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="size-5 text-orange-500"
      >
        <path
          fill-rule="evenodd"
          d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
          clip-rule="evenodd"
        />
      </svg>
    </div>

    <div class="flex gap-4">
      <img
        src="https://plus.unsplash.com/premium_photo-1723701918806-bf9b3b37a02a?q=80&w=3496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        class="aspect-square w-24 rounded-lg object-cover"
      />
      <h2 class="text-lg leading-tight font-semibold">
        Furniture packing, <span class="text-orange-600">£179/piece</span>
      </h2>
    </div>
  </div>
  <div class="px-0 py-2">
    <h3 class="font-semibold">How much furniture do you need to pack?</h3>
    <Stepper bind:count={itemCount} min={1} />

    <p></p>
  </div>
</div>


<div class="hidden">
  <div>
    <SingleButtonChoice {options} bind:selectedOption={selectedPackingOption} />
    {#if selectedPackingOption === "Packing all"}
      <SingleButtonChoice options={optionsassembly} />
    {/if}
  </div>
<!-- Wrapper for different flat moving variants -->
<WrapperWithSingleSelectedItem
  options={flatMovingVariants}
  bind:preselectedOption
  bind:preSelectedSlotPosition
>
  {#if preselectedOption === "Mini Move"}
    <ItemHeadline
      image="/img/moving/mini.svg"
      benefits={benefitsMiniMove}
      text="The most cost-effective small space moving option not only among other options, but also among competitors."
    />
    <div class="flex flex-col gap-2">
      <SingleButtonChoice {options} />
      <!-- <PackingAdditionalServices /> -->
      <SingleButtonChoice options={unpacking} />
      <SingleButtonChoice options={packingMaterials} />
      <div class="card-wrapper">End-of-tenancy cleaning</div>
      <div class="card-wrapper">Storage</div>
      <SingleButtonChoice options={optionsassembly} />
    </div>
  {/if}

  {#if preselectedOption === "1 bedroom/Studio"}
    <ItemHeadline
      image="/img/moving/1bed.svg"
      benefits={benefits1Bedroom}
      text="Whether it’s a compact space or a cozy home, we handle every detail with care, ensuring your belongings arrive safely at your new place."
    />
  {/if}

  {#if preselectedOption === "2 bedrooms"}
    <ItemHeadline
      image="/img/moving/2bed.svg"
      benefits={benefits2Bedrooms}
      text="Our professional movers are ready to take the hassle out of your move."
    />
  {/if}

  {#if preselectedOption === "3 bedrooms"}
    <ItemHeadline
      image="/img/moving/3bed.svg"
      benefits={benefits3Bedrooms}
      text="Our experienced movers ensure every room is packed, transported, and unpacked with precision and care."
    />
  {/if}

  {#if preselectedOption === "Personalised quote"}
    <ItemHeadline
      image="/img/contact.svg"
      text="Contact us for a personalised quote tailored to your move."
    />
    <!-- Bind the selected options for personalised quote -->
    <MultichoiceCard
      options={personalisedQuoteVariants}
      bind:selectedOptions={personalisedQuoteOptions}
    />
  {/if}
</WrapperWithSingleSelectedItem>

<Pricing pricing={selectedOption?.price} />
</div>