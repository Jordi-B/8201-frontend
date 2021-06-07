<template>
    <div class="list-item">
        <div class="text-h5 title">{{ title }}</div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ListItem',
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
.list-item {
    background-color: rgb(5, 5, 161);
    text-align: right;
    margin-top: 3px;
}

.title {
    color: white;
    margin-right: 1vh;
}
</style>