<script lang="ts">
  import { type Ty, tys, isFloat, toSizes } from "./lib/ty";
  import { toBytes, toValue } from "./lib/wasm_bridge";
  import { toRepr, toReprSep } from "./lib/toRepr";

  let number = $state("0");
  let ty: Ty = $state("u8");
  let sizes = $derived(toSizes(ty));
  let bytes = $derived(toBytes(number, ty));
  let repr = $derived(toRepr(bytes));
  let reprSep = $derived(toReprSep(bytes, sizes));
  let converted = $derived(toValue(number, ty));
  let sign = $derived(reprSep && reprSep[0]);
  let exp = $derived(reprSep && reprSep[1]);
  let frac = $derived(reprSep && reprSep[2]);
</script>

<main>
  <div class="flex flex-col items-center">
    <h1 class="m-4 text-3xl">Number Representation Viewer</h1>
    <hr class="m-2 w-9/10 border-double border-xs" />
    <div class="m-16">
      {#if repr !== null}
        {#if sizes !== null}
          <span class="border-b-6 border-red-600">
            {#each [...Array(sizes[0]).keys()] as i}
              {#if i !== 0 && i % 32 === 0}
                <br />
              {:else if i !== 0 && i % 8 === 0}
                <span class="text-6xl leading-20">&nbsp;&nbsp;</span>
              {:else if i !== 0 && i % 4 === 0}
                <span class="text-6xl leading-20">&nbsp;</span>
              {/if}
              <span class="text-6xl leading-20">{repr[i]}</span>
            {/each}
          </span>
          <span class="border-b-6 border-yellow-600">
            {#each [...Array(sizes[1]).keys()] as i}
              {#if (i + sizes[0]) % 32 === 0}
                <br />
              {:else if (i + sizes[0]) % 8 === 0}
                <span class="text-6xl leading-20">&nbsp;&nbsp;</span>
              {:else if (i + sizes[0]) % 4 === 0}
                <span class="text-6xl leading-20">&nbsp;</span>
              {/if}
              <span class="text-6xl leading-20">{repr[i + sizes[0]]}</span>
            {/each}
          </span>
          <span class="border-b-6 border-lime-600">
            {#each [...Array(sizes[2]).keys()] as i}
              {#if (i + sizes[0] + sizes[1]) % 32 === 0}
                <br />
              {:else if (i + sizes[0] + sizes[1]) % 8 === 0}
                <span class="text-6xl leading-20">&nbsp;&nbsp;</span>
              {:else if (i + sizes[0] + sizes[1]) % 4 === 0}
                <span class="text-6xl leading-20">&nbsp;</span>
              {/if}
              <span class="text-6xl leading-20"
                >{repr[i + sizes[0] + sizes[1]]}</span
              >
            {/each}
          </span>
        {:else}
          <span class="border-b-6 border-blue-600">
            {#each [...Array(repr.length).keys()] as i}
              {#if i !== 0 && i % 32 === 0}
                <br />
              {:else if i !== 0 && i % 8 === 0}
                <span class="text-6xl leading-20">&nbsp;&nbsp;</span>
              {:else if i !== 0 && i % 4 === 0}
                <span class="text-6xl leading-20">&nbsp;</span>
              {/if}
              <span class="text-6xl leading-20">{repr[i]}</span>
            {/each}
          </span>
        {/if}
      {:else}
        <p class="text-6xl text-right">{repr ?? "変換できません"}</p>
      {/if}
    </div>
    <div class="m-3">
      <label for="ty" class="text-l">データ型</label>
      <select
        id="ty"
        class="m-3 text-2xl text-center border-b-1"
        bind:value={ty}
      >
        {#each tys as t}
          <option class="bg-(--color-black)" value={t}>{t}</option>
        {/each}
      </select>
      <label for="target-number" class="text-l">数値</label>
      <input
        type="text"
        id="target-number"
        class="m-3 text-3xl text-right border-b-2"
        bind:value={number}
      />
    </div>
    {#if isFloat(ty)}
      <div class="flex flex-col m-2 items-end">
        <div class="m-1">
          <label for="converted" class="text-l">変換後の数値</label>
          <input
            type="text"
            id="converted"
            readonly
            class="w-160 text-xl text-right border-b"
            bind:value={converted}
          />
        </div>
        <div class="m-1">
          <label for="sign" class="text-l">符号部</label>
          <input
            type="text"
            id="sign"
            readonly
            class="w-160 text-xl text-right border-b border-red-600"
            bind:value={sign}
          />
        </div>
        <div class="m-1">
          <label for="exp" class="text-l">指数部</label>
          <input
            type="text"
            id="exp"
            readonly
            class="w-160 text-xl text-right border-b border-yellow-600"
            bind:value={exp}
          />
        </div>
        <div class="m-1">
          <label for="frac" class="text-l">仮数部</label>
          <input
            type="text"
            id="frac"
            readonly
            class="w-160 text-xl text-right border-b border-lime-600"
            bind:value={frac}
          />
        </div>
      </div>
    {/if}
  </div>
</main>
