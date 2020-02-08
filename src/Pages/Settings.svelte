<script>
    import Button from '../Components/Button.svelte'
    import { push } from 'svelte-spa-router'
    import { user } from '../Stores/User.js'

    let username;

    function save() {
        user.update(() => {
            return {
                'name': username,
                'color': '',
                'image': ''
            }
        });
        push('/');
    }

    const unsubscribe = user.subscribe(value => {
        username = value.name;
    });

</script>

<h1>Settings</h1>

<label for="name">Your nickname</label>
<input type="text" id="name" bind:value={ username } />


<Button label="Save" action="{save}" />

