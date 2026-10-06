<!-- ELUCENIA technical documentation · wells-tvp · it · no clinical/professional/rights approval -->

# Punteggio di Wells per TVP

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/wells-tvp)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Cancro attivo (trattamento negli ultimi 6 mesi o palliativo)

`cancer`

### Paralisi, paresi o recente immobilizzazione in gesso dell’arto inferiore

`paralisia`

### Allettamento per ≥ 3 giorni o intervento chirurgico maggiore nelle ultime 12 settimane con anestesia generale o regionale

`acamado`

### Dolorabilità localizzata lungo il sistema venoso profondo

`dor_trajeto`

### Edema dell’intero arto inferiore

`edema_total`

### Circonferenza del polpaccio ≥ 3 cm maggiore rispetto al lato controlaterale (10 cm sotto la tuberosità tibiale)

`panturrilha`

### Edema improntabile limitato alla gamba sintomatica

`cacifo`

### Vene superficiali collaterali (non varicose)

`colaterais`

### TVP pregressa documentata

`tvp_prev`

### Diagnosi alternativa altrettanto o più probabile della TVP

`alternativo`

## Edizione del metodo

Wells DVT 2003, Tabella 1: 9 fattori + diagnosi alternativa −2; 2 livelli ≥2 / \<2; il modello a 3 livelli è mostrato separatamente e la sua edizione non è ancora stata verificata

## Formula documentata

Un punto per ciascun elemento (cancro, paralisi/gesso, allettamento o chirurgia, dolorabilità lungo il decorso venoso, edema dell’intera gamba, aumento della circonferenza del polpaccio ≥ 3 cm, edema improntabile unilaterale, vene collaterali, TVP pregressa) e −2 se una diagnosi alternativa è altrettanto o più probabile.

2 livelli (Wells 2003): ≥ 2 = TVP probabile; ≤ 1 = improbabile. 3 livelli: ≤ 0 bassa; 1–2 moderata; ≥ 3 alta.

## Limiti e popolazione

La strategia Wells 2003 è stata studiata in pazienti ambulatoriali con sospetta TVP dell’arto inferiore. La decisione prevista dal protocollo di omettere l’ecografia richiedeva insieme una probabilità clinica improbabile e un D-dimero negativo. Il punteggio da solo non conferma né esclude la TVP; il dosaggio del D-dimero e i criteri di ammissibilità devono corrispondere al protocollo utilizzato. Nella Tabella 1 di Wells 2003, la differenza di circonferenza del polpaccio è di almeno 3 cm, misurata 10 cm sotto la tuberosità tibiale; un intervento chirurgico maggiore nelle ultime 12 settimane richiede anestesia generale o regionale. La tabella definisce solo il modello a 2 livelli (≥2 probabile; \<2 improbabile); l’edizione del modello a 3 livelli mostrato qui rimane non verificata.

## Riferimenti

- [Wells PS et al. Evaluation of D-dimer in the diagnosis of suspected deep-vein thrombosis. N Engl J Med, 2003.](https://doi.org/10.1056/NEJMoa023153)

- [Wells PS et al. Does this patient have deep vein thrombosis? JAMA, 2006.](https://doi.org/10.1001/jama.295.2.199)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Risultati documentati

Le informazioni seguenti conservano gli output del metodo per esempi sintetici. Non costituiscono una validazione clinica indipendente.

### 1

TVP improbabile; probabilità bassa (prevalenza ~5%)

Dosare il D-dimero: se negativo, TVP esclusa; se positivo, ecografia Doppler.


### 2

TVP improbabile; probabilità bassa (prevalenza ~5%)

Dosare il D-dimero: se negativo, TVP esclusa; se positivo, ecografia Doppler.


### 3

TVP improbabile; probabilità moderata nel modello a 3 livelli (~17%)

Dosare il D-dimero: se negativo, TVP esclusa; se positivo, ecografia Doppler.


### 4

TVP probabile (≥ 2); probabilità moderata nel modello a 3 livelli (~17%)

Ecografia Doppler; se negativa, D-dimero o ripetere l’ecografia in 1 settimana.


### 5

TVP probabile; probabilità alta (~53%)

Ecografia Doppler; se negativa, ripetere l’ecografia o eseguire un’ecografia dell’intero arto.

