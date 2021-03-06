/* my_cookieconsent
 * customization of cookieconsent for the presente website
 * me@renatobrazioli.it 2-MAY-2018 - create
 */

  window.addEventListener("load", function(){
  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#2c3e50",
        "text": "#ffffff"
      },
      "button": {
        "background": "#d96321",
        "text": "#ffffff"
      }
    },
    "theme": "edgeless",
    "content": {
      "message": "Questo sito utilizza cookie, anche di terze parti, per migliorare l'esperienza d'uso. Procedendo con la navigazione acconsenti all'uso dei cookie.",
      "dismiss": "OK!",
      "link": "Approfondisci",
      "href": "privacy.html"
    }
  })});
