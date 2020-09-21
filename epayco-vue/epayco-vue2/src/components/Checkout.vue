<template>
    <div>
        <button class="button is-primary is-rounded"
                type="button"
                @click="openCheckout"
        >
            <slot>Pagar</slot>
        </button>
        <form id="ePaycoForm"></form>
    </div>
</template>

<script>
    export default {
        name: 'Checkout',
        props: {
            publicKey: {
                type: String,
                default: '491d6a0b6e992cf924edd8d3d088aff1',
            },
            test: {
                type: Boolean,
                default: true,
            },
            name: {
                type: String,
                default: 'Test payment',
            },
            description: {
                type: String,
                default: 'Test payment',
            },
            invoice: {
                type: [
                    String,
                    Number,
                ],
                default: null,
            },
            currency: {
                type: String,
                default: 'COP',
            },
            amount: {
                type: Number,
                default: 10000,
            },
            taxBase: {
                type: Number,
                default: 0,
            },
            tax: {
                type: Number,
                default: 0,
            },
            country: {
                type: String,
                default: 'CO',
            },
            lang: {
                type: String,
                default: 'es',
            },
            external: {
                type: Boolean,
                default: false,
            },
            extra1: {
                type: String,
                default: null,
            },
            extra2: {
                type: String,
                default: null,
            },
            extra3: {
                type: String,
                default: null,
            },
            confirmation: {
                type: String,
                default: null,
            },
            response: {
                type: String,
                default: null,
            },
            billingName: {
                type: String,
                default: null,
            },
            billingAddress: {
                type: String,
                default: null,
            },
            billingDocType: {
                type: String,
                default: null,
            },
            billingDocNumber: {
                type: String,
                default: null,
            },
            billingMobilePhone: {
                type: String,
                default: null,
            },
        },
        data() {
            return {
                handler: null,
                handlerData: null,
            }
        },
        methods: {
            openCheckout() {
                this.handler.open({
                    name: this.name,
                    description: this.description,
                    invoice: this.invoice,
                    currency: this.currency,
                    amount: this.amount,
                    tax_base: this.taxBase,
                    tax: this.tax,
                    country: this.country,
                    lang: this.lang,
                    external: this.external,
                    extra1: this.extra1,
                    extra2: this.extra2,
                    extra3: this.extra3,
                    confirmation: this.confirmation,
                    response: this.response,
                    name_billing: this.billingName,
                    address_billing: this.billingAddress,
                    type_doc_billing: this.billingDocType,
                    number_doc_billing: this.billingDocNumber,
                    mobilephone_billing: this.billingMobilePhone,
                })
            },
        },
        mounted() {
            this.handler = ePayco.checkout.configure({
                key: this.publicKey,
                test: this.test,
            });

            let ePaycoForm = document.getElementById('ePaycoForm')
            let ePaycoScript = document.createElement('script')
            ePaycoScript.setAttribute('src', 'https://checkout.epayco.co/checkout.js')
            ePaycoScript.setAttribute('class','epayco-button')
            ePaycoScript.setAttribute('data-epayco-key','491d6a0b6e992cf924edd8d3d088aff1')
            ePaycoScript.setAttribute('data-epayco-amount',this.amount)
            ePaycoScript.setAttribute('data-epayco-name',this.name)
            ePaycoScript.setAttribute('data-epayco-description',this.description)
            ePaycoScript.setAttribute('data-epayco-invoice','prueba_json_f5_7')
            ePaycoScript.setAttribute('data-epayco-currency','cop')
            ePaycoScript.setAttribute('data-epayco-country','co')
            ePaycoScript.setAttribute('data-epayco-test','true')
            ePaycoScript.setAttribute('data-epayco-external',this.external)
            ePaycoScript.setAttribute('data-epayco-response','https://ejemplo.com/respuesta.html')
            ePaycoScript.setAttribute('data-epayco-confirmation','https://ejemplo.com/confirmacion')
            ePaycoForm.appendChild(ePaycoScript);
        },
    }
</script>
