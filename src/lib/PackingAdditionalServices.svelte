<script>
  import MultichoiceCard from "$lib/MultichoiceCard.svelte";
  import StepperCard from "$lib/StepperCard.svelte";

  const additionalServices = [
    {
      title: "Unpacking for your items",
      description: "We will carefully unpack all your items after delivery.",
      price: "£169",
    },
    {
      title: "Packing materials",
      description: "Professional recycled packing materials",
      price: "from £2.72/box",
    },
  ];
  let multiselectedOptions = [];

  const packingMeterials = [
    {
      title: "Small boxes",
      description: "36cm x 36cm x36cm -14inch (up to 15kg)",
      price: "£2.72/box",
      image: "/packing/materials/smallbox.svg",
    },
    {
      title: "Large boxes",
      description: "46 × 46 × 46cm -18 inches (up to 20kg)",
      price: "£2.72/box",
      image: "/packing/materials/largebox.svg",
    },
    {
      title: "Wardrobe boxes",
      description: "holds 20-30 hangers",
      price: "£8.1/box",
      image: "/packing/materials/wardrobebox.svg",
    },
    {
      title: "Tape",
      description: "Brown PVC tape: 5cm x 6600cm",
      price: "£2.72/tape",
      image: "/packing/materials/tape.svg",
    },
    {
      title: "Bubble wrap(s)",
      description: "30cm x 50m roll",
      price: "£40/roll",
      image: "/packing/materials/bubblewrap.svg",
    },
    {
      title: "Paper pack",
      description: "White packing paper pack",
      price: "£11/box",
      image: "/packing/materials/paper.svg",
    },
  ];
</script>

<div>
  <h2 class="headline">Additional services</h2>
  <MultichoiceCard
    options={additionalServices}
    bind:selectedOptions={multiselectedOptions}
  />
  {#if multiselectedOptions.includes("Packing materials")}
    <div class="my-4">
      <h3 class="headline">Proffesional packing materials</h3>
      <p>
        For a 2 bedrooms apartment our clients normally need: 30 small boxes, 15
        large boxes, 10 wardrobe boxes, 2 bubble wraps, 17 tapes
      </p>
    </div>
    <StepperCard options={packingMeterials} />
  {/if}
</div>
