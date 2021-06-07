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
@import url('https://fonts.googleapis.com/css2?family=Heebo&display=swap');

* {
    font-family: 'Heebo', sans-serif !important;
}
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
    font-family: 'Heebo', sans-serif !important;
}

::-webkit-scrollbar {
    width: 2.5px;
}

::-webkit-scrollbar-thumb {
    background: rgb(163, 163, 163);
}
</style>