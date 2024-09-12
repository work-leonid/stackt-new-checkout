<script>
  import StepperCard from "$lib/StepperCardVertical.svelte";
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
  <div class="my-4">
    <p>
      For a 2 bedrooms apartment our clients normally need: 30 small boxes, 15
      large boxes, 10 wardrobe boxes, 2 bubble wraps, 17 tapes
    </p>
  </div>
  <StepperCard options={packingMeterials} />
</div>
