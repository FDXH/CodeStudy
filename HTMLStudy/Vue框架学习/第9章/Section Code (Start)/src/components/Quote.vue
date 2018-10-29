<template>
    <div>
        <div class="title">
            <slot name="title"></slot>
            <span style="color: #ccc">
                <slot name="subtitle">The subtitle</slot>
            </span>
        </div>
        <hr>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        margin: 30px auto;
        padding: 30px;
        text-align: center;
    }
    h2 {
        color: red;
    }
    .title {
        font-style: italic;
    }
</style>