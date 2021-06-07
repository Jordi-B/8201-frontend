<template>
    <v-card 
    elevation="2" 
    :color="bgColor"
    dark
    class="mx-auto rounded-card"
    max-width="10vw"
    height="20vh"
    outlined>
        <v-container>
            <v-row>
                <h1 class="mx-auto my-1 text-center">
                    {{title}}
                </h1>
            </v-row>
            <v-row>
                <h1 class="mx-auto my-2" v-bind:style="{color :amountColor}">{{amount}}</h1>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        amountColor: {
            type: String,
            required: true
        },
        bgColor: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.rounded-card{
    border-radius:20px;
}
</style>