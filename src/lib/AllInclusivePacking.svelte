<script>
  import ItemHeadline from "$lib/ItemHeadline.svelte";
  let allInclusiveOptions = [
    "Boxes",
    "Paper packs",
    "PVC tape",
    "Bubble wraps",
    "Packing services",
  ];
</script>

<ItemHeadline
  text="We will carefully pack all your items in one go in the safest way possible. You'll get unlimited packing materials included."
  image="https://plus.unsplash.com/premium_photo-1664300914931-76c0f99a96b8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHBhY2tpbmclMjBib3glMjBtb3ZlcnxlbnwwfDB8MHx8fDE%3D"
  benefits={allInclusiveOptions}
/>
