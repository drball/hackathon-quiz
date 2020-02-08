<script>
    import Button from './Button.svelte'
    import {push} from 'svelte-spa-router'

    function doItBaby(pants)
    {
        alert(pants);
    }


</script>

<style>
    div {
        display: block;
    }
</style>

<div>
    <Button label="Play with friends" action={() => doItBaby("/game")} />
    <Button label="Settings" action={() => push("/settings")} />
</div>
