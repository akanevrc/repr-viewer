<script lang="ts">
  import Textfield from "@smui/textfield";
  import HelperText from "@smui/textfield/helper-text";
  import Select, { Option } from "@smui/select";
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
  <h1>Number Representation Viewer</h1>
  <div>
    <p>{repr ?? "変換できません"}</p>
  </div>
  <div>
    <Select bind:value={ty} label="データ型">
      {#each tys as t}
        <Option value={t}>{t}</Option>
      {/each}
    </Select>
    <Textfield bind:value={number} label="数値" required>
      {#snippet helper()}
        <HelperText>変換対象の数値を入力してください</HelperText>
      {/snippet}
    </Textfield>
  </div>
  {#if isFloat(ty)}
    <div>
      <Textfield bind:value={converted} label="変換後" />
    </div>
    <div>
      <Textfield bind:value={sign} label="符号部" />
    </div>
    <div>
      <Textfield bind:value={exp} label="指数部" />
    </div>
    <div>
      <Textfield bind:value={frac} label="仮数部" />
    </div>
  {/if}
</main>

<style>
</style>
