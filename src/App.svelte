<!-- ./App.svelte -->
<script>

    import Router from 'svelte-spa-router'

    import FrontMenu from './Pages/FrontMenu.svelte'
    import Settings from './Pages/Settings.svelte'
    import NotFound from './Pages/NotFound.svelte'

    const routes = {
        '/': FrontMenu,
        '/settings': Settings,
        '*': NotFound
    }

</script>

<Router {routes} />

