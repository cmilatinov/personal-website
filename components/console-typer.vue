<template>
    <div class="hidden">
        <slot></slot>
    </div>
    <component :is="rootElement || 'div'" v-bind="$attrs">
        <node
            v-for="(node, index) in renderedNodes"
            :key="index"
            :node="node"
        ></node>
        <span
            class="h-full w-[20px] bg-white select-none blink"
            :class="{ disabled: typingDone }"
            >&nbsp;</span
        >
    </component>
</template>

<script lang="ts" setup>
import { VNode } from 'vue';
import { RenderNode } from '~/interfaces/render-node';
import _ from 'lodash';

defineProps<{ rootElement: string }>();

const slots = useSlots();
const content = slots.default?.call(undefined);

const initialNodes = ref<RenderNode[]>([]);
let initialTextNodes: RenderNode[] = [];

const renderedNodes = ref<RenderNode[]>([]);
let renderedTextNodes: RenderNode[] = [];

let mappedNodes: [RenderNode, RenderNode][] = [];

const typingDone = ref(false);

const mapRenderNode = (e: VNode) => {
    const isText = e.type.toString() === 'Symbol(Text)';
    if (Array.isArray(e.children)) {
        const children = (e.children as VNode[]).map<RenderNode>(mapRenderNode);
        return {
            type: isText ? 'text' : (e.type as string),
            props: e.props || {},
            children
        };
    }
    return {
        type: isText ? 'text' : (e.type as string),
        props: e.props || {},
        children: e.children as string
    };
};

const collectTextNodes = (root: RenderNode, textNodes: RenderNode[]) => {
    if (typeof root.children === 'string') {
        textNodes.push(root);
    } else if (Array.isArray(root.children)) {
        root.children.forEach((c) => collectTextNodes(c, textNodes));
    }
};

const flattenTextNodes = (rootNodes: RenderNode[]) => {
    const texts: RenderNode[] = [];
    rootNodes.forEach((n) => collectTextNodes(n, texts));
    return texts;
};

onMounted(() => {
    initialNodes.value = (content || []).map<RenderNode>(mapRenderNode);
    initialTextNodes = flattenTextNodes(initialNodes.value);
    renderedNodes.value = _.cloneDeep(initialNodes.value);
    renderedTextNodes = flattenTextNodes(renderedNodes.value);
    mappedNodes = renderedTextNodes.map((n, i) => [initialTextNodes[i], n]);
    mappedNodes.forEach(([_, r]) => (r.children = ''));

    let currentNodeIndex = 0;
    const typingInterval = window.setInterval(() => {
        const nodes = mappedNodes[currentNodeIndex];
        if (!nodes) {
            typingDone.value = true;
            return window.clearInterval(typingInterval);
        }
        const [n, r] = nodes;
        if (r.children.length < n.children.length) {
            r.children = (n.children as string).substring(
                0,
                r.children.length + 1
            );
        } else {
            currentNodeIndex++;
        }
    }, 75);
});
</script>

<style lang="scss">
@keyframes blink {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
}

.blink {
    animation: blink 1s infinite step-end;

    &.disabled {
        animation: none !important;
        display: none;
    }
}
</style>
