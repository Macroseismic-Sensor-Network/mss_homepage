---
title: "Erdbeben Neunkirchen am 20. April 2021"
subheadline: "Ein weiteres starkes Erdbeben in der Region Neunkirchen."
teaser: "Am 20. April kurz vor 1 Uhr nachts ereignete sich ein weiteres starkes Erbeben mit dem Epizentrum im Gebiet von Neunkirchen. Das Erdbeben hatte eine maximale Intensität I = V und war wieder sehr großräumig wahrnehmbar."

license: cc-by-sa-4.0
copyright:
    date: 2021
    author: MSS Team
    
categories: 
    - review
    
tags:
    - review
    - earthquake

image_dir: posts/2021/02_erdbeben_neunkirchen_20_april

image:
    header: "header_erdbeben_neunkirchen_20_april.jpg"


figures:
    main_pgvcontour:
        label: fig:main_pgvcontour
        number: 1
        filename: mss_dsrt_2021-04-19T225714500000_pgvcontour.jpg
        caption: "Interpolierte PGV Werte des Erdbebens am 20.4.2021 um 00:57:14 lokaler Zeit. Bei den interpolierten Daten wurden die stationsabhängigen Verstärkungsfaktoren berücksichtigt. Die Farben der Stationsmarker (gefüllte Kreise) entsprechen den an diesen Orten gemessenen Werten ohne Berücksichtigung der Verstärkungsfaktoren."
        
        
videos:
    main_pgvcontour:
        label: vid:main_pgvcontour
        number: 1
        filename: mss_dsrt_2021-04-19T225714500000_pgvcontoursequence.mp4
        caption: "Animation der interpolierten PGV Werte des Erbebens am 20.4.2021. Der Zeitunterschied zwischen zwei Bildern entspricht 1 Sekunde."
        
galleries:
    main_seismogram:
        label: gal:main_seismogram
        number: 1
        caption: "Die Seismogramme des Hauptbebens."
        images:
            - filename: mss_dsrt_2021-04-19T225714500000_seismogram_panel_00.png
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV.
            - filename: mss_dsrt_2021-04-19T225714500000_seismogram_panel_01.png
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV
            - filename: mss_dsrt_2021-04-19T225714500000_seismogram_panel_02.png
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV
            - filename: mss_dsrt_2021-04-19T225714500000_seismogram_panel_03.png
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV
            - filename: mss_dsrt_2021-04-19T225714500000_seismogram_panel_04.png
              caption: Die PGV Werte am rechten Rand entsprechen dem Betrag der maximalen PGV
              
    aftershock_contours:
        label: gal:aftershock_contours
        number: 2
        caption: "PGV Konturlinien der Nachbeben."
        images:
            - filename: mss_dsrt_2021-04-19T230538500000_pgvcontour.jpg
            - filename: mss_dsrt_2021-04-20T033851500000_pgvcontour.jpg
            - filename: mss_dsrt_2021-04-20T051611500000_pgvcontour.jpg
            - filename: mss_dsrt_2021-04-20T171743500000_pgvcontour.jpg
            - filename: mss_dsrt_2021-04-20T174021500000_pgvcontour.jpg
            - filename: mss_dsrt_2021-04-20T180121500000_pgvcontour.jpg
              
              
tables:
    aftershocks:
        label: tab:aftershocks
        number: 1
        caption: "Erdbeben, die am 20. April vom MSS Netzwerk registriert wurden. Bei der maximalen PGV sind die stationsabhängigen Verstärkungsfaktoren berücksichtig."
        data: 2021_02_erdbeben_neunkirchen_20_april_aftershocks

---

## Hauptbeben

Das Hauptbeben mit einer maximalen **Intensität I = V** wurde am 20. April um 00:57:14 Ortszeit vom MSS Netzwerk detektiert. Die vom MSS Netzwerk gemessene maximale Bodengeschwindigkeit (Peak-Ground-Velocity, PGV) dieses Ereignisses betrug 16.76 mm/s und wurde an der Station PUBE in Puchberg aufgezeichnet. Das Erdbeben war im gesamten Bereich des MSS Netzwerks deutlich zu spüren und wurde in weiten Teilen Österreichs wahrgenommen. Die Interpolation der gemessenen PGV Werte ist in [Abbildung {{ page.figures.main_pgvcontour.number }}][fig:main_pgvcontour] dargestellt.

