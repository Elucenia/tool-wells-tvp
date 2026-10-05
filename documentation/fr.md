<!-- ELUCENIA technical documentation · wells-tvp · fr · no clinical/professional/rights approval -->

# Score de Wells pour la TVP

[conditions, sources et autorisations](https://elucenia.org/fr/outils/wells-tvp)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Cancer actif (traitement dans les 6 derniers mois ou palliatif)

`cancer`

### Paralysie, parésie ou immobilisation plâtrée récente du membre inférieur

`paralisia`

### Alité pendant ≥ 3 jours ou chirurgie majeure au cours des 12 dernières semaines nécessitant une anesthésie générale ou régionale

`acamado`

### Douleur localisée sur le trajet du réseau veineux profond

`dor_trajeto`

### Œdème de tout le membre inférieur

`edema_total`

### Circonférence du mollet ≥ 3 cm supérieure à celle du côté opposé (10 cm sous la tubérosité tibiale)

`panturrilha`

### Œdème prenant le godet limité à la jambe symptomatique

`cacifo`

### Veines superficielles collatérales (non variqueuses)

`colaterais`

### TVP antérieure documentée

`tvp_prev`

### Diagnostic alternatif aussi probable ou plus probable qu’une TVP

`alternativo`

## Édition de la méthode

Wells DVT 2003, Tableau 1 : 9 facteurs + diagnostic alternatif −2 ; 2 niveaux ≥2 / \<2 ; le modèle à 3 niveaux est affiché séparément et son édition n’a pas encore été vérifiée

## Formule documentée

Un point par élément (cancer, paralysie/plâtre, alitement ou chirurgie, douleur sur le trajet veineux, œdème de toute la jambe, augmentation du périmètre du mollet ≥ 3 cm, œdème prenant le godet unilatéral, veines collatérales, antécédent de TVP) et −2 si un diagnostic alternatif est au moins aussi probable.

2 niveaux (Wells 2003) : ≥ 2 = TVP probable ; ≤ 1 = improbable. 3 niveaux : ≤ 0 faible ; 1–2 modérée ; ≥ 3 élevée.

## Limites et population

La stratégie Wells 2003 a été étudiée chez des patients ambulatoires présentant une suspicion de TVP d’un membre inférieur. La décision prévue par le protocole de ne pas réaliser d’échographie exigeait simultanément une probabilité clinique improbable et des D-dimères négatifs. Le score seul ne confirme ni n’exclut une TVP ; le dosage des D-dimères et les critères d’éligibilité doivent correspondre au protocole utilisé. Dans le Tableau 1 de Wells 2003, la différence de circonférence du mollet est d’au moins 3 cm, mesurée 10 cm sous la tubérosité tibiale ; une chirurgie majeure au cours des 12 dernières semaines nécessite une anesthésie générale ou régionale. Le tableau définit seulement le modèle à 2 niveaux (≥2 probable ; \<2 improbable) ; l’édition du modèle à 3 niveaux affiché ici reste non vérifiée.

## Références

- [Wells PS et al. Evaluation of D-dimer in the diagnosis of suspected deep-vein thrombosis. N Engl J Med, 2003.](https://doi.org/10.1056/NEJMoa023153)

- [Wells PS et al. Does this patient have deep vein thrombosis? JAMA, 2006.](https://doi.org/10.1001/jama.295.2.199)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
