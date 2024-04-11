Vue.createApp({
    data() {
        return {
            text: "test",
            btnText: "Change Color",
           // btnClass: "none",
            btnActive: false
        }
    },
    methods: {
        btnClick() {
            this.btnActive = !this.btnActive
            // this.btnActive ? this.btnClass = "active" : this.btnClass = "none"
        }
    }
}).mount('#app');