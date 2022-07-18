import { reactive } from "vue";

export const store = reactive({
    allCountries: [],
    selectedCountry: '',

    changeCountry(e) {
        this.selectedCountry = e.target.options[e.target.options.selectedIndex].text;
        // this.selectedCountry = e.target.
        // console.log(this.allCountries, e.target.options[e.target.options.selectedIndex])
        // console.log(e.target.options[e.target.options.selectedIndex])
        console.log(this.selectedCountry)
    }, 
    
});