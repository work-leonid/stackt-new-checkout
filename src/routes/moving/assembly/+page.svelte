<script>
  import { goto } from "$app/navigation";
  import { totalPrice } from "$lib/stores"; // Import the store to update the price
  import { onMount } from "svelte";

  import Header from "$lib/Header.svelte";
  import HeadlineCard from "$lib/HeadlineCard.svelte";
  import WrapperWithSingleSelectedItem from "$lib/WrapperWithSingleSelectedItem.svelte";
  import ItemHeadline from "$lib/ItemHeadline.svelte";
  import StepperCard from "$lib/StepperCard.svelte";

  const assemblyBenefits = ["Safe & secure assembly", "Only professionals"];

  function goToNextPage() {
    goto("/moving/storagecollection");
  }
  function goToPreviousPage() {
    goto("/moving/cleaning");
  }

  const assemblyVariants = [
    {
      title: "No, thank you",
      description: "I'll do it myself",
      price: "",
    },
    {
      title: "Assemble/Disassemble by separate furniture",
      description: "Select only what do you need",
      price: "from £23",
    },
    {
      title: "Assemble/Disassemble with fixed price",
      description: "Include 3 wardrobes, 3 beds, 1 desk",
      price: "£549",
    },
  ];
  let preselectedOption = "Assemble/Disassemble by separate furniture";
  let preSelectedSlotPosition = 1;

  let storedPriceFromFirstPage = 0; // To hold the stored price from the first page

  const assemblyItems = [
    {
      title: "Wardrobe",
      description: "",
      price: "£93",
      image: "assembly/wardrobe.svg",
    },
    {
      title: "Office desk",
      description: "",
      price: "£93",
      image: "assembly/desk.svg",
    },
    {
      title: "Dining table",
      description: "",
      price: "£62",
      image: "assembly/table.svg",
    },
    {
      title: "Single bed",
      description: "",
      price: "£47",
      image: "assembly/bed.svg",
    },
    {
      title: "Double or King bed",
      description: "",
      price: "£77",
      image: "assembly/kingbed.svg",
    },
    {
      title: "TV Stand",
      description: "",
      price: "£69",
      image: "assembly/tvstand.svg",
    },
    {
      title: "Bookcase",
      description: "",
      price: "£85",
      image: "assembly/bookcase.svg",
    },
    {
      title: "Sofa",
      description: "",
      price: "£23",
      image: "assembly/sofa.svg",
    },
  ];
  let fixedPriceBenefits = ["3 wardrobes", "3 beds", "1 desk"];

  // Subscribe to totalPrice store to retrieve the price from the first page
  onMount(() => {
    totalPrice.subscribe((value) => {
      storedPriceFromFirstPage = value; // Get the price stored from the first page
    });
  });
  // Track the selected packing option's price
  $: selectedPackingOption = assemblyVariants.find(
    (option) => option.title === preselectedOption,
  );

  // Reactive statement to calculate the total sum
  $: totalSum =
    storedPriceFromFirstPage +
    parseFloat(selectedPackingOption.price.replace(/[£,from ]/g, ""));
</script>

<Header />
<HeadlineCard
  headline="Assembly / Disassembly"
  subheadline="Whether it's furniture, machinery, or electronics, skilled professionals ensure precise assembly or disassembly, guaranteeing seamless functionality or safe removal"
  image="/img/assembly.svg"
  benefits={assemblyBenefits}
/>

<WrapperWithSingleSelectedItem
  options={assemblyVariants}
  bind:preselectedOption
  bind:preSelectedSlotPosition
  nextAction={goToNextPage}
  prevAction={goToPreviousPage}
>
  {#if preselectedOption === "Assemble/Disassemble by separate furniture"}
    <ItemHeadline
      text="We will carefully assemble or disassemble your furniture or equipment, ensuring that it is done correctly and safely."
      image="https://plus.unsplash.com/premium_photo-1661292184470-5ae807de40f5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
    />
    <StepperCard options={assemblyItems} />
  {/if}
  {#if preselectedOption === "Assemble/Disassemble with fixed price"}
    <ItemHeadline
      text="We will carefully assemble or disassemble your furniture or equipment, ensuring that it is done correctly and safely."
      image="https://plus.unsplash.com/premium_photo-1664303777059-cab540d722dd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      benefits={fixedPriceBenefits}
    />
  {/if}
</WrapperWithSingleSelectedItem>

<div>
  <p>Price from first page: £{storedPriceFromFirstPage}</p>
  <p>Current selected price: {selectedPackingOption?.price}</p>
  <p>Total sum: £{totalSum}</p>
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
