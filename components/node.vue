<template>
    <template v-if="hasChildren">
        <component :is="node.type" v-bind="node.props">
            <node
                v-for="(child, index) in node.children"
                :key="index"
                :node="child"
            ></node>
        </component>
    </template>
    <template v-else-if="node.type !== 'text'">
        <component :is="node.type" v-bind="node.props">
            {{ node.children }}
        </component>
    </template>
    <template v-else>
        {{ node.children }}
    </template>
</template>

<script lang="ts" setup>
import { RenderNode } from '~/interfaces/render-node';

const props = defineProps<{ node: RenderNode }>();

const hasChildren = ref(Array.isArray(props.node.children));
</script>

<style scoped></style>
