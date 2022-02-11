---
title: "Erdbeben Gloggnitz 28. Jänner 2022"
subheadline: "Erdbeben mit Intensität IV im Raum Gloggnitz."
teaser: "Am 28. Jänner 2022 um 15:49 Ortszeit ereignete sich im Raum Gloggnitz ein Erdbeben mit der maximalen Intensität IV. Die vom MSS Netzwerk aufgezeichnete maximale Bodengeschwindigkeit betrug 0.760 mm/s."

license: cc-by-sa-4.0
copyright:
    date: 2022
    author: MSS Team
    
categories: 
    - review
    
tags:
    - review
    - earthquake

image_dir: posts/2022/03_erdbeben_gloggnitz_20220128

image:
    header: "header_erdbeben_gloggnitz_20220128.jpg"


figures:
    main_pgvcontour:
        label: fig:main_pgvcontour
        number: 1
        filename: mss_dsrt_2022-01-28T144912500000_pgvcontour.jpg
        caption: "Interpolierte PGV Werte des Erdbebens am 28.1.2022 15:49 Ortszeit. Bei den interpolierten Daten wurden die stationsabhängigen Verstärkungsfaktoren berücksichtigt. Die Farben der Stationsmarker (gefüllte Kreise) entsprechen den an diesen Orten gemessenen Werten ohne Berücksichtigung der Verstärkungsfaktoren."
        
        
videos:
    main_pgvcontour:
        label: vid:main_pgvcontour
        number: 1
        filename: mss_dsrt_2022-01-28T144912500000_pgvcontoursequence.mp4
        caption: "Animation der interpolierten PGV Werte des Erdbebens am 28.1.2022 15:49 Ortszeit. Der Zeitunterschied zwischen zwei Bildern entspricht 1 Sekunde."
        
galleries:
    main_seismogram:
        label: gal:main_seismogram
        number: 1
        caption: "Die Seismogramme des Erdbebens."
        images:
            - filename: mss_dsrt_2022-01-28T144912500000_seismogram_panel_00.jpg
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV.
            - filename: mss_dsrt_2022-01-28T144912500000_seismogram_panel_01.jpg
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV.
            - filename: mss_dsrt_2022-01-28T144912500000_seismogram_panel_02.jpg
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV.
            - filename: mss_dsrt_2022-01-28T144912500000_seismogram_panel_03.jpg
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV.
            - filename: mss_dsrt_2022-01-28T144912500000_seismogram_panel_04.jpg
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV.
            - filename: mss_dsrt_2022-01-28T144912500000_seismogram_panel_05.jpg
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV.
---

Das Erdbeben mit einer maximalen Intensität kapp über der **Intensität IV (deutlich, [EMS-98][sec:ems98])** wurde am 28. Jänner 2022 um 15:49:12 Ortszeit vom MSS Netzwerk detektiert. Die vom MSS Netzwerk gemessene maximale Bodengeschwindigkeit (Peak-Ground-Velocity, PGV) dieses Ereignisses betrug 0.76 mm/s und wurde an der Station GLOG in Gloggnitz aufgezeichnet. Die Interpolation der gemessenen PGV Werte ist in [Abbildung {{ page.figures.main_pgvcontour.number }}][fig:main_pgvcontour] dargestellt. Die in dieser Abbildung dargestellten Daten des MSS Netzwerks lassen darauf schließen, dass das Erdbeben besonders im südlichen Teil des Wiener Beckens von einigen Personen schwach wahrgenommen werden konnte.

Der in [Abbildung {{ page.figures.main_pgvcontour.number }}][fig:main_pgvcontour] dargestellte maximale PGV Wert von 1.255 mm/s entspricht dem Maximum der interpolierten Werte, bei denen die stationsabhängigen Verstärkunsfaktoren berücksichtig sind (siehe Abschitt [Verstärkungsfaktoren und Interpolation][sec:amplification_factors] der Dokumentation). Aus diesem Grund unterscheidet er sich vom oben angegebenen gemessenen Maximum. Die interpolierten PGV Werte stellt eine realistischere großräumige Repräsentation der punktuellen Einzelmessungen der Stationen dar.

Dass der maximale interpolierte Wert größer als der maximale gemessene PGV Wert an der Station GLOG ist, hängt mit einem Verstärkungsfaktor von 0.53 der Station GLOG zusammen. Das heißt, dass der an der Station GLOG gemessene PGV Wert systematisch geringer als die tatsächliche großräumig zu erwartende Bodenbewegung ist. Dieser Effekt hängt vor allem durch den Aufstellungsort des Macroseismic-Sensors beeinflußt. Bei den interpolierten Kontourlinien ist dieser Effekt berücksichtigt. 

Mit Hilfe dieser Konturlinien der maximalen PGV lässt sich die Region innerhalb der das Epizentrum des Bebens liegt bestimmen. Die Amplitude der seismischen Wellen nimmt mit der Entfernung vom Epizentrum ab, demnach muss das Epizentrum in der Region der maximalen PGV liegen. Da die an der Erdoberfläche gemessenen Amplituden neben der Quellstärke des Erdbebens von vielen weiteren Faktoren wie der Geologie des Untergrunds, dem Messort oder die Ankopplung des Sensors an den Boden, abhängen, ist eine punktuelle Bestimmung des Epizentrums mit Hilfe der Konturlinien der maximalen PGV nicht sinnvoll. Es bietet sich vielmehr an, die erste oder zweite Konturlinie unterhalb der maximalen Konturlinie zur Eingrenzung der Epizentrum-Region zu verwenden. 



{% include insert_image.html key="main_pgvcontour" %}

Die Konturlinien der interpolierten PGV Werte sind in Abständen gezeichnet, die einem Intensitätsunterschied $$ \Delta I = 0.1 $$ gemäß der nichtlinearen [PGV - Intensitätsbeziehung][sec:pgv_intensity] entsprechen.

## Ausbreitung der Bodenerschütterung
Das [Video {{ page.videos.main_pgvcontour.number }}][vid:main_pgvcontour] zeigt die Ausbreitung der Bodenerschütterung.

{% include insert_video.html key="main_pgvcontour" %}


## Seismogramme

In der [Gallerie {{page.galleries.main_seismogram.number}}][gal:main_seismogram] sind die Seismogramme aller zur zeit des Erdbebens aktiven Stationen des MSS Neztwerks dargestellt. Die Amplituden der Seismogramme sind für jeden Kanal individuell skaliert. Die maximale PGV ist für jeden Kanal angegeben. Die Seismogramme sind nach der aufsteigenden Epizentraldistanz der Stationen sortiert. Als Hypozentrum wurde die Lokalisierung der ZAMG verwendet.

{% include insert_gallery.html key="main_seismogram" %}


[sec:amplification_factors]: {% link _doc/amplification_factors_and_interpolation.md %}
[sec:pgv_intensity]: {% link _doc/pgv.md %}
[sec:ems98]: /doc/pgv/#intensität-nach-ems-98

[fig:main_pgvcontour]: #{{page.figures.main_pgvcontour.label}}

[vid:main_pgvcontour]: #{{page.videos.main_pgvcontour.label}}

[gal:main_seismogram]: #{{page.galleries.main_seismogram.label}}

