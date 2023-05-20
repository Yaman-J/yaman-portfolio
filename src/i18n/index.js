import { reactive } from 'vue';
import store from 'store2'
import i18next from 'i18next';
import en from './english';
import ar from './arabic';

const defaultLangKey = 'LANGUAGE';
const defaultLangVal = 'en';

if (!store.has(defaultLangKey)) {
	store.set(defaultLangKey, defaultLangVal);
}

export const setHtmlLang = (current) => {
	if (!current) {
		current = store.get(defaultLangKey);
	}
	
	const htmlTag = document.getElementsByTagName('html')[0];
	const direction = current === 'en' ? 'ltr' : 'rtl';

	htmlTag.setAttribute('dir', direction);
	htmlTag.setAttribute('lang', this.current);
}

export const language = reactive({
  current: store.get(defaultLangKey),
	switch () {
		if (this.current === 'en') {
			this.current = 'ar';
		} else {
			this.current = 'en';
		}
		
		store.set(defaultLangKey, this.current);
		i18next.changeLanguage(this.current);
		setHtmlLang(this.current);
	}
})

i18next.init({
  lng: language.current,
  resources: {
    en: { translation: en },
		ar: { translation: ar },
  },
});

export default i18next