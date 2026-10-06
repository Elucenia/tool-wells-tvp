<!-- ELUCENIA technical documentation · wells-tvp · es · no clinical/professional/rights approval -->

# Puntuación de Wells para TVP

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/wells-tvp)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Cáncer activo (tratamiento en los últimos 6 meses o paliativo)

`cancer`

### Parálisis, paresia o inmovilización reciente con yeso del miembro inferior

`paralisia`

### Encamado durante ≥ 3 días o cirugía mayor en las últimas 12 semanas que requirió anestesia general o regional

`acamado`

### Dolor localizado en el trayecto del sistema venoso profundo

`dor_trajeto`

### Edema de todo el miembro inferior

`edema_total`

### Perímetro de la pantorrilla ≥ 3 cm mayor que el contralateral (10 cm por debajo de la tuberosidad tibial)

`panturrilha`

### Edema con fóvea limitado a la pierna sintomática

`cacifo`

### Venas superficiales colaterales (no varicosas)

`colaterais`

### TVP previa documentada

`tvp_prev`

### Diagnóstico alternativo tan probable como la TVP o más probable

`alternativo`

## Edición del método

Wells DVT 2003, Tabla 1: 9 factores + diagnóstico alternativo −2; 2 niveles ≥2 / \<2; el modelo de 3 niveles se muestra por separado y su edición aún no se ha comprobado

## Fórmula documentada

Un punto por cada elemento (cáncer, parálisis/yeso, encamamiento o cirugía, dolor en el trayecto venoso, edema de toda la extremidad, aumento del perímetro de la pantorrilla ≥ 3 cm, edema con fóvea unilateral, venas colaterales, TVP previa) y −2 si un diagnóstico alternativo es tan probable o más.

2 niveles (Wells 2003): ≥ 2 = TVP probable; ≤ 1 = improbable. 3 niveles: ≤ 0 baja; 1–2 moderada; ≥ 3 alta.

## Límites y población

La estrategia Wells 2003 se estudió en pacientes ambulatorios con sospecha de TVP de miembro inferior. La decisión protocolaria de prescindir de ecografía exigía conjuntamente una probabilidad clínica improbable y un dímero D negativo. La puntuación aislada no confirma ni excluye TVP; el ensayo de dímero D y los criterios de elegibilidad deben corresponder al protocolo utilizado. En la Tabla 1 de Wells 2003, la diferencia del perímetro de la pantorrilla es de al menos 3 cm, medida 10 cm por debajo de la tuberosidad tibial; la cirugía mayor en las últimas 12 semanas requiere anestesia general o regional. La tabla define solo el modelo de 2 niveles (≥2 probable; \<2 improbable); la edición del modelo de 3 niveles mostrado aquí sigue sin comprobarse.

## Referencias

- [Wells PS et al. Evaluation of D-dimer in the diagnosis of suspected deep-vein thrombosis. N Engl J Med, 2003.](https://doi.org/10.1056/NEJMoa023153)

- [Wells PS et al. Does this patient have deep vein thrombosis? JAMA, 2006.](https://doi.org/10.1001/jama.295.2.199)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

La información siguiente conserva las salidas del método para ejemplos sintéticos. No constituye una validación clínica independiente.

### 1

TVP improbable; probabilidad baja (prevalencia ~5%)

Dosar D-dímero: si es negativo, TVP excluida; si es positivo, ultrasonido con Doppler.


### 2

TVP improbable; probabilidad baja (prevalencia ~5%)

Dosar D-dímero: si es negativo, TVP excluida; si es positivo, ultrasonido con Doppler.


### 3

TVP poco probable; probabilidad moderada en el modelo de 3 niveles (~17%)

Dosar D-dímero: si es negativo, TVP excluida; si es positivo, ultrasonido con Doppler.


### 4

TVP probable (≥ 2); probabilidad moderada en el modelo de 3 niveles (~17%)

Ecografía Doppler; si es negativa, dímero D o repetir la ecografía en 1 semana.


### 5

TVP probable; probabilidad alta (~53%)

Ecografía Doppler; si es negativa, repetir la ecografía o hacer una ecografía de todo el miembro.

