<template>
    <div class="footer-nav">
        <h4 class="footer-header footer-nav-header">Navigation</h4>
        <div>
        <ul class="footer-nav-ul">
            <a v-for="category in categories" 
            :key="category"
            :href="category"><li>{{ category }}</li></a>
        </ul>
    </div>
    </div>
</template>
]
<script>
    export default {
    name: 'FooterNav', // vue component name
    props: ["categories"],
  };
</script>

<style lang="scss">
@import '../assets/variables';
    .footer-nav-header {
        font-size: var(--h3);
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    .footer-nav {
        width: 36rem;
        margin: 0 auto;
    }
    .footer-nav-ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        margin-top: 1.5rem;
        border-top: .3rem solid var(--primary-color); 
        border-bottom: .3rem solid var(--primary-color); 
    }
    .footer-nav-ul li {
        color: var(--primary-color);
        font-size: var(--h4);
        list-style-type: none;
        text-transform: capitalize;
        padding: .75rem;
    }
     @media only screen and (max-width: $x-small-screen) {
        .footer-nav {
            margin: 5.1rem auto;
        }
    }

</style>

<docs>
This is the section of the footer with a navigation bar so the user can go to the different cateogries of the newpaper.

## Variables Used:
--font, --primary-color, --accent-color, --h3, --h5

## Examples
```jsx
<FooterSocialMedia />
```

</docs>