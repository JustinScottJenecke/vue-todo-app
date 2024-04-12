import AppButton from "./components/AppButton.js";

const App = {

    components: {
        'app-button': AppButton
    },
    data() {
        return {}
    },
    methods: {},
    computed: {}
}

Vue.createApp(App).mount('#App');