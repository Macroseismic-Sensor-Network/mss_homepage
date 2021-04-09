---
title: "Erdbeben Neunkirchen 30. März 2021"
subheadline: "Starkes Erdbeben mit einer maximalen Intensität von V."
teaser: "Am 30. März 2021 um 18:25 Ortszeit ereignete sich ein starkes Erdbeben im Raum Neunkirchen. Vom MSS Netzwerk wurde dieses Beben, das großräumig wahrgenommen wurde, mit einer maximalen Bodengeschwindigkeit von 16.7 mm/s aufgezeichnet. Neben dem Hauptbeben am 30. März wurden bis zum 9.4. noch 4 Nachbeben, deren Bodenerschütterungen die Fühlbarkeitsschwelle überschritten haben, registriert."

license: cc-by-sa-4.0
copyright:
    date: 2021
    author: MSS Team
    
categories: 
    - review
    
tags:
    - review
    - earthquake

image_dir: posts/2021/01_erdbeben_neunkirchen

image:
    header: "header_erdbeben_neunkirchen.jpg"


figures:
    main_pgvcontour:
        label: fig:main_pgvcontour
        number: 1
        filename: mss_dsrt_2021-03-30T162500500000_pgvcontour.jpg
        caption: "Interpolierte PGV Werte des Hauptbebens am 30.3.2021. Bei den interpolierten Daten wurden die stationsabhängigen Verstärkungsfaktoren berücksichtigt. Die Farben der Stationsmarker (gefüllte Kreise) entsprechen den an diesen Orten gemessenen Werten ohne Berücksichtigung der Verstärkungsfaktoren."
        
        
videos:
    main_pgvcontour:
        label: vid:main_pgvcontour
        number: 1
        filename: mss_dsrt_2021-03-30T162500500000_pgvcontoursequence.mp4
        caption: "Animation der interpolierten PGV Werte des Hauptbebens am 30.3.2021. Der Zeitunterschied zwischen zwei Bildern entspricht 1 Sekunde."
        
galleries:
    main_seismogram:
        label: gal:main_seismogram
        number: 1
        caption: "Die Seismogramme des Hauptbebens."
        images:
            - filename: mss_dsrt_2021-03-30T162500500000_seismogram_panel_00.png
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV.
            - filename: mss_dsrt_2021-03-30T162500500000_seismogram_panel_01.png
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV
            - filename: mss_dsrt_2021-03-30T162500500000_seismogram_panel_02.png
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV
            - filename: mss_dsrt_2021-03-30T162500500000_seismogram_panel_03.png
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV
            - filename: mss_dsrt_2021-03-30T162500500000_seismogram_panel_04.png
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV
              
    aftershock_contours:
        label: gal:aftershock_contours
        number: 2
        caption: "PGV Konturlinien der Nachbeben."
        images:
            - filename: mss_dsrt_2021-03-31T102201500000_pgvcontour.jpg
            - filename: mss_dsrt_2021-04-02T201216500000_pgvcontour.jpg
            - filename: mss_dsrt_2021-04-04T183422500000_pgvcontour.jpg
            - filename: mss_dsrt_2021-04-09T015146500000_pgvcontour.jpg
              
              
tables:
    aftershocks:
        label: tab:aftershocks
        number: 1
        caption: Nachbeben des Erdbebens am 30.3.2021. Bei der maximalen PGV sind die stationsabhängigen Verstärkungsfaktoren berücksichtig."
        data: 2021_01_erdbeben_neunkirchen_aftershocks

---

## Hauptbeben

Das Hauptbeben mit einer maximalen **Intensität I = V** wurde am 30. März um 18:25:00 Ortszeit vom MSS Netzwerk detektiert. Die vom MSS Netzwerk gemessene maximale Bodengeschwindigkeit (Peak-Ground-Velocity, PGV) dieses Ereignisses betrug 16.682 mm/s und wurde an der Station ERLA in Bad Erlach aufgezeichnet. Das Erdbeben war im gesamten Bereich des MSS Netzwerks deutlich zu spüren. Die Interpolation der gemessenen PGV Werte ist in [Abbildung {{ page.figures.main_pgvcontour.number }}][fig:main_pgvcontour] dargestellt.

Mit Hilfe dieser Konturlinien der maximalen PGV lässt sich die Region innerhalb der das Epizentrum des Bebens liegt bestimmen. Die Amplitude der seismischen Wellen nimmt mit der Entfernung vom Epizentrum ab, demnach muss das Epizentrum in der Region der maximalen PGV liegen. Da die an der Erdoberfläche gemessenen Amplituden neben der Quellstärke des Erdbebens von vielen weiteren Faktoren wie der Geologie des Untergrunds, dem Messort oder die Ankopplung des Sensors an den Boden, abhängen, ist eine punktuelle Bestimmung des Epizentrums nicht sinnvoll. Es bietet sich vielmehr an, die erste oder zweite Konturlinie unterhalb der maximalen Konturlinie zur Eingrenzung der Epizentrum-Region zu verwenden. 

Der in dieser Karte dargestellte maximale PGV Wert von 12.793 mm/s entspricht dem Maximum der interpolierten Werte, bei denen die stationsabhängigen Verstärkunsfaktoren berücksichtig sind (siehe Abschitt [Verstärkungsfaktoren und Interpolation][sec:amplification_factors] der Dokumentation). Aus diesem Grund unterscheidet er sich vom oben angegebenen gemessenen Maximum.

{% include insert_image.html key="main_pgvcontour" %}

Die Konturlinien der interpolierten PGV Werte sind in Abständen gezeichnet, die einem Intensitätsunterschied $$ \Delta I = 0.1 $$ gemäß der nichtlinearen [PGV - Intensitätsbeziehung][sec:pgv_intensity] entsprechen.

## Ausbreitung der Bodenerschütterung
Das [Video {{ page.videos.main_pgvcontour.number }}][vid:main_pgvcontour] zeigt die Ausbreitung der Bodenerschütterung.

{% include insert_video.html key="main_pgvcontour" %}


## Seismogramme

In der [Gallerie {{page.galleries.main_seismogram.number}}][gal:main_seismogram] sind die Seismogramme aller Stationen des MSS Neztwerks dargestellt. Die Amplituden der Seismogramme sind für jeden Kanal individuell skaliert. Die maximale PGV ist für jeden Kanal angegeben.

{% include insert_gallery.html key="main_seismogram" %}


# Nachbeben

Vom Zeitpunkt des Hauptbebens am 30. März bis zum 9. April wurden 4 Nachbeben detektiert, die die Fühlbarkeitschwelle überschritten. Das Hauptbeben und die 4 Nachbeben sind in [Tabelle {{ page.tables.aftershocks.number }}][tab:aftershocks] aufgelistet.

{% include insert_table.html key="aftershocks" %}

In der [Gallerie {{page.galleries.aftershock_contours.number}}][gal:aftershock_contours] sind die Konturlinien der 4 Nachbeben abgebildet.

{% include insert_gallery.html key="aftershock_contours" ncol=2%}




[sec:amplification_factors]: {% link _doc/amplification_factors_and_interpolation.md %}
[sec:pgv_intensity]: {% link _doc/pgv.md %}

[fig:main_pgvcontour]: #{{page.figures.main_pgvcontour.label}}

[vid:main_pgvcontour]: #{{page.videos.main_pgvcontour.label}}

[gal:main_seismogram]: #{{page.galleries.main_seismogram.label}}
[gal:aftershock_contours]:#{{page.galleries.aftershock_contours.label}}

[tab:aftershocks]: #{{page.tables.aftershocks.label}}