Mit Hilfe dieser Konturlinien der maximalen PGV lässt sich die Region, innerhalb der das Epizentrum des Bebens liegt bestimmen. Die Amplitude der seismischen Wellen nimmt mit der Entfernung vom Epizentrum ab, demnach muss das Epizentrum in der Region der maximalen PGV liegen.

Da die an der Erdoberfläche gemessenen Amplituden neben der Quellstärke des Erdbebens von vielen weiteren Faktoren wie der Geologie des Untergrunds, dem Messort oder die Ankopplung des Sensors an den Boden, abhängen, ist eine punktuelle Bestimmung des Epizentrums nicht sinnvoll. Es bietet sich vielmehr an, die erste oder zweite Konturlinie unterhalb der maximalen Konturlinie zur Eingrenzung der Epizentrum-Region zu verwenden. 

Der in der Karte in [Abbildung {{ page.figures.main_pgvcontour.number }}][fig:main_pgvcontour] dargestellte maximale PGV Wert von 10.37 mm/s entspricht dem Maximum der interpolierten Werte, bei denen die stationsabhängigen Verstärkunsfaktoren berücksichtig sind (siehe Abschitt [Verstärkungsfaktoren und Interpolation][sec:amplification_factors] der Dokumentation). Aus diesem Grund unterscheidet er sich vom oben angegebenen gemessenen Maximum.

{% include insert_image.html key="main_pgvcontour" %}

Die Konturlinien der interpolierten PGV Werte sind in Abständen gezeichnet, die einem Intensitätsunterschied $$ \Delta I = 0.1 $$ gemäß der nichtlinearen [PGV - Intensitätsbeziehung][sec:pgv_intensity] entsprechen.

## Ausbreitung der Bodenerschütterung
Das [Video {{ page.videos.main_pgvcontour.number }}][vid:main_pgvcontour] zeigt die Ausbreitung der Bodenerschütterung.

{% include insert_video.html key="main_pgvcontour" %}


## Seismogramme

In der [Gallerie {{page.galleries.main_seismogram.number}}][gal:main_seismogram] sind die Seismogramme aller Stationen des MSS Neztwerks dargestellt. Die Amplituden der Seismogramme sind für jeden Kanal individuell skaliert. Die maximale PGV ist für jeden Kanal angegeben.

{% include insert_gallery.html key="main_seismogram" %}


# Nachbeben

Am 20. April wurden nach dem starken Beben um 00:57 sechs weitere Erdbeben, die die Fühlbarkeitschwelle überschritten haben, detektiert. Das Hauptbeben und die darauf folgenden Erdbeben sind in [Tabelle {{ page.tables.aftershocks.number }}][tab:aftershocks] aufgelistet. Bei den beiden letzten Beben um 19:40:21 und 20:01:21 verlagerte sich die Region der maximalen Intensität in die Region um Gloggnitz und Puchberg.

{% include insert_table.html key="aftershocks" %}

In der [Gallerie {{page.galleries.aftershock_contours.number}}][gal:aftershock_contours] sind die Konturlinien der 6 Nachbeben abgebildet.

{% include insert_gallery.html key="aftershock_contours" ncol=2%}




[sec:amplification_factors]: {% link _doc/amplification_factors_and_interpolation.md %}
[sec:pgv_intensity]: {% link _doc/pgv.md %}

[fig:main_pgvcontour]: #{{page.figures.main_pgvcontour.label}}

[vid:main_pgvcontour]: #{{page.videos.main_pgvcontour.label}}

[gal:main_seismogram]: #{{page.galleries.main_seismogram.label}}
[gal:aftershock_contours]:#{{page.galleries.aftershock_contours.label}}

[tab:aftershocks]: #{{page.tables.aftershocks.label}}
