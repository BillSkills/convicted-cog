<script>
export default {
    name: "Match",
    props: {
        fight: Object,
    }
}
</script>

<template>
    <li>
        <span>{{fight.name}}</span>
        <ul>
            <Match 
            v-for="thisFight in fight.children"
            :key="thisFight.name"
            :fight="thisFight"/>
        </ul>
    </li>
</template>