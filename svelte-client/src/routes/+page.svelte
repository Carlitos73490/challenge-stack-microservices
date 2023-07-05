
<script>
    import {Card, Button, GradientButton, ButtonGroup} from "flowbite-svelte";
</script>
<Card>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NestJs Bun</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
        Get datas from Bun environnement
    </p>
    <ButtonGroup class="space-x-px">
        <GradientButton color="purpleToBlue">Profile</GradientButton>
        <GradientButton color="cyanToBlue">Settings</GradientButton>
        <GradientButton color="greenToBlue">Messages</GradientButton>
    </ButtonGroup>
</Card>