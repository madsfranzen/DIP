# Opgave 2.1

Programmer nedenstående funktioner, hvor _array_ indeholder nogle tal:

- _max(array)_ : returnerer det største element i arrayet.
- _contains(array, element)_ : returnerer true hvis elementet findes i arrayet, ellers false
- _sum(array)_ : returnerer summen af elementerne i arrayet.

# Opgave 2.2

Modificer løsningen til opgave 1.3, så algoritmerne nu pakkes ind i funktioner med signaturerne:

- _bubbleSort(array)_
- _binarySearch(array, element)_

Gør desuden swap-delen af _bubbleSort_ til en lokal funktion _swap(i, j)_.

# Opgave 2.3

Svarende til Java’s _Comparator#compare(...)_ metode, skal der her laves nogle compare-funktioner, der tager to parametre, og returnerer -1, 0 eller 1 alt efter om den første parameter er mindre end, lig med eller større en den anden parameter.

Der skal laves følgende compare-funktioner:

- _compare(s1, s2)_ : Sammenligner de to tekststrenge leksikografisk.
- _compareLen(s1, s2)_ : Sammenligner de to tekststrenge på deres længde
- _compareIgnoreCase(s1, s2)_ : Sammenligner to tekststrenge leksikografisk uden at tage hensyn til store og små bogstaver

Modificer dernæst _bubbleSort_ funktionen fra opgave 2.2, så den nu får en compare-funktion som ekstra parameter. 
Sammenligningen i _bubbleSort_ funktionen skal nu ske med denne compare-funktion.

# Opgave 2.4

Lav en string variabel med en længere tekst.
Anvend dernæst et objekt som en map til at beregne antallet af de forskellige ord i teksten.
Brug metoden _split()_ til at opdele teksten i ord.
→ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split.

# Opgave 2.5

Lav et array med en række person objekter.
Hver person skal have et navn, en e-mail og et mobilnummer.
Afprøv CRUD på dette arrayet som vist på siden _CRUD på arrays_ i _arrays.pdf_.

# Opgave 2.6

Lav en string variabel der indeholder noget kode med nogle parenteser – (), {} og [].
Lav dernæst en funktion, der skal afgøre, om parenteserne i koden er balancerede.

Som datastruktur anvendes en stak (et array). Når der mødes en venstre parenteser i koden, skal den
sættes på stakken – og når der mødes en højre parentes, skal det kontrolleres, om den tilsvarende venstre parentes er øverst på stakken. 

Brug metoderne _push()_ og _pop()_.
→ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

# Opgave 2.7

Lav et array med tal.
Modificer dernæst _max()_ , _contains()_ og _sum()_ funktionerne fra opgave 2.1, så de bliver metoder på dette array.
