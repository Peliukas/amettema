<template>
    <div class="columns">
        <div class="column is-full">
            <h3 class="is-3 title text-center">Would you like to know more?</h3>
            <h4 class="is-4 subtitle text-center">Ping us a message</h4>
            <div class="flex-center">
                <button class="button is-info" v-on:click="showContactFormModal()">
                    <i class="far fa-envelope"></i>
                    Get in touch
                </button>
            </div>
        </div>
        <modal-window name="contact-form-modal" width="400" height="520">
            <div class="form-wrapper">
                <div class="flex-space-between">
                    <h4 class="title is-4 is-primary">Contact form</h4>
                    <span v-on:click="closeContactFormModal()">
                        <i class="fas fa-window-close"></i>
                    </span>
                </div>
                <form>
                    <div class="field">
                        <label class="label">Your e-mail*</label>
                        <div class="control">
                            <input class="input" type="email" placeholder="Email" required/>
                        </div>
                        <label class="label">Your name*</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Name" required/>
                        </div>
                        <label class="label">Company (optional)</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Company"/>
                        </div>
                        <label class="label">Message*</label>
                        <div class="control">
                            <textarea class="textarea" type="text" placeholder="Message" rows="5"></textarea>
                        </div>
                    </div>
                    <button class="button is-primary float-right">
                        <i class="far fa-envelope"></i>
                        Submit
                    </button>
                </form>
            </div>
        </modal-window>
    </div>
</template>

<script>
    export default {
        name: "ContactSection",

        methods: {
            showContactFormModal() {
                this.$modal.show('contact-form-modal');
            },

            closeContactFormModal() {
                this.$modal.hide('contact-form-modal');
            }
        }
    }
</script>

<style scoped>
    .fa-envelope {
        margin-right: 5px !important;
    }

    .subtitle {
        color: #f5f5f5;
    }

    .form-wrapper {
        padding: 20px;
    }
</style>