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
    <h1 class="m-4 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
      Number Representation Viewer
    </h1>
    <hr class="m-2 w-9/10 border-double border-xs" />
    <div class="m-12">
      {#if repr !== null}
        {#if sizes !== null}
          <span class="border-b-6 border-red-600">
            {#each [...Array(sizes[0]).keys()] as i}
              {#if i !== 0 && i % 16 === 0}
                <br />
              {:else if i !== 0 && i % 8 === 0}
                <span
                  class="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl sm:leading-11 md:leading-14 lg:leading-17 xl:leading-20"
                  >&nbsp;&nbsp;</span
                >
              {:else if i !== 0 && i % 4 === 0}
                <span
                  class="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl sm:leading-11 md:leading-14 lg:leading-17 xl:leading-20"
                  >&nbsp;</span
                >
              {/if}
              <span
                class="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl sm:leading-11 md:leading-14 lg:leading-17 xl:leading-20"
                >{repr[i]}</span
              >
            {/each}
          </span>
          <span class="border-b-6 border-yellow-600">
            {#each [...Array(sizes[1]).keys()] as i}
              {#if (i + sizes[0]) % 16 === 0}
                <br />
              {:else if (i + sizes[0]) % 8 === 0}
                <span
                  class="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl sm:leading-11 md:leading-14 lg:leading-17 xl:leading-20"
                  >&nbsp;&nbsp;</span
                >
              {:else if (i + sizes[0]) % 4 === 0}
                <span
                  class="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl sm:leading-11 md:leading-14 lg:leading-17 xl:leading-20"
                  >&nbsp;</span
                >
              {/if}
              <span
                class="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl sm:leading-11 md:leading-14 lg:leading-17 xl:leading-20"
                >{repr[i + sizes[0]]}</span
              >
            {/each}
          </span>
          <span class="border-b-6 border-lime-600">
            {#each [...Array(sizes[2]).keys()] as i}
              {#if (i + sizes[0] + sizes[1]) % 16 === 0}
                <br />
              {:else if (i + sizes[0] + sizes[1]) % 8 === 0}
                <span
                  class="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl sm:leading-11 md:leading-14 lg:leading-17 xl:leading-20"
                  >&nbsp;&nbsp;</span
                >
              {:else if (i + sizes[0] + sizes[1]) % 4 === 0}
                <span
                  class="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl sm:leading-11 md:leading-14 lg:leading-17 xl:leading-20"
                  >&nbsp;</span
                >
              {/if}
              <span
                class="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl sm:leading-11 md:leading-14 lg:leading-17 xl:leading-20"
                >{repr[i + sizes[0] + sizes[1]]}</span
              >
            {/each}
          </span>
        {:else}
          <span class="border-b-6 border-blue-600">
            {#each [...Array(repr.length).keys()] as i}
              {#if i !== 0 && i % 16 === 0}
                <br />
              {:else if i !== 0 && i % 8 === 0}
                <span
                  class="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl sm:leading-11 md:leading-14 lg:leading-17 xl:leading-20"
                  >&nbsp;&nbsp;</span
                >
              {:else if i !== 0 && i % 4 === 0}
                <span
                  class="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl sm:leading-11 md:leading-14 lg:leading-17 xl:leading-20"
                  >&nbsp;</span
                >
              {/if}
              <span
                class="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl sm:leading-11 md:leading-14 lg:leading-17 xl:leading-20"
                >{repr[i]}</span
              >
            {/each}
          </span>
        {/if}
      {:else}
        <p class="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          数値を入力してください
        </p>
      {/if}
    </div>
    <div class="m-3">
      <label for="ty" class="sm:text-sm md:text-md lg:text-lg xl:text-xl"
        >データ型</label
      >
      <select
        id="ty"
        class="m-3 sm:text-md md:text-lg lg:text-xl xl:text-2xl text-center border-b-1"
        bind:value={ty}
      >
        {#each tys as t}
          <option class="bg-(--color-black)" value={t}>{t}</option>
        {/each}
      </select>
      <label
        for="target-number"
        class="sm:text-sm md:text-md lg:text-lg xl:text-xl">数値</label
      >
      <input
        type="text"
        id="target-number"
        class="m-3 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-right border-b-2"
        bind:value={number}
      />
    </div>
    {#if isFloat(ty)}
      <div class="flex flex-col m-2 items-end">
        <div class="m-1">
          <label
            for="converted"
            class="sm:text-sm md:text-md lg:text-lg xl:text-xl"
            >変換後の数値</label
          >
          <input
            type="text"
            id="converted"
            readonly
            class="sm:w-100 md:w-120 lg:w-140 xl:w-160 sm:text-sm md:text-md lg:text-lg xl:text-xl text-right border-b"
            bind:value={converted}
          />
        </div>
        <div class="m-1">
          <label for="sign" class="sm:text-sm md:text-md lg:text-lg xl:text-xl"
            >符号部</label
          >
          <input
            type="text"
            id="sign"
            readonly
            class="sm:w-100 md:w-120 lg:w-140 xl:w-160 sm:text-sm md:text-md lg:text-lg xl:text-xl text-right border-b border-red-600"
            bind:value={sign}
          />
        </div>
        <div class="m-1">
          <label for="exp" class="sm:text-sm md:text-md lg:text-lg xl:text-xl"
            >指数部</label
          >
          <input
            type="text"
            id="exp"
            readonly
            class="sm:w-100 md:w-120 lg:w-140 xl:w-160 sm:text-sm md:text-md lg:text-lg xl:text-xl text-right border-b border-yellow-600"
            bind:value={exp}
          />
        </div>
        <div class="m-1">
          <label for="frac" class="sm:text-sm md:text-md lg:text-lg xl:text-xl"
            >仮数部</label
          >
          <input
            type="text"
            id="frac"
            readonly
            class="sm:w-100 md:w-120 lg:w-140 xl:w-160 sm:text-sm md:text-md lg:text-lg xl:text-xl text-right border-b border-lime-600"
            bind:value={frac}
          />
        </div>
      </div>
    {/if}
  </div>
</main>
