---
title: "Erdbeben {{ page.earthquake.region }} {{ page.earthquake.date }}"
subheadline: "Erdbeben mit Intensität {{ page.earthquake.intensity }} im Raum {{ page.earthquake.region }}."
teaser: "Am {{ page.earthquake.date }} um {{ page.earthquake.time }} Ortszeit ereignete sich im Raum Wiener Neustadt ein Erdbeben mit der maximalen Intensität {{ page.earthquake.intensity }}. Die vom MSS Netzwerk aufgezeichnete maximale Bodengeschwindigkeit betrug {{ page.earthquake.max_pgv }} mm/s."

earthquake:
    region: Wiener Neustadt
    date: 10. Februar.2022
    time: "18:23:01"
    intensity: II
    intensity_def: kaum bemerkbar
    max_pgv_interp: 0.150
    max_pgv: 0.133
    max_station: WNEU
    max_station_description: Wiener Neustadt
    hypo:
        lon: 16.25
        lat: 47.81
        depth: 9000

license: cc-by-sa-4.0
copyright:
    date: 2022
    author: MSS Team
    
categories: 
    - review
    
tags:
    - review
    - earthquake

image_dir: posts/2022/06_erdbeben_wiener_neustadt_20220210

image:
    header: "header_erdbeben_wiener_neustadt_20220210.jpg"


figures:
    main_pgvcontour:
        label: fig:main_pgvcontour
        number: 1
        filename: mss_dsrt_2022-02-10T172301500000_pgvcontour.jpg
        caption: "Interpolierte PGV Werte des Erdbebens am {{ page.earthquake.date }} um {{ page.earthquake.time }} Ortszeit. Bei den interpolierten Daten wurden die stationsabhängigen Verstärkungsfaktoren berücksichtigt. Die Farben der Stationsmarker (gefüllte Kreise) entsprechen den an diesen Orten gemessenen Werten ohne Berücksichtigung der Verstärkungsfaktoren."
        
        
videos:
    main_pgvcontour:
        label: vid:main_pgvcontour
        number: 1
        filename: mss_dsrt_2022-02-10T172301500000_pgvcontoursequence.mp4
        caption: "Animation der interpolierten PGV Werte des Erdbebens am {{ page.earthquake.date }} um {{ page.earthquake.time }} Ortszeit. Der Zeitunterschied zwischen zwei Bildern entspricht 1 Sekunde."
        
galleries:
    main_seismogram:
        label: gal:main_seismogram
        number: 1
        caption: "Die Seismogramme des Erdbebens."
        images:
            - filename: mss_dsrt_2022-02-10T172301500000_seismogram_panel_00.jpg
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV.
            - filename: mss_dsrt_2022-02-10T172301500000_seismogram_panel_01.jpg
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV.
            - filename: mss_dsrt_2022-02-10T172301500000_seismogram_panel_02.jpg
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV.
            - filename: mss_dsrt_2022-02-10T172301500000_seismogram_panel_03.jpg
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV.
            - filename: mss_dsrt_2022-02-10T172301500000_seismogram_panel_04.jpg
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV.
            - filename: mss_dsrt_2022-02-10T172301500000_seismogram_panel_05.jpg
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV.
---

Das Erdbeben mit einer maximalen **Intensität {{ page.earthquake.intensity }} ({{ page.earthquake.intensity_def }}, [EMS-98][sec:ems98])** wurde am {{ page.earthquake.date }} um {{ page.earthquake.time }} Ortszeit vom MSS Netzwerk detektiert. Die vom MSS Netzwerk gemessene maximale Bodengeschwindigkeit (Peak-Ground-Velocity, PGV) dieses Ereignisses betrug {{ page.earthquake.max_pgv }} mm/s und wurde an der Station {{ page.earthquake.max_station }} in {{ page.earthquake.max_station_description }} aufgezeichnet. Die Interpolation der gemessenen PGV Werte ist in [Abbildung {{ page.figures.main_pgvcontour.number }}][fig:main_pgvcontour] dargestellt. Die in dieser Abbildung dargestellten Daten des MSS Netzwerks lassen darauf schließen, dass das Erdbeben kleinräumig im Bereich {{ page.earthquake.region }} von einigen Personen schwach wahrgenommen werden konnte.

