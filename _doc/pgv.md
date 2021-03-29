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

$$\mathrm{HN_k}$$ und $$\mathrm{HP_k}$$ sind die zeitgleichen Amplituden der beiden horizontalen Komponeneten des MacroSeismic Sensors Hnormal und HParallel. Das Maximum wird über die Samples zwischen den Zeitpunkten $$t_1$$ und $$t_2$$ (Zeitwerte in Samples) gebildet.

Die PGV Werte des MSS Netzwerks werden für eine Zeitspanne von 1 Sekunde und mit einer Samplingrate von 1 Sample pro Sekunde berechnet. Die Basisdaten zur Berechnung der PGV ($$\mathrm{HN_k}$$ und $$\mathrm{HP_k}$) haben eine Samplingrate von 100 Samples pro Sekunden.

## Intensität nach EMS-98


## Zusammenhang zwischen PGV und Intensität
Seit dem Beginn der Aufzeichnungen des MSS Netzwerks wurde für 16 Erdbeben im Bereich des MSS Netzwerks die makroseismische Intensität durch den seismologischen Dienst der ZAMG bestimmt. Die Bestimmung erfolgte entsprechend der EMS-98 Skala. 


## Kalibration
Die relative Frequenzantwort des MacroSeismic Sensors bedingt eine Verringerung des mit den obigen Formeln ermittelten PGV – Wertes. Weiter wird für die Beurteilung von Sprengerschütterungen nicht PGV (Resultierende der Horizontalkomponenten), sondern VR (Resultierende aus allen drei Komponenten) herangezogen. Durch Vergleich mit den Daten eines, dem einschlägigen Normen ( DIN 45669, ÖNORM S 9020) entsprechenden 3-Komponenten Messsystems bestimmen wir daher Kalibrationsfaktoren, die eine Umrechnung von $$\mathrm{PGV}_{MSS}$$ (aus Daten des MacroSeismic Sensors) in PGV (aus Daten eines das Signalspektrum mit konstanter Empfindlichkeit erfassenden Messsystems) und VR ermöglichen. Ein derartiges Messsystem ist seit November 2017 im Steinbruch Dürnbach (Station DUBA) neben dem MacroSeismic Sensor AT11 installiert. Aus den bisherigen Vergleichsmessungen ergeben sich die folgenden Kalibrationsfaktoren:

$$
\frac{\mathrm{PGV}}{\mathrm{PGV}_{MSS}} = 1.04 \pm 0.13
$$

$$
\frac{\mathrm{VR}}{\mathrm{PGV}} = 1.03 \pm 0.03
$$

