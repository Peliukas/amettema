<template>
    <div>
        <gmap-map
                :center="center"
                :zoom="12"
                style="width:100%;  height: 200px;">
            <gmap-marker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    @click="center=m.position"
            ></gmap-marker>
        </gmap-map>
    </div>
</template>

<script>
    export default {
        name: "google-map",
        data() {
            return {
                center: {lat: 54.709948, lng: 25.259293},
                markers: [{lat: 54.709948, lng: 25.259293}],
                places: [],
                currentPlace: null
            };
        },
    }
</script>

<style scoped>

</style>