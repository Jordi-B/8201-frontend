<template>
    <div>
        <v-card max-width="20vw"
        height="90vh"
        class="listCard"
        elevation=11
        :class="color">
                <v-card-text class="title-container">
        <v-row>
            <v-col md="3">
      <v-text-field placeholder="סנן" v-model="filterInput" dark class="filter-search"/>
      </v-col>
      <v-col md="9">
      <div class="text-h2 title">{{ listTitle }}</div>
      </v-col>
      </v-row>
    </v-card-text>
            <div v-if="!isLoading">
            <div v-for="(per, index) in filteredPeopleList" :key=index>
                <person :somePerson="per"></person>
            </div>
            </div>
            <h1 class="no-results-text" v-if="filteredPeopleList.length === 0 && !isLoading">לא נמצאו תוצאות</h1>
                <v-progress-circular
                indeterminate
                color="blue"
                class="load-bar"
                size="80"
                v-if="isLoading"
                ></v-progress-circular>
        </v-card>
    </div>
</template>

<script>
import person from './person';
export default {
    components: {
        person
    },
    data() {
        return {
            filterInput: '',
            isLoading: true
        }
    },
    props: {
        peopleList: Array,
        listTitle: String,
        color: String
    },

    computed: {
        filteredPeopleList() {
            return this.peopleList.filter(person => `${person.person.firstName} ${person.person.lastName}`.includes(this.filterInput));
        }
    },

    created() {
        setTimeout(() => { this.isLoading = false }, 1000)
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
    overflow: auto;
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

.load-bar {
    margin-left: 7vw;
    margin-top: 15vw;
}

.title {
    color: white;
    direction: rtl;
    font-family: 'Heebo', sans-serif !important;
}

.filter-search {
    direction: rtl;
}

.no-results-text {
    color: #f42b03;
    margin-top: 12.5vh;
    text-align: center;
}

::-webkit-scrollbar {
    width: 0;
}
</style>