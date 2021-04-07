---
layout: doc_page
lang-ref: amplification_and_interpolation
type: chapter
nav_order: 6
title: "Verstärkungsfaktoren und Interpolation"
subheadline: "Stationsabhängige Verstärkungsfaktoren und Interpolation der PGV Werte."
teaser: "Die flächenhafte Darstellung der PGV Messwerte erfordert eine Beachtung lokaler Verstärkungsfaktoren und die Wahl geeigneter Interpolationsmethoden."
description: "Methoden für die Berechnung der stationsabhängigen Verstärkungsfaktoren und die Interpolation der PGV Daten."
image_dir: "doc/amplification_factors_and_interpolation"
---
{% comment %} Initialize the counters so that their first usage in the text starts at 1. {% endcomment %}
{% capture _ %}{% increment cnt_table %}{% endcapture %}

Für die Visualisierung der Daten des MSS Netzwerks werden neben den an einer Station gemessenen Datenpunkten auch interpolierte Daten verwendet. Die Interpolation der gemessenen Datenpunkten ermöglicht die Erstellung einer flächenhaften Darstellung und Interpretation der punktuell vorhandenen Messdaten. Die Ergebnisse der Interpolation sind immer stark von der gewählten Methode der Interpolation abhängig. Diese muss bei der Interpretation immer berücksichtigt werden.

Bei allen Darstellung der gemessenen und interpolierten Daten gelten die folgenden Bestimmungen bei der Verwendung der Korrektur mit den Verstärkungsfaktoren.

Punktuelle Messdaten
: Die gemessenen Daten werden immer so wiedergegeben, wie sie gemessen wurden. Es werden keine Korrekturen der Amplituden angebracht.

Interpolierte Daten
: Da bei interpolierten Daten die punktuellen Messdaten auf eine Region um den Messpunkt ausgeweitet werden, werden bei den interpolierten Daten die stationsabhängigen Verstärkungsfaktoren berücksichtigt und die Amplituden damit korrigiert.


## Stationsabhängige Verstärkungsfaktoren

Die gefühlte oder gemessene Bodenerschütterung ist nicht nur von der Stärke und Arte der Quelle abhängig, sondern auch vom Ort, an dem die Bodenerschütterung wahrgenommen bzw. aufgezeichnet wird. Die Macroseismic-Sensoren sind in Gebäuden möglichst an tragenden Mauerteilen montiert. Die Aufstellungsorte der Macroseismic-Sensoren unterscheiden sich allerdings in der genauen Lage der Sensoren innerhalb des Gebäudes (Keller, Erdgeschoß, obere Stockwerke). Darüber hinaus haben die Bauart der Gebäude, der lokale Untergrund und die geologischen Gegebenheiten einen Einfluss auf die Amplituden der Bodenerschütterung.

Diese Beeinflussung der Amplituden bleibt auch über einen längeren Zeitraum überwiegend gleich und kann deshalb mit stationsabhängigen Verstärkungsfaktoren berücksichtigt werden. 

Der an einer Station $$i$$ gemessene PGV Wert $$\mathrm{PGV}_i$$ kann mit einem vom Abstand $$r$$, dem Verstärkungsfaktor der Station $$\mathrm{SA}_i$$ und der Quellstärke $$A_0$$ beschrieben werden:

$$
\mathrm{PGV}_i = \mathrm{SA}_i \ast A_0 \ast r_i^n
$$

Durch die Umformung dieser Gleichung und die Bildung der Differenzen der Verstärkungsfaktoren zweier Stationen $$i$$ und $$j$$ mit den Hypozentraldistanzen $$r_i$$ und $$r_j$$ lässt sich die unbekannte Quellstärke $$A_0$$ des Erdbebens $$e$$ eliminieren.

$$
\frac{\mathrm{SA}_{i,e}}{\mathrm{SA}_{j,e}} = \frac{\mathrm{PGV}_{i,e} \ast r_{i,e}^{-n}}{\mathrm{PGV}_{j,e} \ast r_{j,e}^{-n}}
$$

Um die Verstärkungsfaktoren $$SA_i$$ zu berechnen werden mit $$N$$ vom MSS Netzwerk aufgezeichneten Erdbeben die Mittelwerte der Verstärkungsfaktoren der jeweiligen Erdbeben bestimmt:

$$
\frac{\mathrm{SA}_{i}}{\mathrm{SA}_{j}} = \frac{1}{N}\sum_{e=1}^N \frac{\mathrm{PGV}_{i,e} \ast r_{i,e}^{-n}}{\mathrm{PGV}_{j,e} \ast r_{j,e}^{-n}}
$$

Durch die Bildung des Logarithmus dieser Gleichung ergibt sich ein lineares Gleichungssystem für $$SA$$, das mit der Methode der kleinsten Fehlerquadrate mit der Bedingung, dass das geometrische Mittel aller $$SA$$ gleich 1 ist, gelöst wird. Der Exponent $$n$$, der die Entfernungsabhängigkeit bestimmt, wird variiert, um die Standardabweichung der Differenz der berechneten und beobachteten PGV Werte, ($$PGV_{obs,i} - PGV_{calc,i}$$) zu minimieren. Der aktuelle Wert (_Stand 7.4.2021_) beträgt $$n=-2.2$$.

Weitere Informationen zu den Verstärkungsfaktoren und deren Anwendung sind in unseren Publikationen _"Seismological Data Acquisition and Analysis within the Scope of Citizen Science."_ {% cite bruckl_seismological_2021 %} und _"Monitoring von Sprengerschütterungen mit seismischen low-cost Sensoren"_ {% cite bruckl_monitoring_2019 %} zu finden.


## Interpolation

Die Interpolation für eine flächenhafte Darstellung erfolgt im Fall der Voronoi-Zellen Darstellung durch die Nearest-Neighbor Methode. Für alle anderen interpolierten Daten wird die Methode Ordinary-Kriging mit einem linearen Varianzmodell verwendet. Es werden die im Python Paket [PyKrige][pykrige]{:traget="blank"} bereitgestellten Algorithmen verwendet.


## Bibliografie
{% bibliography --cited %}


[pykrige]: https://github.com/GeoStat-Framework/PyKrige
