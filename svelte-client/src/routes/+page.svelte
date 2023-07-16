
<script>
    import {
        Card,
        Button,
        GradientButton,
        ButtonGroup,
        Label,
        Input,
        Textarea,
        NavHamburger,
        NavUl, NavLi, NavBrand, Navbar
    } from "flowbite-svelte";

    /** @type {import('./$types').PageLoad} */
    export let data;

    let defaultArraySize = 1000


    /** @type {import('./$types').ActionData} */
    export let form;


</script>
<Navbar let:toggle>
    <NavBrand href="/">
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      NodeJs-Bun-Deno Benchmark with GRPC exchanges
    </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl >
        <NavLi href="/" active={true}>Benchmark</NavLi>
    </NavUl>
</Navbar>
<div>
    <form method="POST" >
        <Label for="email" class="mb-2" >Email</Label>
        <Input type="text" id="email" name="email" placeholder="carl@icloud.com" required  />
        <Label for="password" class="mb-2" >Password</Label>
        <Input type="password" id="password" name="password" placeholder="1234"  required  />
        <Input type="hidden" id="formId" name="formId" value="loginForm" hidden/>

        <button color="purpleToBlue" formaction="?/lightAuth" >Login</button>
    </form>
    {#if form?.success}
        <p>Current Token : {form.token}</p>
        <div class="p-2 flex justify-evenly w-full">
            <Card>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NestJs NodeJs</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
                    Get datas from NodeJs environnement
                </p>
                <form method="POST" >
                    <Label for="size" class="mb-2" >Array Size</Label>
                    <Input type="number" id="size" name="size" placeholder="10000" bind:value={defaultArraySize} required  />
                    <Label for="size" class="mb-2" >Port</Label>
                    <Input type="number" id="port" name="port"  bind:value={data.nodeJsPort} required  />
                    <Input type="hidden" id="formId" name="formId" value="node" />
                    <Input type="hidden" id="token" name="token" value="{form.token}" hidden/>


                    <button color="purpleToBlue" formaction="?/bigArrayProcess" >Launch GRPC Request</button>
                </form>
                {#if form?.success && form?.formId == "node"}
                    <!-- this message is ephemeral; it exists because the page was rendered in
                           response to a form submission. it will vanish if the user reloads -->
                    <Textarea id="textarea-id" placeholder="Results" rows="4" name="message" bind:value={form.elapsedTime}/>
                {/if}
            </Card>
            <Card>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NestJs Bun</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
                    Get datas from Bun environnement
                </p>
                <form method="POST" >
                    <Label for="size" class="mb-2" >Array Size</Label>
                    <Input type="number" id="size" name="size" placeholder="10000" bind:value={defaultArraySize} required  />
                    <Label for="size" class="mb-2" >Port</Label>
                    <Input type="number" id="port" name="port"  bind:value={data.bunPort} required  />
                    <Input type="hidden" id="formId" name="formId" value="bun" hidden/>
                    <button color="purpleToBlue" formaction="?/bigArrayProcess" >Launch GRPC Request</button>
                </form>
                {#if form?.success && form?.formId == "bun"}
                    <!-- this message is ephemeral; it exists because the page was rendered in
                           response to a form submission. it will vanish if the user reloads -->
                    <Textarea id="textarea-id" placeholder="Results" rows="4" name="message" bind:value={form.elapsedTime}/>
                {/if}
            </Card>
            <Card>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NestJs Deno</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
                    Get datas from Deno environnement
                </p>
                <form method="POST" >
                    <Label for="size" class="mb-2" >Array Size</Label>
                    <Input type="number" id="size" name="size" placeholder="10000" bind:value={defaultArraySize} required  />
                    <Label for="size" class="mb-2" >Port</Label>
                    <Input type="number" id="port" name="port"  bind:value={data.denoPort} required  />
                    <Input type="hidden" id="formId" name="formId" value="deno" hidden/>

                    <button color="purpleToBlue" formaction="?/bigArrayProcess" >Launch GRPC Request</button>
                </form>
                {#if form?.success && form?.formId == "deno"}
                    <!-- this message is ephemeral; it exists because the page was rendered in
                           response to a form submission. it will vanish if the user reloads -->
                    <Textarea id="textarea-id" placeholder="Results" rows="4" name="message" bind:value={form.elapsedTime}/>
                {/if}
            </Card>

        </div>
    {/if}

</div>


