<template>
    <div class="card-cube rounded" :style="`background-image: url(${bg})`">

    </div>
</template>

<script>
export default {
    name: 'CardCube',
    props: {
        item: {
            type: Object,
            default: () => {},
        }
    },
    computed: {
        bg() {
            return require(`../assets/img/${this.item.img}`);
        }
    }
};
</script>

<style lang="scss">
.card-cube {
    overflow: hidden;
    box-shadow: $card-shadow;
    margin-bottom: 10px;
    cursor: pointer;
    background-position: center;
    background-size: cover;
    transition: box-shadow, transform, $transition-md ease;

    &::after {
        display: block;
        content: "";
        padding-top: 100%;
        width: 100%;
        pointer-events: none;
    }

    &:hover {
        box-shadow: $card-shadow-hovered;
        transform: scale(1.03);
    }

    @include up($md) {
        margin-bottom: 20px;
    }
}
</style>