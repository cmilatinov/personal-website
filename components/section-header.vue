<template>
    <console-typer root-element="h2" class="text-xl mb-4">
        <span class="text-primary">$</span> cd
        <span class="text-accent">"~/{{ title }}"</span>
        &amp;&amp; ls
    </console-typer>
</template>

<script lang="ts" setup>
defineProps<{ title: string }>();
</script>

<style scoped></style>
