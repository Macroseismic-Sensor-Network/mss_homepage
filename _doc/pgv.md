---
layout: doc_page
lang-ref: pgv
type: chapter
nav_order: 5
title: "PGV und Intensität"
subheadline: "Die maximale Bodengeschwindigkeit und deren Zusammenhang mit der Intensität."
teaser: ""
description: ""
image_dir: "doc/pgv"

tables:
    ems98_kurz:
        label: "tab:ems98_kurz"
        number: 1
        caption: "EMS-98 Kurzform."
        data: "ems_98_de"
---
{% comment %} Initialize the counters so that their first usage in the text starts at 1. {% endcomment %}
{% capture _ %}{% increment cnt_table %}{% endcapture %}


Die Peak Ground Velocity (PGV) ist eine in der Ingenieurseismologie übliche Größe zur Bewertung der Belastung durch seismische Wellen. Sie gibt die maximale Schwinggeschwindigkeit an. Die für das MSS Netzwerk verwendete Formel zur Berechnung der PGV lautet:

$$
\mathrm{PGV} = \max_{t_1 \leq k \leq t_2}{\sqrt{\mathrm{HN}_k^2 + \mathrm{HP}_k^2}}
$$

$$\mathrm{HN_k}$$ und $$\mathrm{HP_k}$$ sind die zeitgleichen Amplituden der beiden horizontalen Komponeneten des MacroSeismic Sensors Hnormal und HParallel. Das Maximum wird über die Samples zwischen den Zeitpunkten $$t_1$$ und $$t_2$$ (Zeitwerte in Samples) gebildet.

Die PGV Werte des MSS Netzwerks werden für eine Zeitspanne von 1 Sekunde und mit einer Samplingrate von 1 Sample pro Sekunde berechnet. Die Basisdaten zur Berechnung der PGV ($$\mathrm{HN_k}$$ und $$\mathrm{HP_k}$$) haben eine Samplingrate von 100 Samples pro Sekunden.

## Intensität nach EMS-98

Die europäische Makroseismische Skala (EMS-98) dient zur Bestimmung der makroseismischen Intensität. [Tabelle {{ page.tables.ems98_kurz.number }}][tab:ems98_kurz] zeigt die Kurzform der EMS-98. Sie wird vor allem in den Ländern Europas verwendet. Die makroseismische Intensität beschreibt die Stärke von Bodenerschütterungen basierend auf den Beobachtung deren Auswirkung auf das Menschliche Verhalten, die Umwelt und die menschliche Infrastruktur. Die folgende Tabelle ist die Kurzform der EMS-98. Die ausführliche [Originalversion sowie Übersetzungen][1]{:target="blank"} können von der Homepage des Geoforschungszentums Potsdam bezogen werden. In deutscher Übersetzung ist die [Kurzversion][2]{:target="blank"} sowie der [Kernteil][3]{:target="blank"} der EMS-98 vorhanden.

{% include insert_table.html key="ems98_kurz" %}


## Zusammenhang zwischen PGV und Intensität

Die makroseismische Intensität beruht auf Beobachtungen der Auswirkung der Bodenerschütterung auf die Umwelt. Einen klar definierten Zusammenhang zu einem physikalischen Messwert wie der Bodengeschwindigkeit gibt es nicht, da die Auswirkungen der Bodenerschütterung nicht nur von deren Amplitude, sondern auch von der individuellen Wahrnehmung, dem Aufenthaltsort (z.B. auf einer weiten Wiese oder im obersten Stock eines Hochhauses, der Bausubstanz der Infrastruktur und vielen weiteren, teils subjektiven Wahrnehmungen abhängt.

Die Zuordnung der maximalen Bodengeschwindigkeit erfolgt über empirische Beziehungen, die speziell für einzelne Regionen bestimmt werden müssen. Seit dem Beginn der Aufzeichnungen des MSS Netzwerks wurde für 16 Erdbeben im Bereich des MSS Netzwerks die makroseismische Intensität durch den seismologischen Dienst der ZAMG bestimmt. Die Bestimmung erfolgte entsprechend der EMS-98 Skala. Mit diesem Datenmaterial wurde eine Beziehung von makroseismischen Intensitäten zu an Stationen des MSS Netzwerks gemessenen PGV Werten erstellt. Die makroseismischen Intensitätswerte, die an diskreten Positionen vorliegen, werden den MSS Stationen zugeordnet. Makroseismische Intensitätswerte in einem Umkreis von 5 km einer Station wurden dieser zugewiesen. Insgesamt wurden auf diese Weise 120 PGV-Intensitätspaare erstellt.



## Kalibration
Die relative Frequenzantwort des MacroSeismic Sensors bedingt eine Verringerung des mit den obigen Formeln ermittelten PGV – Wertes. Weiter wird für die Beurteilung von Sprengerschütterungen nicht PGV (Resultierende der Horizontalkomponenten), sondern VR (Resultierende aus allen drei Komponenten) herangezogen. Durch Vergleich mit den Daten eines, dem einschlägigen Normen ( DIN 45669, ÖNORM S 9020) entsprechenden 3-Komponenten Messsystems bestimmen wir daher Kalibrationsfaktoren, die eine Umrechnung von $$\mathrm{PGV}_{MSS}$$ (aus Daten des MacroSeismic Sensors) in PGV (aus Daten eines das Signalspektrum mit konstanter Empfindlichkeit erfassenden Messsystems) und VR ermöglichen. Ein derartiges Messsystem ist seit November 2017 im Steinbruch Dürnbach (Station DUBA) neben dem MacroSeismic Sensor AT11 installiert. Aus den bisherigen Vergleichsmessungen ergeben sich die folgenden Kalibrationsfaktoren:

$$
\frac{\mathrm{PGV}}{\mathrm{PGV}_{MSS}} = 1.04 \pm 0.13
$$

$$
\frac{\mathrm{VR}}{\mathrm{PGV}} = 1.03 \pm 0.03
$$


[1]: https://www.gfz-potsdam.de/ems98/sprachversionen-ems-98/
[2]: http://media.gfz-potsdam.de/gfz/sec26/resources/documents/PDF/EMS-98_short_form_German_PDF.pdf
[3]: http://media.gfz-potsdam.de/gfz/sec26/resources/documents/PDF/EMS-98_core_part_German.pdf
[tab:ems98_kurz]: #{{ page.tables.ems98_kurz.label }}
