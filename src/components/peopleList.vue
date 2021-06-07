<template>
    <div>
        <v-card max-width="20vw"
        height="80vh"
        class="listCard">
            <p class="text-h3 text-center listTitle">{{listTitle}}</p>
            <div v-for="(per, index) in peopleList" :key=index>
                <person :somePerson=per></person>
            </div>
        </v-card>
    </div>
</template>

<script>
import person from './person';
export default {
    components: {
        person
    },
    props: {
        peopleList: Array,
        listTitle: String
    }
}
</script>

<style scoped>
.listCard {
    background-color: #2a2b38 !important;
}
.listTitle {
    color: #ffffff;
}
</style>