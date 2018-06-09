<template>
    <section>
        <div class="container">
            <h2 class="title text-center">Services</h2>
        </div>
        <div class="columns small-margin-vertical">
            <div class="column scene scene--card">
                <div class="card" :class="{'is-flipped': this.techContainerActive}"
                     v-on:click="techContainerActive = !techContainerActive">
                    <div class="tech-container card__face card__face--front flex-center">
                        <h3 class="service-block-title">Tech</h3>
                    </div>
                    <div class="card__face--back card__face flex-center">
                        <ul>
                            <li> сварка металлов по технологии TIG</li>
                            <li> шлифовка</li>
                            <li> сверление</li>
                            <li> лазерный раскрой металлического листа до 20 мм</li>
                            <li> антикоррозийная защита металла</li>
                            <li> сборочные работы</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="column scene scene--card">
                <div class="card" :class="{'is-flipped': this.productContainerActive}"
                     v-on:click="productContainerActive = !productContainerActive">
                    <div class="products-container card__face card__face--front flex-center">
                        <h3 class="service-block-title">Products</h3>
                    </div>
                    <div class="card__face--back card__face flex-center">
                        <ul>
                            <li>заборов</li>
                            <li>оград</li>
                            <li>ворот</li>
                            <li>лестничных ограждений</li>
                            <li>лестниц различной конфигурации</li>
                            <li>козырьков</li>
                            <li>решеток</li>
                            <li>калиток</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="column scene scene--card">
                <div class="card" :class="{'is-flipped': this.glassContainerActive}"
                     v-on:click="glassContainerActive= !glassContainerActive">
                    <div class="glass-container card__face card__face--front flex-center">
                        <h3 class="service-block-title">Glass</h3>
                    </div>
                    <div class="card__face--back card__face flex-center">
                        <ul>
                            <li>Каленое прозрачное стекло</li>
                            <li>Каленое матовое и тонированное стекло (бронза, серый)</li>
                            <li>Tриплекс</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Services",
        data: function () {
            return {
                techContainerActive: false,
                productContainerActive: false,
                glassContainerActive: false
            }
        },
        methods: {
            // flipCard(cardName){
            //     switch (cardName){
            //         case 'tech':
            //             techContainerActive = !techContainerActive;
            //             break;
            //         case 'products':
            //             productContainerActive = !productContainerActive;
            //             break;
            //         case 'glass':
            //             glassContainerActive = !glassContainerActive;
            //             break;
            //     }
            // }
        }
    }
</script>

<style scoped>
    .tech-container, .glass-container, .products-container {
        position: relative;
        background-size: cover !important;
    }

    .tech-container {
        background: url("/images/tech.jpg");
    }

    .products-container {
        background: url("/images/fence.jpg");
    }

    .glass-container {
        background: url("/images/glass.jpg");
    }

    /*.services-grid{*/
    /*display: grid;*/
    /*grid-template-columns: 2fr 2fr;*/
    /*grid-template-rows: 1fr 1fr 1fr;*/
    /*}*/

    ul {
        list-style: none;
        font-size: 0.8em;
        line-height: 1.5em;
        text-align: center;
    }

    ul li {
        color: darkblue;
    }

    /*Card flipper*/

    .scene {
        width: 200px;
        height: 260px;
        margin: 40px 0;
        perspective: 600px;
    }

    .card {
        width: 100%;
        height: 100%;
        transition: transform 1s;
        transform-style: preserve-3d;
        cursor: pointer;
        position: relative;
    }

    .card.is-flipped {
        transform: rotateY(180deg);
    }

    .card__face {
        position: absolute;
        width: 100%;
        height: 100%;
        color: white;
        text-align: center;
        font-weight: bold;
        backface-visibility: hidden;
    }

    .service-block-title {
        font-size: 2em;
    }

    .card__face--back {
        transform: rotateY(180deg);
    }


</style>