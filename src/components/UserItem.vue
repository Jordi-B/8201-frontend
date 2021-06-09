<template>
    <!-- <div class="list-item">
        <div class="text-h7 title">{{ title }}</div>
        <slot></slot>
    </div> -->

        <v-list-item class="list-item">
            <v-list-item-icon v-if="editable">
                <v-icon @click="deleteUser(title)" class="delete-button">mdi-delete</v-icon>
            </v-list-item-icon>
            <v-list-item-icon v-else-if="editable">
                <v-icon @click="changeWord" class="confirm-edit-button">mdi-check-outline</v-icon>
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
        },
        editable: {
            type: Boolean,
            default: true
        }
    },

    data() {
        return {
            editing: false,
            newWord: ''
        }
    },
    methods: {
        deleteUser() {
            this.$emit('delete', this.title);
        },
        changeWord() {
            this.$emit('edit', { wordToEdit: this.title, newWord: this.newWord });
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Heebo&display=swap');

* {
    font-family: 'Heebo', sans-serif !important;
}

.list-item {
    background-color: rgb(61, 61, 131);
    text-align: right;
    margin-top: 3px;
    border-radius: 2px;
}

.list-item:hover {
    opacity: 0.5;
}

.title {
    color: white;
    margin-right: 1vh;
    font-family: 'Heebo', sans-serif !important;
}

.pencil {
    color:rgb(238, 238, 238);
}

.delete-button {
    color: rgb(236, 79, 79);
}

.text-input {
    direction: rtl;
}

.confirm-edit-button {
    color: green;
}

.close-edit-button {
    color: red;
}
</style>