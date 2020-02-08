<!-- ./App.svelte -->
<script>

    import Router from 'svelte-spa-router'

    import { user } from './Stores/User.js'
    import { push } from 'svelte-spa-router'

    import FrontMenu from './Pages/FrontMenu.svelte'
    import Settings from './Pages/Settings.svelte'
    import NotFound from './Pages/NotFound.svelte'

    // Routes
    const routes = {
        '/': FrontMenu,
        '/settings': Settings,
        '*': NotFound
    }

    // Redirect to settings on load if our user is not configured
    user.subscribe(value => {
        if (!value.configured) {
            push('/settings');
        }
    });

</script>

<Router {routes} />

