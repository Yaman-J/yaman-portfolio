import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import i18next from 'i18next';
import I18NextVue from 'i18next-vue';
import locales from './i18n'
import "./assets/main.css"

import { reactive } from 'vue'

const language = reactive({
	lang: 'en',
	changeLangeuage(){
		if (lang === 'en') {
			lang = 'ar'
		} else {
			lang = 'en'
		}
	}
})

i18next.init({
  lng: 'en',
  resources: {
    en: { translation: locales.en },
		ar: { translation: locales.ar },
  },
});

const app = createApp(App)

app.use(I18NextVue, { i18next });

app.use(router)

app.mount("#app")
