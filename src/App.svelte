<!-- ./App.svelte -->
<script>

    import Router from 'svelte-spa-router'
    import Index from './Pages/Index.svelte'
    import About from './Pages/About.svelte'
    import NotFound from './Pages/NotFound.svelte'

    const routes = {
        '/': Index,
        '/about': About,
        '*': NotFound
    }

</script>

<Router {routes} />

<a href="#/">This is boogie</a>
<a href="#/about">Yeah mate</a>

