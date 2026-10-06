<!-- ELUCENIA technical documentation · wells-tvp · pt-BR · no clinical/professional/rights approval -->

# Escore de Wells para TVP

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/wells-tvp)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Câncer ativo (tratamento nos últimos 6 meses ou paliativo)

`cancer`

### Paralisia, paresia ou imobilização gessada recente do membro inferior

`paralisia`

### Acamado ≥ 3 dias ou cirurgia de grande porte nas últimas 12 semanas com anestesia geral ou regional

`acamado`

### Dor localizada no trajeto do sistema venoso profundo

`dor_trajeto`

### Edema de todo o membro inferior

`edema_total`

### Panturrilha ≥ 3 cm maior que a contralateral (10 cm abaixo da tuberosidade tibial)

`panturrilha`

### Edema com cacifo restrito à perna sintomática

`cacifo`

### Veias superficiais colaterais (não varicosas)

`colaterais`

### TVP prévia documentada

`tvp_prev`

### Diagnóstico alternativo tão ou mais provável que TVP

`alternativo`

## Edição do método

Wells DVT 2003, Tabela 1: 9 fatores + alternativa −2; 2 níveis ≥2 / \<2; modelo de 3 níveis exibido separadamente, edição ainda não conferida

## Fórmula documentada

Um ponto para cada item (câncer, paralisia/gesso, acamado ou cirurgia, dor no trajeto venoso, edema de todo o membro, panturrilha ≥ 3 cm, cacifo unilateral, colaterais, TVP prévia) e −2 se um diagnóstico alternativo for tão ou mais provável.

2 níveis (Wells 2003): ≥ 2 = TVP provável; ≤ 1 = improvável. 3 níveis: ≤ 0 baixa; 1–2 moderada; ≥ 3 alta.

## Limites e população

A estratégia Wells 2003 foi estudada em pacientes ambulatoriais com suspeita de TVP de membro inferior. A decisão protocolar de dispensar ultrassom exigia probabilidade clínica improvável e D-dímero negativo juntos. O escore isolado não confirma nem exclui TVP, e o ensaio de D-dímero e os critérios de elegibilidade devem corresponder ao protocolo utilizado. Na Tabela 1 de Wells 2003, a diferença da panturrilha é de pelo menos 3 cm, medida 10 cm abaixo da tuberosidade tibial; cirurgia de grande porte nas últimas 12 semanas exige anestesia geral ou regional. A tabela define somente o modelo de 2 níveis (≥2 provável; \<2 improvável); a edição do modelo de 3 níveis exibido aqui permanece sem conferência.

## Referências

- [Wells PS et al. Evaluation of D-dimer in the diagnosis of suspected deep-vein thrombosis. N Engl J Med, 2003.](https://doi.org/10.1056/NEJMoa023153)

- [Wells PS et al. Does this patient have deep vein thrombosis? JAMA, 2006.](https://doi.org/10.1001/jama.295.2.199)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

As informações abaixo preservam as saídas do método para exemplos sintéticos. Não constituem validação clínica independente.

### 1

TVP improvável; probabilidade baixa (prevalência ~5%)

Dosar D-dímero: se negativo, TVP excluída; se positivo, ultrassom com Doppler.


### 2

TVP improvável; probabilidade baixa (prevalência ~5%)

Dosar D-dímero: se negativo, TVP excluída; se positivo, ultrassom com Doppler.


### 3

TVP improvável; probabilidade moderada no modelo de 3 níveis (~17%)

Dosar D-dímero: se negativo, TVP excluída; se positivo, ultrassom com Doppler.


### 4

TVP provável (≥ 2); probabilidade moderada no modelo de 3 níveis (~17%)

Ultrassom com Doppler; se negativo, D-dímero ou repetir o ultrassom em 1 semana.


### 5

TVP provável; probabilidade alta (~53%)

Ultrassom com Doppler; se negativo, repetir o ultrassom ou fazer ultrassom de todo o membro.

