<script>
    import Button from '../Components/Button.svelte'
    import {push} from 'svelte-spa-router'

    function save()
    {
        push('/');
    }

</script>

<h1>Settings</h1>

<label for="name">Your nickname</label>
<input type="text" id="name" />


<Button label="Save" action="{save}" />

