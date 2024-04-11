const AppButton = {
    template: `
        <button class="disabled:cursor-not-allowed" :disabled="processing" @click="btnClick">
            <slot />
        </button>
        `,
    data() {
        return {
            processing: false
        }
    },
    methods: {
        btnClick() {
            this.processing = !this.processing
        }
    }
}

export default AppButton