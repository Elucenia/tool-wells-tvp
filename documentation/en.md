<!-- ELUCENIA technical documentation · wells-tvp · en · no clinical/professional/rights approval -->

# Wells score for DVT

[conditions, sources and permissions](https://elucenia.org/en/tools/wells-tvp)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Active cancer (treatment in the last 6 months or palliative treatment)

`cancer`

### Paralysis, paresis or recent cast immobilization of the lower limb

`paralisia`

### Bedridden for ≥ 3 days or major surgery within the past 12 weeks requiring general or regional anesthesia

`acamado`

### Localized tenderness along the deep venous system

`dor_trajeto`

### Swelling of the entire lower limb

`edema_total`

### Calf circumference ≥ 3 cm greater than the opposite side (10 cm below the tibial tuberosity)

`panturrilha`

### Pitting edema confined to the symptomatic leg

`cacifo`

### Collateral superficial veins (nonvaricose)

`colaterais`

### Documented previous DVT

`tvp_prev`

### Alternative diagnosis as likely as or more likely than DVT

`alternativo`

## Method edition

Wells DVT 2003, Table 1: 9 factors + alternative diagnosis −2; 2 levels ≥2 / \<2; the 3-level model is shown separately and its edition has not yet been checked

## Documented formula

One point for each item (cancer, paralysis/cast, bed rest or surgery, tenderness along the venous system, entire leg swelling, calf swelling ≥ 3 cm, unilateral pitting edema, collateral veins, previous DVT) and −2 if an alternative diagnosis is at least as likely.

2 levels (Wells 2003): ≥ 2 = DVT likely; ≤ 1 = unlikely. 3 levels: ≤ 0 low; 1–2 moderate; ≥ 3 high.

## Limits and population

The Wells 2003 strategy was studied in outpatients with suspected lower-limb DVT. The protocol decision to omit ultrasound required both unlikely clinical probability and a negative D-dimer. The score alone neither confirms nor excludes DVT, and the D-dimer assay and eligibility criteria must match the protocol used. In Wells 2003 Table 1, calf circumference differs by at least 3 cm, measured 10 cm below the tibial tuberosity; major surgery within the past 12 weeks requires general or regional anesthesia. The table defines only the 2-level model (≥2 likely; \<2 unlikely); the edition of the 3-level model displayed here remains unchecked.

## References

- [Wells PS et al. Evaluation of D-dimer in the diagnosis of suspected deep-vein thrombosis. N Engl J Med, 2003.](https://doi.org/10.1056/NEJMoa023153)

- [Wells PS et al. Does this patient have deep vein thrombosis? JAMA, 2006.](https://doi.org/10.1001/jama.295.2.199)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Documented results

The information below preserves the method outputs for synthetic examples. It does not constitute independent clinical validation.

### 1

DVT unlikely; low probability (prevalence ~5%)

Measure D-dimer: if negative, DVT excluded; if positive, Doppler ultrasound.


### 2

DVT unlikely; low probability (prevalence ~5%)

Measure D-dimer: if negative, DVT excluded; if positive, Doppler ultrasound.


### 3

DVT unlikely; moderate probability in the 3-level model (~17%)

Measure D-dimer: if negative, DVT excluded; if positive, Doppler ultrasound.


### 4

DVT likely (≥ 2); moderate probability in the 3-level model (~17%)

Doppler ultrasound; if negative, D-dimer or repeat the ultrasound in 1 week.


### 5

DVT likely; high probability (~53%)

Doppler ultrasound; if negative, repeat the ultrasound or perform ultrasound of the entire limb.

