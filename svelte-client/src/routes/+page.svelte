
<script>
    import {Card, Button, GradientButton, ButtonGroup, Label, Input, Textarea} from "flowbite-svelte";

    let defaultPort = 5000
    let defaultArraySize = 10000
    /** @type {import('./$types').ActionData} */
    export let form;
</script>
<Card>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NestJs Bun</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
        Get datas from Bun environnement
    </p>



    <form method="POST" >
        <Label for="size" class="mb-2" >Array Size</Label>
        <Input type="number" id="size" name="size" placeholder="10000" bind:value={defaultArraySize} required  />
        <Label for="size" class="mb-2" >Port</Label>
        <Input type="number" id="port" name="port" placeholder="5000" bind:value={defaultPort} required  />

        <button color="purpleToBlue" formaction="?/bigArrayProcess" >Launch GRPC Request</button>
    </form>
    {#if form?.success}
        <!-- this message is ephemeral; it exists because the page was rendered in
               response to a form submission. it will vanish if the user reloads -->
        <Textarea id="textarea-id" placeholder="Results" rows="4" name="message" bind:value={form.elapsedTime}/>
    {/if}
</Card>
