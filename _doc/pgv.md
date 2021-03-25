---
layout: doc_page
lang-ref: pgv
type: chapter
nav_order: 5
title: "PGV und Intensität"
subheadline: "Die maximale Bodengeschwindigkeit und deren Zusammenhang mit der Intensität."
teaser: ""
description: ""
image_dir: doc/pgv
---

Die Peak Ground Velocity (PGV) ist eine in der Ingenieurseismologie übliche Größe zur Bewertung der Belastung durch seismische Wellen. Sie gibt die maximale Schwinggeschwindigkeit an. Die für das MSS Netzwerk verwendete Formel zur Berechnung der PGV lautet:

$$
\mathrm{PGV} = \max_{t_1 \leq k \leq t_2}{\sqrt{\mathrm{HN}_k^2 + \mathrm{HP}_k^2}}
$$

$$\mathrm{HN_k}$$ und $$\mathrm{HP_k}$$ sind die zeitgleichen Amplituden der beiden horizontalen Komponeneten des MacroSeismic Sensors Hnormal und HParallel. Das Maximum wird über die Samples zwischen den Zeitpunkten $$t_1$$ und $$t_2$$ gebildet.

## Kalibration
Die relative Frequenzantwort des MacroSeismic Sensors bedingt eine Verringerung des mit den obigen Formeln ermittelten PGV – Wertes. Weiter wird für die Beurteilung von Sprengerschütterungen nicht PGV (Resultierende der Horizontalkomponenten), sondern VR (Resultierende aus allen drei Komponenten) herangezogen. Durch Vergleich mit den Daten eines, dem einschlägigen Normen ( DIN 45669, ÖNORM S 9020) entsprechenden 3-Komponenten Messsystems bestimmen wir daher Kalibrationsfaktoren, die eine Umrechnung von $$\mathrm{PGV}_{MSS}$$ (aus Daten des MacroSeismic Sensors) in PGV (aus Daten eines das Signalspektrum mit konstanter Empfindlichkeit erfassenden Messsystems) und VR ermöglichen. Ein derartiges Messsystem ist seit November 2017 im Steinbruch Dürnbach (Station DUBA) neben dem MacroSeismic Sensor AT11 installiert. Aus den bisherigen Vergleichsmessungen ergeben sich die folgenden Kalibrationsfaktoren:

$$
\frac{\mathrm{PGV}}{\mathrm{PGV}_{MSS}} = 1.04 \pm 0.13
$$

$$
\frac{\mathrm{VR}}{\mathrm{PGV}} = 1.03 \pm 0.03
$$

