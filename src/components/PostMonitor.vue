<template>
    <v-sheet
    elevation="8"
    outlined
    rounded
    shaped
    class="post-monitor-sheet"
    >
    <v-card-text class="title-container">
      <div class="text-h2 title">ניטור</div>
    </v-card-text>
    <PostBubble author="אוריה" :words="['רצח', 'מוות']"/>
    <PostBubble author="ספיר" :words="['סכין', 'דקירה', 'מחבל']"/>
        <PostBubble author="אוריה" :words="['רצח', 'מוות']"/>
    <PostBubble author="ספיר" :words="['סכין', 'דקירה', 'מחבל']"/>
        <PostBubble author="אוריה" :words="['רצח', 'מוות']"/>
    <PostBubble author="ספיר" :words="['סכין', 'דקירה', 'מחבל']"/>
    </v-sheet>
</template>

<script>
import PostBubble from './PostBubble';

export default {
    name: 'PostMonitor',
    components: {
        PostBubble
    },
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
.post-monitor-sheet {
    background-color: #111633 !important;
    border: 1px solid rgb(185, 185, 185);
    width: 40vw;
}

.title {
    color: white;
    direction: rtl;
}

.title-container {
    justify-content: flex-end;
    display: flex;
}

.filter-words-checkbox {
    color: green
}

.filter-input {
    direction: rtl;
}
</style>