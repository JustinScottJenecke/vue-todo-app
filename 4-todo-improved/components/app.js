// import { Assignments } from "./components/Assignments.js";
import Assignments from "./Assignments.js";

const App = {
    components: { "Assignments": Assignments },
    template: `
        <Assignments/>
    `
}

Vue.createApp(App).mount('#app');