const AppButton = {
    template: `
        <button 
            class="disabled:cursor-not-allowed px-2 py-1 m-1 "
            :class="{ 
                'bg-gray-200 text-gray-900' : btntype === 'primary',
                'bg-gray-900 text-zinc-200' : btntype === 'negative'
            }" 
            :disabled="processing" @click="btnClick"
        >
            <slot />
        </button>
    `,
    props: {
        btntype: {
            type: String,
            default: "primary"
        }
    },
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