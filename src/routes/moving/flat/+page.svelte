<script>
  import { goto } from "$app/navigation";

  import Header from "$lib/Header.svelte";
  import HeadlineCard from "$lib/HeadlineCard.svelte";

  let currentPrice = "Moving total £169";
  const movingBenefits = [
    "No overtime charges",
    "Professional movers with bodycams",
    "Insurance included in price",
  ];
</script>

<Header />
<HeadlineCard
  headline="Moving - flexible & adaptive to your needs"
  subheadline=""
  image="/img/moving.svg"
  benefits={movingBenefits}
/>
