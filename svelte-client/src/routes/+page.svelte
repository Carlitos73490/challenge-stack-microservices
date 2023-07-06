
<script>
    import {Card, Button, GradientButton, ButtonGroup, Label, Input, Textarea} from "flowbite-svelte";
    /** @type {import('./$types').PageData} */
    export let data;


    let arraySize = 1000
    let output = data
    console.log(data)

</script>
<Card>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NestJs Bun</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
        Get datas from Bun environnement
    </p>
    <div>
        <Label for="array_size" class="mb-2" >Array Size</Label>
        <Input type="number" id="array_size" placeholder="10000" bind:value={arraySize} required  />
    </div>
    <ButtonGroup class="space-x-px">
        <GradientButton color="purpleToBlue" >BigArray</GradientButton>
        <GradientButton color="cyanToBlue">BigDbFetch</GradientButton>
    </ButtonGroup>
    <Textarea id="textarea-id" placeholder="Results" rows="4" name="message" bind:value={output}/>
</Card>
