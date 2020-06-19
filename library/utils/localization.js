import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import { translations } from "res";

// Set the key-value pairs for the different languages you want to support.
i18n.translations = translations;
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

export default i18n;
