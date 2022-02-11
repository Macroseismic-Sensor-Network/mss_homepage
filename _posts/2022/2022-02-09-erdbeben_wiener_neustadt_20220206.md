---
title: "Erdbeben Wiener Neustadt 6. Februar 2022"
subheadline: "Erdbeben mit Intensität II im Raum Wiener Neustadt."
teaser: "Am 6. Februar 2022 um 02:25 Ortszeit ereignete sich im Raum Wiener Neustadt ein Erdbeben mit der maximalen Intensität II. Die vom MSS Netzwerk aufgezeichnete maximale Bodengeschwindigkeit betrug 0.299 mm/s."

license: cc-by-sa-4.0
copyright:
    date: 2022
    author: MSS Team
    
categories: 
    - review
    
tags:
    - review
    - earthquake

image_dir: posts/2022/04_erdbeben_wiener_neustadt_20220206

image:
    header: "header_erdbeben_wiener_neustadt_20220206.jpg"


figures:
    main_pgvcontour:
        label: fig:main_pgvcontour
        number: 1
        filename: mss_dsrt_2022-02-06T012523500000_pgvcontour.jpg
        caption: "Interpolierte PGV Werte des Erdbebens am 6.2.2022 02:25 Ortszeit. Bei den interpolierten Daten wurden die stationsabhängigen Verstärkungsfaktoren berücksichtigt. Die Farben der Stationsmarker (gefüllte Kreise) entsprechen den an diesen Orten gemessenen Werten ohne Berücksichtigung der Verstärkungsfaktoren."
        
        
videos:
    main_pgvcontour:
        label: vid:main_pgvcontour
        number: 1
        filename: mss_dsrt_2022-02-06T012523500000_pgvcontoursequence.mp4
        caption: "Animation der interpolierten PGV Werte des Erdbebens am 6.2.2022 02:25 Ortszeit. Der Zeitunterschied zwischen zwei Bildern entspricht 1 Sekunde."
        
galleries:
    main_seismogram:
        label: gal:main_seismogram
        number: 1
        caption: "Die Seismogramme des Erdbebens."
        images:
            - filename: mss_dsrt_2022-02-06T012523500000_seismogram_panel_00.jpg
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV.
            - filename: mss_dsrt_2022-02-06T012523500000_seismogram_panel_01.jpg
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV.
            - filename: mss_dsrt_2022-02-06T012523500000_seismogram_panel_02.jpg
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV.
            - filename: mss_dsrt_2022-02-06T012523500000_seismogram_panel_03.jpg
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV.
            - filename: mss_dsrt_2022-02-06T012523500000_seismogram_panel_04.jpg
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV.
            - filename: mss_dsrt_2022-02-06T012523500000_seismogram_panel_05.jpg
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV.
---

Das Erdbeben mit einer maximalen **Intensität II (kaum bemerkbar, [EMS-98][sec:ems98])** wurde am 6. Februar 2022 um 02:25:23 Ortszeit vom MSS Netzwerk detektiert. Die vom MSS Netzwerk gemessene maximale Bodengeschwindigkeit (Peak-Ground-Velocity, PGV) dieses Ereignisses betrug 0.299 mm/s und wurde an der Station MAPI in Markt Piesting aufgezeichnet. Die Interpolation der gemessenen PGV Werte ist in [Abbildung {{ page.figures.main_pgvcontour.number }}][fig:main_pgvcontour] dargestellt. Die in dieser Abbildung dargestellten Daten des MSS Netzwerks lassen darauf schließen, dass das Erdbeben kleinräumig im Bereich Wiener Neustadt von einigen Personen schwach wahrgenommen werden konnte.

Der in [Abbildung {{ page.figures.main_pgvcontour.number }}][fig:main_pgvcontour] dargestellte maximale PGV Wert von 0.261 mm/s entspricht dem Maximum der interpolierten Werte, bei denen die stationsabhängigen Verstärkunsfaktoren berücksichtig sind (siehe Abschitt [Verstärkungsfaktoren und Interpolation][sec:amplification_factors] der Dokumentation). Aus diesem Grund unterscheidet er sich vom oben angegebenen gemessenen Maximum. Die interpolierten PGV Werte stellt eine realistischere großräumige Repräsentation der punktuellen Einzelmessungen der Stationen dar.

Mit Hilfe der in  [Abbildung {{ page.figures.main_pgvcontour.number }}][fig:main_pgvcontour] Konturlinien der maximalen PGV lässt sich die Region innerhalb der das Epizentrum des Bebens liegt bestimmen. Die Amplitude der seismischen Wellen nimmt mit der Entfernung vom Epizentrum ab, demnach muss das Epizentrum in der Region der maximalen PGV liegen. Da die an der Erdoberfläche gemessenen Amplituden neben der Quellstärke des Erdbebens von vielen weiteren Faktoren wie der Geologie des Untergrunds, dem Messort oder die Ankopplung des Sensors an den Boden, abhängen, ist eine punktuelle Bestimmung des Epizentrums mit Hilfe der Konturlinien der maximalen PGV nicht sinnvoll. Es bietet sich vielmehr an, die erste oder zweite Konturlinie unterhalb der maximalen Konturlinie zur Eingrenzung der Epizentrum-Region zu verwenden. 


{% include insert_image.html key="main_pgvcontour" %}

Die Konturlinien der interpolierten PGV Werte sind in Abständen gezeichnet, die einem Intensitätsunterschied $$ \Delta I = 0.1 $$ gemäß der nichtlinearen [PGV - Intensitätsbeziehung][sec:pgv_intensity] entsprechen.

## Ausbreitung der Bodenerschütterung
Das [Video {{ page.videos.main_pgvcontour.number }}][vid:main_pgvcontour] zeigt die Ausbreitung der Bodenerschütterung.

{% include insert_video.html key="main_pgvcontour" %}


## Seismogramme

In der [Gallerie {{page.galleries.main_seismogram.number}}][gal:main_seismogram] sind die Seismogramme aller zur zeit des Erdbebens aktiven Stationen des MSS Neztwerks dargestellt. Die Amplituden der Seismogramme sind für jeden Kanal individuell skaliert. Die maximale PGV ist für jeden Kanal angegeben. Die Seismogramme sind nach der aufsteigenden Epizentraldistanz der Stationen sortiert. Als Hypozentrum wurde die lokalisierung der ZAMG verwendet.

{% include insert_gallery.html key="main_seismogram" %}


[sec:amplification_factors]: {% link _doc/amplification_factors_and_interpolation.md %}
[sec:pgv_intensity]: {% link _doc/pgv.md %}
[sec:ems98]: /doc/pgv/#intensität-nach-ems-98

[fig:main_pgvcontour]: #{{page.figures.main_pgvcontour.label}}

[vid:main_pgvcontour]: #{{page.videos.main_pgvcontour.label}}

[gal:main_seismogram]: #{{page.galleries.main_seismogram.label}}

