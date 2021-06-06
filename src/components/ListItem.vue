<template>
    <!-- <div class="list-item">
        <div class="text-h7 title">{{ title }}</div>
        <slot></slot>
    </div> -->

        <v-list-item class="list-item">
            <v-list-item-icon v-if="true">
                <v-icon @click="editItem" class="pencil">mdi-pencil</v-icon>
                <v-icon @click="deleteItem" class="delete-button">mdi-delete</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title class="title">{{ title }}</v-list-item-title>
          </v-list-item-content>
          <slot></slot>
        </v-list-item>
</template>

<script>
export default {
    name: 'ListItem',
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    methods: {
        deleteItem() {
            alert('deleting...');
        },

        editItem() {
            alert('editing...');
        }
    }
}
</script>

<style scoped>
.list-item {
    background-color: rgb(61, 61, 131);
    text-align: right;
    margin-top: 3px;
    border-radius: 2px;
}

.title {
    color: white;
    margin-right: 1vh;
}

.pencil {
    color:rgb(238, 238, 238);
}

.delete-button {
    color: rgb(236, 79, 79);
}

</style>