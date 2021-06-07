<template>
    <div>
        <v-card max-width="20vw"
        height="90vh"
        class="listCard"
        elevation=11
        :class="color">
            <p class="text-h3 text-center listTitle">{{listTitle}}</p>
            <div v-for="(per, index) in peopleList" :key=index>
                <person :somePerson="per"></person>
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
        listTitle: String,
        color: String
    }
}
</script>

<style scoped>
.listCard {
    background-color: #111633 !important;
}
.red {
    border: 0.1px solid #942226 !important;
}
.yellow {
    border: 0.1px solid #9c8d34 !important;
}
.listTitle {
    color: #ffffff;
}
</style>