<script>
  export let pricing;
  export let packingPrice = 0;
  export let cleaningPrice = 0;
  export let assemblyPrice = 0;
  export let storagePrice = 0;
</script>

<div
  class="bg-slate-200/50 lg:z-40 rounded-xl xl:shadow-xl xl:shadow-slate-700/10 p-4 xl:fixed xl:right-4 xl:bottom-4 xl:w-80 flex flex-col gap-2"
>
  <div class="flex gap-2 place-items-baseline text-lg">
    <p class="">Total</p>
    <p class="font-semibold">{pricing}</p>
  </div>
  <p>Get 5% discount</p>
  <div class="text-xs text-slate-500 space-y-1">
    <div class="flex gap-2">
      <p class="min-w-40">Pricing</p>
      <p>{pricing}</p>
    </div>
    <div class="flex gap-2">
      <p class="min-w-40">Packing</p>
      <p>£{packingPrice}</p>
    </div>

    <p>Packing £237</p>
    <p>Cleaning £45</p>
    <p>Assembly/Disassembly £30</p>
    <p>Storage £20/per week</p>
  </div>
</div>
