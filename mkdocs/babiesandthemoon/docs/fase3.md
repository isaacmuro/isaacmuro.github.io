## Fulls de Càlcul: Altures i melics

Primer de tot, haurem de fer una petita introducció al full de càlcul, una eina ofimàtica molt útil. Farem una pràctica amb la vostra altura i l'altura del vostre mèlic. Poseu-vos per parelles, agafeu un metre, i mesureu-vos.  El principal problema a l'hora de mesurar són els possibles errors que podeu tenir a l'hora de mesurar.
Pregunta: 1-4-N: Com podem mesurar la nostra altura de la forma més exacte? Intenteu pensar un mètode per mesurar-la amb la màxima precisió?Penseu la forma més PRECISA per mesurar-vos. La importància de la mesura és la precisió. Heu de mesurar de cadascú dues mesures.
* La vostra altura
* L'altura del vostre mèlic desde el terra. 

Veure'm la relació que hi ha entre aquestes dues mesures, i un nombre molt important per les matemàtiques. 
(Treballar aquí les mitjanes, mitja, ...)

[Full de Càlcul Mostra](ods/Altures.ods)

Després utilitzarem totes les dates de naixement de l'institut per calcular quins dies de la setmana i quins mesos han nascut més alumnat. 

* [Taula de Freqüències](ods/TaulesFrequencies.ods)
* [Presentació sobre gràfics](ods/grafics2.odp)

## Fòrmules que necessitarem:

- = contar.si(A10:A20;2) → Cuenta el número de celdas del intervalo que va desde A10 hasta A20 que cumplen el criterio celda=2
- = suma(B2:B12) → Suma las celdas del intervalo desde B2 hasta B12.
- = díames(C3) → Devuelve el número de día de la semana de la fecha almacenada en la celda C3: 1 Domingo, 2 Sábado, 3 Lunes, ...
- = mes(C3) → Devuelve el mes de la fecha almacenada en la celda C3.
- = A2/$A$20 → Divide la celda A2 entre A20. En el caso de copiar la fórmula a otras celdas, el sistema actualizará automáticamente A2, pero NO A20.
- =entero(B4) → Devuelve el redondeo inferior de B4
- =abs(C3) → Devuelve el valor absoluto de C3
- =buscarv(E1;K11:L19;2) → Busca el valor de E1 en la tabla definida por el rango K11:L19 y, una vez encontrado, devuelve el valor de la segunda columna del rango, es decir, de la columna L.

**A5:** `Ara que ja has vist una taula de freqüències i gràfics, i segons la teva hipotesis, com creus que quedarà el teu gràfic de les fases de lluna?. dibuixa-l el gràfic i ensenya'l al professor.`

## Fases de la Lluna de 0 a 1

El nostre algorisme, el que utilitzarem per saber la fase de la Lluna ens dona els resultat amb un nombre entre 0 i 1. I a partir d'aquest nombre, hem de saber quina fase de la Lluna és. Hi han 8 fases de la Lluna. Aquestes fases les hem de repartir equitativament desde el 0 fins al 1. Como ho podem fer? Totes les marques han de ser iguals. 

**A6:** `Agafeu un full mil·limetrat, i marqueu el 0 i el 1. Penseu la forma de dividir aquesta línia en 8 parts. Podeu utilitzar el regle i la calculadora`


| Fases Luna              | Valor       | 
| ----------------------- |-------------|
| Luna Llena              | 0           |
| Luna gibosa Menguante   | 0,0625      |
| Cuarto Menguante        | 0,1875      |
| Luna Menguante          | 0,3125      |
| Luna Nueva              | 0,4375      |
| Luna Nueva Visible      | 0,5625      |
| Cuarto creciente        | 0,6875      |
| Gibosa Creciente        | 0,8125      |
| Luna Llena              | 0,9375      |


<iframe scrolling="no" title="Resultats Algorisme Fases Lluna" src="https://www.geogebra.org/material/iframe/id/dan7vfkr/width/639/height/275/border/888888/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false" width="639px" height="275px" style="border:0px;"> </iframe>

## Algorisme de la fase de la Lluna

Un cop ja sabem quin resultat ens donarà l'algorisme, anem a presentar-lo. Aquest algorisme, el que necessita primer de tot és una lluna plena coneguda de referéncia. En podem trobar [aquí](http://aa.usno.navy.mil/data/docs/MoonPhase.php). 

1. El que fem després és restar la data de referéncia de la data de la qual volem saber nosaltres la seva fase lunar.
2. dividim el resultat per 29,530588, que com ja sabeu é el que triga la lluna en donar una volta a la terra.
3. Per acabar, el que fem és quedar-nos amb la part decimal de la divisió. 

$$FaseLunar = |\frac{d-dataBase}{p} - \lfloor \frac{d-dataBase}{p}\rfloor|$$

El nombre que ens queda és la fase de la Lluna que ens interessa. 

[Algorisme Fases Lluna](ods/LunarCycle.ods)

**A7:** `Utilitzant alguna de les dades que teniu just a sota, trobeu les seves fases de la lluna, realitzeu les taules de freqüència, i els gràfics`

1. Dades de la classe
2. [Dades de l'institut](ods/MartaEstrada20172018.ods)
3. [Dades de tots els instituts de Granollers](ods/InstitutsGranollers20172018.ods)
4. [Dades de tota Catalunya](ods/Catalunya19852015.xls)

**A8:** `Escriviu una conclusió a partir de les vostres dades. S'ha complert la vostra hipotesis. Per què? Que us indiquen les dades i les gràfiques que heu realitzat? `