<template>
    <main
        class="h-screen overflow-auto scroll-smooth bg-main text-white font-mono"
    >
        <nav
            class="w-full top-0 sticky flex px-6 py-4 bg-main border-b-[1px] border-white/10"
        >
            <div class="mr-auto flex gap-2">
                <mdicon name="github" />
                <mdicon name="linkedin" />
            </div>
            <ul class="hidden sm:flex gap-x-6 items-center">
                <li v-for="link in links" :key="link.href">
                    <a class="underline-animation" :href="`#${link.href}`">{{
                        link.text
                    }}</a>
                </li>
            </ul>
            <mdicon class="block sm:hidden" name="menu" />
        </nav>
        <slot></slot>
    </main>
</template>

<script setup>
const links = [
    {
        text: 'Home',
        href: 'home'
    },
    {
        text: 'Experience',
        href: 'experience'
    },
    {
        text: 'Projects',
        href: 'projects'
    },
    {
        text: 'About Me',
        href: 'about'
    }
];
</script>

<style lang="scss" scoped>
.underline-animation {
    &:after {
        width: 0;
        height: 1.5px;
        display: block;
        content: '';
        background-color: white;
        border-radius: 1px;
        transition: width 0.3s ease-in-out;
    }

    &:hover {
        &:after {
            width: 100%;
        }
    }
}
</style>
