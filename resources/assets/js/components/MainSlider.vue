<template>
    <div>
        <section>
            <slick ref="slick" :options="slickOptions">
                <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
                <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
                <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
                <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
                <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
            </slick>
        </section>
    </div>
</template>

<script>
    export default {
        name: "MainSlider",
        data() {
            return {
                slickOptions: {
                    slidesToShow: 3,
                },
            };
        },
    }
</script>

<style scoped>

</style>