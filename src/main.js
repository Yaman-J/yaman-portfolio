import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import I18NextVue from 'i18next-vue';
import i18next from './i18n';
import {setHtmlLang} from './i18n';
import "./assets/main.css";

const app = createApp(App)

app.use(I18NextVue, { i18next });
app.use(router)
app.mount("#app")
setHtmlLang()
