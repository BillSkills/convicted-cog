<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
    props: {
        to: { type: String, required: true },
        icon: { type: String, required: true }
    },
    setup(props) {
        const route = useRoute()
        const isActive = computed(() => route.path === props.to)
        return { isActive }
    }
}
</script>

<template>
    <router-link :to="to" class="link" :class="{ active: isActive }">
        <i class="icon" :class="icon" />
        <slot />
    </router-link>
</template>

<style scoped>
@font-face {
    font-family: "ggst-heading";
    src: url("../../../public/fonts/heading.otf");
}

.link {
    font-family: ggst-heading;
    float: left;
    color: #c4c4c4;
    text-align: center;
    padding: 12px 15px 16px;
    text-decoration: none;
    font-size: 17px;
}

.link:hover {
    background-color: var(--navbar-item-hover);
}

.link.active {
    background-color: var(--navbar-item-active);
    color: #faf7d9;
}

.link .icon {
    margin-right: 10px;
}
</style>