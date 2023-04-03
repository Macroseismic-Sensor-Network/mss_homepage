---
title: "Jahresbericht 2022"
subheadline: "Ereignisse und Aktivitäten im Jahr 2022"
teaser: "Der MSS Jahresbericht 2022 gibt einen Überblick über die registrierten Ereignisse, die verwendeten Auswertemethoden und Aktivitäten rund um das MSS Netzwerk."


license: cc-by-sa-4.0
copyright:
    date: 2023
    author: MSS Team
    
categories: 
    - background
    
tags:


image_dir: posts/2023/01_jahresbericht_2022

image:
    header: "header_jahresbericht.jpg"


figures:
    earthquakes-magnitudes:
        label: fig:earthquakes-magnitudes
        number: 1
        filename: earthquakes_mss_magnitudes_with_errorbar.png
        caption: "MSS Magnitude (epi-auto) der Erdbeben mit Schwankungsbreite und die von Geosphere Austria bestimmten Magnituden (geosphere). Die Schwankungsbreite ist der Interquartilsabstand der Stationsmagnituden"
        
    blasts-duernbach:
        label: fig:blasts-duernbach
        number: 2
        filename: blasts_duernbach_pgv_linechart.png
        caption: Gemessene PGV Werte an Stationen des MSS Netzwerks in der Nähe des Steinbruchs Dürnbach.
        
    blasts-pfaffenberg:
        label: fig:blasts-pfaffenberg
        number: 3
        filename: blasts_pfaffenberg_pgv_linechart.png
        caption: Gemessene PGV Werte an Stationen des MSS Netzwerks in der Nähe des Steinbruchs Pfaffenberg.
        
    earthquakes-epicenters:
        label: fig:earthquakes-epicenters
        number: 4
        filename: earthquakes_epicenters_with_auto_mag.jpg
        caption: Automatisch berechnete Epizentren und MSS Magnituden der detektierten Erdbeben.
        
    duernbach-epicenters:
        label: fig:duernbach-epicenters
        number: 5
        filename: blasts_duernbach_epicenters_with_auto_mag.png
        caption: Automatisch berechnete Epizentren der Sprengungen im Steinbruch Dürnbach.
        
videos:

galleries:
    felt_earthquakes:
        label: gal:felt_earthquakes
        number: 1
        caption: "Die potenziell fühlbaren Erdbeben des Schwarms, die mit dem MSS Netzwerk registriert wurden."
        images:
            - filename: mss_dsrt_2022-01-19T050524500000_pgvcontour.jpg
              caption: Erdbeben am 19. Jänner 2022.
            - filename: mss_dsrt_2022-02-06T012523500000_pgvcontour.jpg
              caption: Erdbeben am 6. Februar 2022.
            - filename: mss_dsrt_2022-02-09T202955500000_pgvcontour.jpg
              caption: Erdbeben am 9. Februar 2022.
            - filename: mss_dsrt_2022-02-10T172301500000_pgvcontour.jpg
              caption: Erdbeben am 10. Februar 2022.
            - filename: mss_dsrt_2022-02-15T024814500000_pgvcontour.jpg
              caption: Erdbeben am 15. Februar 2022.
---

Der MSS Jahresbericht steht als Download im PDF Format zu Verfügung: [MSS Jahresbericht 2022][lnk:mss-jahresbericht-2022].

Im Jahr 2022 wurden 16 potentiell fühlbare Erdbeben innerhalb des Bereichs des MSS Netzwerks registriert. Des weiteren wurden 76 Sprengungen im Steinbruch Dürnbach, sowie 63 Sprengungen im Steinbruch Pfaffenberg detektiert und ausgewertet. Abbildung {{ page.figures.earthquakes-magnitudes.number }} zeigt die MSS Magnituden der detektierten Erdbeben. In Abbildung {{ page.figures.blasts-duernbach.number }} und {{ page.figures.blasts-pfaffenberg.number }} sind die gemessenen PGV Werte für die Sprengungen im Steinbruch Dürnbach und Pfaffenberg dargestellt.

Im Jahr 2022 wurde die Archivdarstellung des MSS Katalogs stark erweitert sowie eine automatische Lokalisierung und Magnitudenberechnung implementiert. In Abbildung {{ page.figures.earthquakes-epicenters.number }} und {{ page.figures.duernbach-epicenters.number }} sind die berechneten Epizentren der Erdbeben und der Sprengungen im Steinbruch Dürnbach dargestellt.

Details zu den Messdaten und Auswertemethoden sind im  [MSS Jahresbericht 2022][lnk:mss-jahresbericht-2022] beschrieben.

{% include insert_image.html key="earthquakes-magnitudes" %}

{% include insert_image.html key="blasts-duernbach" %}

{% include insert_image.html key="blasts-pfaffenberg" %}

{% include insert_image.html key="earthquakes-epicenters" %}

{% include insert_image.html key="duernbach-epicenters" %}


[lnk:mss-jahresbericht-2022]: /assets/doc/reports/bericht_202303-01_1-0_mss-2022.pdf
