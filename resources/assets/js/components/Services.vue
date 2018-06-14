<template>
    <section>
        <div class="columns small-margin-vertical">
            <div class="column is-one-third-desktop is-one-third-tablet is-full-mobile scene scene--card">
                <div class="card" :class="{'is-flipped': this.techContainerActive}"
                     v-on:click="techContainerActive = !techContainerActive">
                    <div class="tech-container card__face card__face--front flex-center">
                        <h3 class="service-block-title">Services</h3>
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
            <div class="column is-one-third-desktop is-one-third-tablet is-full-mobile scene scene--card">
                <div class="card" :class="{'is-flipped': this.productContainerActive}">
                    <div class="products-container card__face card__face--front flex-center"
                         v-on:click="productContainerActive = !productContainerActive">
                        <h3 class="service-block-title">Metal products</h3>
                    </div>
                    <div class="card__face--back card__face flex-center">
                        <div>
                            <ul v-on:click="productContainerActive = !productContainerActive">
                                <li>заборов</li>
                                <li>оград</li>
                                <li>ворот</li>
                                <li>лестничных ограждений</li>
                                <li>лестниц различной конфигурации</li>
                                <li>козырьков</li>
                                <li>решеток</li>
                                <li>калиток</li>
                            </ul>
                            <button class="button is-info tiny-margin-vertical"
                                    v-on:click="showProductSliderModal()">
                                <i class="fas fa-info tiny-margin-horizontal"></i>
                                More details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-one-third-desktop is-one-third-tablet is-full-mobile scene scene--card">
                <div class="card" :class="{'is-flipped': this.glassContainerActive}"
                     v-on:click="glassContainerActive= !glassContainerActive">
                    <div class="glass-container card__face card__face--front flex-center">
                        <h3 class="service-block-title">Glass products</h3>
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
        <modal-window name="slider-modal" width="700" height="500">
            <div class="container">
                <slick ref="slick" :options="slickOptions">
                    <div class="slick-slide">
                        <img src="/images/products/balcony_1.jpg" class="small-margin-vertical slick-slide-img" alt="">
                        <p>
                            Пример балконного ограждения с применением изделий 304S2; 304S4.90; 304S4. Секло EuroFloat
                            толщиной 8мм. Высота стекла 680мм. Толщина стекла 8 мм. Края стекла отполированы. Расстояние
                            между столбами max. 1250 мм.
                        </p>
                        <strong>
                            Цена включая монтаж , 90 Eur./м.
                        </strong>
                    </div>
                    <div class="slick-slide">
                        <img src="/images/products/balcony_2.jpg" class="small-margin-vertical slick-slide-img" alt="">
                        <p>
                            Аналогичный вариант несущих столбиков , но с креплением к вертикальной поверхности
                            представлен на фото ниже. Количество заполняющих трубок, по пожеланию заказчика.
                        </p>
                        <strong>
                            Цена договорная
                        </strong>
                    </div>
                    <div class="slick-slide">
                        <div class="columns">
                            <div class="column flex-center">
                                <img src="/images/products/pole_1.png" class="small-margin-vertical" alt="">
                            </div>
                            <div class="column flex-center">
                                <div>
                                    <p>
                                        Столбик D42.4x2мм для перил из нержавеющей стали AISI304 , артикул 304S2 с 2- мя
                                        держателями стекла. Стандартная высота с поручнем 970мм. Поверхность
                                        шлифованная.
                                    </p>
                                    <strong>Цена 37 Eur</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slick-slide">
                        <div class="columns">
                            <div class="column flex-center">
                                <img src="/images/products/pole_2.png" class="small-margin-vertical" alt="">
                            </div>
                            <div class="column flex-center">
                                <div>
                                    <p>
                                        Столбик D42.4x2мм для перил из нержавеющей стали AISI304. артикул 304S4 с 4-мя
                                        держателями стекла. Стандартная высота с поручнем 970мм. Поверхность
                                        шлифованная.
                                    </p>
                                    <strong>
                                        Цена 48 Eur.
                                    </strong>
                                    <i> Возможны варианты расположения держателей стекла по индивидуальному заказу.</i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slick-slide">
                        <div class="columns">
                            <div class="column flex-center">
                                <img src="/images/products/pole_3.jpg" class="small-margin-vertical" alt="">
                            </div>
                            <div class="column flex-center">
                                <div>
                                    <p>
                                        Столбик со сварным фланцем D42.4x2мм для перил из нержавеющей стали AISI 304,
                                        артикул 304Z4, с 4 –мя держателями заполняющих трубок D12. Cтандартная высота с
                                        поручнем 970мм. Поверхность шлифованная.
                                    </p>
                                    <strong>
                                        Цена 35 Eur.
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slick-slide">
                        <img src="/images/products/rails_1.jpg" class="small-margin-vertical slick-slide-img" alt="">
                        <p>
                            Пример полностью сварных перил, для людей с ограниченными возможностями.
                        </p>
                        <strong>
                            Цена с монтажом 95 Eur./м.
                        </strong>
                    </div>
                </slick>
            </div>
        </modal-window>
    </section>
</template>

<script>
    import Slick from 'vue-slick';

    export default {
        name: "Services",
        components: {Slick},
        data: function () {
            return {
                techContainerActive: false,
                productContainerActive: false,
                glassContainerActive: false,
                slickOptions: {
                    slidesToShow: 1,
                    arrows: true,
                    dots: true
                },
            }
        },
        methods: {
            showProductSliderModal() {
                this.$modal.show('slider-modal');
            },
            next() {
                this.$refs.slick.next();
            },

            prev() {
                this.$refs.slick.prev();
            },

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
        font-weight: bold;
        text-shadow: 1px 1px 5px darkblue;
    }

    .card__face--back {
        transform: rotateY(180deg);
    }

    .slick-slide-img {
        width: 100%;
        max-height: 380px;
    }

    /deep/ .slick-dots {
        bottom: 120px;
    }

    /deep/ .slick-arrow:before {
        color: #1a4255;
    }

    .slick-slide {
        padding: 10px;
    }

    /deep/ .slick-prev {
        left: 25px !important;
        z-index: 999 !important;
    }

    /deep/ .slick-next {
        right: 25px !important;
        z-index: 999 !important;
    }


</style>