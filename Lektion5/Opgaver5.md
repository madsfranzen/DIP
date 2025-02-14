# Opgave 5.1

Skriv kode i vis.js, der indsætter et <label> element foran hvert <input> element i vis.html. De to labels skal have teksten "Tal: " hhv. "Tid: ". Når der klikkes på en label eller det tilhørende tekstfelt, skal der vises et tilfældigt tal hhv. det aktuelle tidspunkt i tekstfeltet.

---

# Opgave 5.2

Lav en HTML-side personer.html.

Siden skal have to tekstfelter til at indtaste navn og alder på en person

Siden skal også have en knap, tilføj.

Derudover skal den have et tomt div-tag med en id. Denne skal (senere) vise en tabel over indtastede personer, så giv den en passende id.

Lav en tilknyttet personer.js :

``` javascript
    <script src="personer.js" defer></script>
```

I personer.js skal man have en liste over indtastede personer, tom fra starten. 
Der skal tilføjes en click eventhandler til tilføj-knappen.

Når der klikkes på tilføj-knappen skal:

- Listen over indtastede personer opdateres. Brug objekter med navn og alder.

- Der skal genereres HTML, der danner en tabel med to kolonner, navn og alder, og en række for
hver person. Denne HTML skal sættes som div-taggets indhold (vha innerHTML).

---

# Opgave 5.3

Skriv kode i tabs.js, som viser <h1> elementet svarende til det <span> element, der klikkes på. Fra starten skal den første tab vises. Brug CSS display propertien til at vise og skjule indholdet af en tab.
 
