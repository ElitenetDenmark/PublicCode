Responsive product selector based on javascript/jquery 1.7.2.
Also called filtered search. Option boxes change based on previous selection.
Code reads json files or could be used with API webservices.

See live at https://docs.elitenet.dk/javascriptproductselector/


HOW TO USE

The script reads jsonfiles with key/value.
1. The first select read from brands.json in this code. Option boxes are populated with a name and a key.
2. When the user selects and option, the script loads the key as a json-name ie. AudiA2.json and populate the next select with the new options.
3. The second select row populates with AudiA2.json and key/val. Those last ones have an url attached, with is the final redirect as the selection ends.

RULES

1. The key/val follows the json file names.
2. All option boxes are made async, so it doesnt un-disable the select until its loaded.
3. Last select option redirects to ie. a product list.
4. Don't use special characters (system reserved) in key/val as it can break the AJAX.

