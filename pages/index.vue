<template>
    <section
        id="home"
        class="h-[500px] section-container flex flex-col justify-center"
    >
        <h2 class="text-primary">Hi, my name is</h2>
        <h1 class="text-4xl font-bold">Cristian Milatinov</h1>
    </section>
    <section id="experience" class="h-screen bg-dark">
        <div class="section-container">
            <section-header title="Experience" />
        </div>
    </section>
    <section id="projects" class="h-screen">
        <div class="section-container">
            <section-header title="Projects" />
        </div>
    </section>
    <section id="about" class="h-screen bg-dark">
        <div class="section-container">
            <section-header title="About" />
        </div>
    </section>
</template>

<script>
export default {
    name: 'index'
};
</script>
