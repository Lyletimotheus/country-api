import { reactive } from "vue";

export const store = reactive({
    allCountries: [],
    selectedCountry: '',

    changeCountry(e) {
        this.selectedCountry = e.target.options[e.target.options.selectedIndex].text;
        console.log(e.target.options[e.target.options.selectedIndex].text)
    }
    
});