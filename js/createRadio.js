function createRadio (d, s) {
    if (!window.rel) {
        s = d.createElement("script");
        s.type = "text/javascript";
        s.async = true; s.id = "radio-de-embedded";
        s.src = "https://www.radio.es/inc/microsite/js/full.js";
        d.getElementsByTagName("head")[0].appendChild(s);
        window.rel = true;
    }
}(document);