Der in [Abbildung {{ page.figures.main_pgvcontour.number }}][fig:main_pgvcontour] dargestellte maximale PGV Wert von {{ page.earthquake.max_pgv_interp }} mm/s entspricht dem Maximum der interpolierten Werte, bei denen die stationsabhängigen Verstärkunsfaktoren berücksichtig sind (siehe Abschitt [Verstärkungsfaktoren und Interpolation][sec:amplification_factors] der Dokumentation). Aus diesem Grund unterscheidet er sich vom oben angegebenen gemessenen Maximum. Die interpolierten PGV Werte stellt eine realistischere großräumige Repräsentation der punktuellen Einzelmessungen der Stationen dar.

Mit Hilfe der in  [Abbildung {{ page.figures.main_pgvcontour.number }}][fig:main_pgvcontour] Konturlinien der maximalen PGV lässt sich die Region innerhalb der das Epizentrum des Bebens liegt bestimmen. Die Amplitude der seismischen Wellen nimmt mit der Entfernung vom Epizentrum ab, demnach muss das Epizentrum in der Region der maximalen PGV liegen. Da die an der Erdoberfläche gemessenen Amplituden neben der Quellstärke des Erdbebens von vielen weiteren Faktoren wie der Geologie des Untergrunds, dem Messort oder die Ankopplung des Sensors an den Boden, abhängen, ist eine punktuelle Bestimmung des Epizentrums mit Hilfe der Konturlinien der maximalen PGV nicht sinnvoll. Es bietet sich vielmehr an, die erste oder zweite Konturlinie unterhalb der maximalen Konturlinie zur Eingrenzung der Epizentrum-Region zu verwenden. 


{% include insert_image.html key="main_pgvcontour" %}

Die Konturlinien der interpolierten PGV Werte sind in Abständen gezeichnet, die einem Intensitätsunterschied $$ \Delta I = 0.1 $$ gemäß der nichtlinearen [PGV - Intensitätsbeziehung][sec:pgv_intensity] entsprechen.

## Ausbreitung der Bodenerschütterung
Das [Video {{ page.videos.main_pgvcontour.number }}][vid:main_pgvcontour] zeigt die Ausbreitung der Bodenerschütterung.

{% include insert_video.html key="main_pgvcontour" %}


## Seismogramme

In der [Gallerie {{page.galleries.main_seismogram.number}}][gal:main_seismogram] sind die Seismogramme aller zur zeit des Erdbebens aktiven Stationen des MSS Neztwerks dargestellt. Die Amplituden der Seismogramme sind für jeden Kanal individuell skaliert. Die maximale PGV ist für jeden Kanal angegeben. Die Seismogramme sind nach der aufsteigenden Epizentraldistanz der Stationen sortiert. Als Hypozentrum wurde die Lokalisierung der ZAMG (Länge: {{ page.earthquake.hypo.lon }}°, Breite: {{ page.earthquake.hypo.lat }}°, Tiefe: {{ page.earthquake.hypo.depth }} m) verwendet.

{% include insert_gallery.html key="main_seismogram" %}


[sec:amplification_factors]: {% link _doc/amplification_factors_and_interpolation.md %}
[sec:pgv_intensity]: {% link _doc/pgv.md %}
[sec:ems98]: /doc/pgv/#intensität-nach-ems-98

[fig:main_pgvcontour]: #{{page.figures.main_pgvcontour.label}}

[vid:main_pgvcontour]: #{{page.videos.main_pgvcontour.label}}

[gal:main_seismogram]: #{{page.galleries.main_seismogram.label}}

