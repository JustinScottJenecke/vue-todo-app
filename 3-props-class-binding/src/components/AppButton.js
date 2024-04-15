const AppButton = {
    template: `
        <button 
            class="px-2 py-1 m-1 "
            :class="{ 
                'bg-gray-200 text-gray-900' : btntype === 'primary',
                'bg-gray-900 text-zinc-200' : btntype === 'negative',
                'disabled:cursor-not-allowed': processing
            }" 
            :disabled="processing"
        >
            <slot />
        </button>
    `,
    props: {
        btntype: {
            type: String,
            default: "primary"
        },
        processing: {
            type: Boolean,
            default: false
        }
    }
}

export default AppButton