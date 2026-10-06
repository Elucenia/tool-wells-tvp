<!-- ELUCENIA technical documentation · wells-tvp · de · no clinical/professional/rights approval -->

# Wells-Score für TVT

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/wells-tvp)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Aktiver Krebs (Behandlung in den letzten 6 Monaten oder palliativ)

`cancer`

### Lähmung, Parese oder kürzliche Gipsimmobilisation der unteren Extremität

`paralisia`

### Für ≥ 3 Tage bettlägerig oder größere Operation in den letzten 12 Wochen mit Allgemein- oder Regionalanästhesie

`acamado`

### Lokalisierter Druckschmerz entlang des tiefen Venensystems

`dor_trajeto`

### Schwellung der gesamten unteren Extremität

`edema_total`

### Wadenumfang ≥ 3 cm größer als auf der Gegenseite (10 cm unterhalb der Tuberositas tibiae)

`panturrilha`

### Eindrückbares Ödem nur am symptomatischen Bein

`cacifo`

### Oberflächliche Kollateralvenen (keine Varizen)

`colaterais`

### Dokumentierte frühere TVT

`tvp_prev`

### Alternativdiagnose ebenso wahrscheinlich oder wahrscheinlicher als eine TVT

`alternativo`

## Fassung der Methode

Wells DVT 2003, Tabelle 1: 9 Faktoren + alternative Diagnose −2; 2 Stufen ≥2 / \<2; das 3-Stufen-Modell wird separat angezeigt, seine Ausgabe ist noch nicht geprüft

## Dokumentierte Formel

Ein Punkt je Merkmal (Krebs, Lähmung/Gipsverband, Bettruhe oder Operation, Druckschmerz entlang der Venen, Schwellung des gesamten Beins, Zunahme des Wadenumfangs ≥ 3 cm, einseitiges eindrückbares Ödem, Kollateralvenen, frühere TVT) und −2, wenn eine alternative Diagnose mindestens ebenso wahrscheinlich ist.

2 Stufen (Wells 2003): ≥ 2 = TVT wahrscheinlich; ≤ 1 = unwahrscheinlich. 3 Stufen: ≤ 0 niedrig; 1–2 mäßig; ≥ 3 hoch.

## Grenzen und Population

Die Wells-Strategie 2003 wurde bei ambulanten Patienten mit Verdacht auf eine TVT der unteren Extremität untersucht. Der protokollgemäße Verzicht auf Ultraschall erforderte gemeinsam eine klinisch unwahrscheinliche TVT und negative D-Dimere. Der Score allein bestätigt oder verneint keine TVT; D-Dimer-Assay und Eignungskriterien müssen zum verwendeten Protokoll passen. In Tabelle 1 von Wells 2003 beträgt der Unterschied des Wadenumfangs mindestens 3 cm, gemessen 10 cm unterhalb der Tuberositas tibiae; eine größere Operation in den letzten 12 Wochen erfordert Allgemein- oder Regionalanästhesie. Die Tabelle definiert nur das 2-Stufen-Modell (≥2 wahrscheinlich; \<2 unwahrscheinlich); die Ausgabe des hier angezeigten 3-Stufen-Modells bleibt ungeprüft.

## Referenzen

- [Wells PS et al. Evaluation of D-dimer in the diagnosis of suspected deep-vein thrombosis. N Engl J Med, 2003.](https://doi.org/10.1056/NEJMoa023153)

- [Wells PS et al. Does this patient have deep vein thrombosis? JAMA, 2006.](https://doi.org/10.1001/jama.295.2.199)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Dokumentierte Ergebnisse

Die folgenden Angaben bewahren die Ausgaben der Methode für synthetische Beispiele. Sie stellen keine unabhängige klinische Validierung dar.

### 1

TVT unwahrscheinlich; niedrige Wahrscheinlichkeit (Prävalenz ~5%)

D-Dimer bestimmen: bei negativem Ergebnis TVT ausgeschlossen; bei positivem Ergebnis Doppler-Ultraschall.


### 2

TVT unwahrscheinlich; niedrige Wahrscheinlichkeit (Prävalenz ~5%)

D-Dimer bestimmen: bei negativem Ergebnis TVT ausgeschlossen; bei positivem Ergebnis Doppler-Ultraschall.


### 3

TVT unwahrscheinlich; moderate Wahrscheinlichkeit im 3-Stufen-Modell (~17%)

D-Dimer bestimmen: bei negativem Ergebnis TVT ausgeschlossen; bei positivem Ergebnis Doppler-Ultraschall.


### 4

TVT wahrscheinlich (≥ 2); moderate Wahrscheinlichkeit im 3-Stufen-Modell (~17%)

Doppler-Ultraschall; bei negativem Befund D-Dimer oder den Ultraschall in 1 Woche wiederholen.


### 5

TVT wahrscheinlich; hohe Wahrscheinlichkeit (~53%)

Doppler-Ultraschall; bei negativem Befund den Ultraschall wiederholen oder einen Ultraschall der gesamten Extremität durchführen.

