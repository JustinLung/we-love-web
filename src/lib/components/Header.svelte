<header>
    <h1>We ❤️ Web Blog</h1>
    <nav>
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
    </nav>
</header>

<style>
    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.2rem;
    }

    h1 {
        font-size: 1.5rem;
    }

    a {
        text-decoration: none;
        color: var(--color-black);
    }

    nav {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    @media (min-width: 40rem) {
        header{
            justify-content: center;
            gap: 2rem;
        }
    }
</style>