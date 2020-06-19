import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import { translations } from "res";

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
    "en": {
        "find\nyour\nartists": "find\nyour\nartists",
        "Get Started": "Get Started",
        "Login with Spotify": "Login with Spotify",
        "Search Spotify artists": "Search Spotify artists",
        "Hello,": "Hello,",
        "Welcome to Spotifyndr": "Welcome to Spotifyndr",
        "Simply start by typing your desired artist in the search bar": "Simply start by typing your desired artist in the search bar",
        "Artists": "Artists",
        "Showing results for ": "Showing results for ",
        "No Results Found": "No Results Found",
        "Sorry we couldn't find results for ": "Sorry we couldn't find results for ",
        "Albums": "Albums",
        "No Albums Found": "No Albums Found",
        "Sorry we couldn't find albums for ": "Sorry we couldn't find albums for ",
        "Something Went Wrong": "Something Went Wrong",
        "Please try again later": "Please try again later"
    }
};
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

export default i18n;
