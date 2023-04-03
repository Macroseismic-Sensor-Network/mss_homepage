---
title: "Erdbeben {{ page.earthquake.region }} {{ page.earthquake.date }}"
subheadline: "Erdbeben mit Intensität {{ page.earthquake.intensity }} im Raum {{ page.earthquake.region }}."
teaser: "Am {{ page.earthquake.date }} um {{ page.earthquake.time }} Ortszeit ereignete sich im Raum {{ page.earthquake.region }} ein Erdbeben mit der maximalen Intensität {{ page.earthquake.intensity }}. Die vom MSS Netzwerk aufgezeichnete maximale Bodengeschwindigkeit betrug {{ page.earthquake.max_pgv }} mm/s."

earthquake:
    region: Gloggnitz
    date: 30. März 2023
    time: "2023-03-30 22:26:14"
    intensity: VI
    intensity_def: leichte Gebäudeschäden
    max_pgv_interp: 40.43
    max_pgv: 27.98
    max_station: PUBE
    max_station_description: Purbach
    hypo:
        lon: 15.95
        lat: 47.70
        depth: 2000

license: cc-by-sa-4.0
copyright:
    date: 2023
    author: MSS Team
    
categories: 
    - review
    
tags:
    - review
    - earthquake

image_dir: posts/2023/02_erdbeben_gloggnitz_20230330

image:
    header: "header_erdbeben_gloggnitz_20230330.jpg"


figures:
    main_pgvcontour:
        label: fig:main_pgvcontour
        number: 1
        filename: mss_dsrt_2023-03-30T202614500000_pgvcontour.jpg
        caption: "Interpolierte PGV Werte des Erdbebens am {{ page.earthquake.date }} um {{ page.earthquake.time }} Ortszeit. Bei den interpolierten Daten wurden die stationsabhängigen Verstärkungsfaktoren berücksichtigt. Die Farben der Stationsmarker (gefüllte Kreise) entsprechen den an diesen Orten gemessenen Werten ohne Berücksichtigung der Verstärkungsfaktoren."
        
        
videos:
    main_pgvcontour:
        label: vid:main_pgvcontour
        number: 1
        filename: mss_dsrt_2023-03-30T202614500000_pgvcontoursequence.mp4
        caption: "Animation der interpolierten PGV Werte des Erdbebens am {{ page.earthquake.date }} um {{ page.earthquake.time }} Ortszeit. Der Zeitunterschied zwischen zwei Bildern entspricht 1 Sekunde."
        
galleries:
    main_seismogram:
        label: gal:main_seismogram
        number: 1
        caption: "Die Seismogramme des Erdbebens."
        images:
            - filename: mss_dsrt_2023-03-30T202614500000_seismogram_panel_00.png
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV.
            - filename: mss_dsrt_2023-03-30T202614500000_seismogram_panel_01.png
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV.
            - filename: mss_dsrt_2023-03-30T202614500000_seismogram_panel_02.png
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV.
            - filename: mss_dsrt_2023-03-30T202614500000_seismogram_panel_03.png
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV.
            - filename: mss_dsrt_2023-03-30T202614500000_seismogram_panel_04.png
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV.
            - filename: mss_dsrt_2023-03-30T202614500000_seismogram_panel_05.png
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV.
---

Das Erdbeben mit einer maximalen **Intensität {{ page.earthquake.intensity }} ({{ page.earthquake.intensity_def }}, [EMS-98][sec:ems98])** wurde am {{ page.earthquake.date }} um {{ page.earthquake.time }} Ortszeit vom MSS Netzwerk detektiert. Die vom MSS Netzwerk gemessene maximale Bodengeschwindigkeit (Peak-Ground-Velocity, PGV) dieses Ereignisses betrug {{ page.earthquake.max_pgv }} mm/s und wurde an der Station {{ page.earthquake.max_station }} in {{ page.earthquake.max_station_description }} aufgezeichnet. Die Voronoizellen der gemessenen PGV Werte ist in [Abbildung {{ page.figures.main_pgvcontour.number }}][fig:main_pgvcontour] dargestellt. Daraus lässt sich schließen, dass das Erdbeben im Bereich des MSS Netzwerks von vielen Menschen wahrgenommen wurde. Im Bereich des Epizentrums waren die Erschütterungen stark und leichte Gebäudeschäden sind möglich.

Der in [Abbildung {{ page.figures.main_pgvcontour.number }}][fig:main_pgvcontour] dargestellte maximale PGV Wert von {{ page.earthquake.max_pgv_interp }} mm/s entspricht dem Maximum der interpolierten Werte, bei denen die stationsabhängigen Verstärkunsfaktoren berücksichtig sind (siehe Abschitt [Verstärkungsfaktoren und Interpolation][sec:amplification_factors] der Dokumentation). Aus diesem Grund unterscheidet er sich vom oben angegebenen gemessenen Maximum. Die interpolierten PGV Werte stellt eine realistischere großräumige Repräsentation der punktuellen Einzelmessungen der Stationen dar und berücksichtig lokalen Verstärkung oder Abschwächung der Amplituden aufgrund der Geologie oder des Aufstellungsorts.

{% include insert_image.html key="main_pgvcontour" %}


## Ausbreitung der Bodenerschütterung
Das [Video {{ page.videos.main_pgvcontour.number }}][vid:main_pgvcontour] zeigt die Ausbreitung der Bodenerschütterung. Man sieht wie sich die seismischen Wellen von Süd-Westen nach Nord-Osten ausgebreitet haben.

{% include insert_video.html key="main_pgvcontour" %}


## Seismogramme

In der [Gallerie {{page.galleries.main_seismogram.number}}][gal:main_seismogram] sind die Seismogramme aller zur Zeit des Erdbebens aktiven Stationen des MSS Neztwerks dargestellt. Die Amplituden der Seismogramme sind für jeden Kanal individuell skaliert. Die maximale PGV ist für jeden Kanal angegeben. Die Seismogramme sind nach der aufsteigenden Epizentraldistanz der Stationen sortiert. Als Hypozentrum wurde das Epizentrum der automatischen Lokalisierung (Länge: {{ page.earthquake.hypo.lon }}°, Breite: {{ page.earthquake.hypo.lat }}°) verwendet.

{% include insert_gallery.html key="main_seismogram" %}


[sec:amplification_factors]: {% link _doc/amplification_factors_and_interpolation.md %}
[sec:pgv_intensity]: {% link _doc/pgv.md %}
[sec:ems98]: /doc/pgv/#intensität-nach-ems-98
[loc-zamg]: https://www.zamg.ac.at/cms/de/geophysik/erdbeben/aktuelle-erdbeben/karten-und-listen/bebendetails/austria/quakes/evid53061562

[fig:main_pgvcontour]: #{{page.figures.main_pgvcontour.label}}

[vid:main_pgvcontour]: #{{page.videos.main_pgvcontour.label}}

[gal:main_seismogram]: #{{page.galleries.main_seismogram.label}}

