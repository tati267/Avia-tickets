import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

//init select
const select = document.querySelectorAll('select');
M.FormSelect.init(select);

export function getSelectInstance(elem){
    return M.FormSelect.getInstance(elem)
};

//init autocomplete
const autocomplete = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(autocomplete,{ 
    data: {
          "Apple": null,
          "Microsoft": null,
          "Google": 'https://placehold.it/250x250'
        },
      });

export function getAutocompleteInstance(elem){
    return M.Autocomplete.getInstance(elem)
};

//init date pickers
const datepickers = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepickers,{
    showClearBtn: true
});

export function getDatePickersInstance(elem){
    return M.Datepickers.getInstance(elem)
};