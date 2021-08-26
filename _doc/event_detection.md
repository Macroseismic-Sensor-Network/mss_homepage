---
layout: doc_page
lang-ref: event_detection
type: chapter
parent: data_processing
nav_order: 7
title: "Ereignis Detektion"
subheadline: "Amplitudenbasiertes Erkennen von seismischen Ereignissen."
teaser: "Es ist wichtig im kontinuierlichen Datenstrom der Macroseismic-Sensoren signifikante seismische Ereignisse automatisiert zu detektieren und zu speichern um diese für eingehendere Analysen verfügbar zu machen, und um ein Archive der seismischen Aktivität im Messgebiet zu erstellen. "
description: ""
image_dir: doc/event_detection

figures:
    detection_sequence:
        label: fig:detection_sequence
        number: 1
        caption: Visualisierung der Sequenz einer Ereignis Detektion am Beispiel eines Erdbebens mit der Magnitude M_L = 2.5 am 19. Juni 2019. Es sind ausgewählte Zeitschritte der Detektion abgebildet, um den Verlauf der Triggerung der Delaunay Dreiecke darzustellen. Schwarze Kantenlinien der Dreiecke markieren Dreiecke, für die kein Trigger aktiv ist, rote Kantenlinien markieren Dreiecke mit einer aktiven Triggerung und grüne Kantenlinien markieren die Dreiecke, die dem Ereignis zugeordnet wurden, allerdings keine aktive Triggerung mehr besitzen.
        filename: intech_detection_sequence.png
        credit: "Brückl et.al., 2021"
---
Die MSS Stationen sind absichtlich in Gebäuden aufgestellt wo Menschen prinzipiell eine Bodenbewegung wahrnehmen und ihre Beobachtungen an seismische Observatorien melden können. Diese Aufstellungsorte zeigen generell ein erhöhtes Hintergrundrauschen, das vor allem durch die menschliche Aktivität verursacht wird. Es können auch hohe PGV Werte auftreten, die durch nahe Aktivitäten wie zum Beispiel Verkehr, Bauarbeiten oder Waschmaschinen verursacht werden.

Die Hauptaufgabe der automatisierten Detektion ist es zwischen diesen potentiell starken Störsignalen an einzelnen Stationen und regionalen Ereignissen wie Erdbeben oder Steinbruchsprengungen zu unterscheiden. Der MSS Detektionsalgorithmus basiert auf einer [Delaunay-Triangulation][lnk:delaunay]{:target="blank"} der Stationen des MSS-Netzwerks und der Bewertung der 3 PGV Werte eines jeden Dreiecks der Delaunay-Triangulation. Die Eckpunkte eines jeden Dreiecks bilden 3 MSS Stationen mit zugehörigen PGV Werten. In vorgegebenen Zeitintervallen (zur Zeit beträgt dieses 1 Sekunde) werden die PGV Werte der Dreiecke evaluiert. Sobald der minimale PGV-Wert der drei Stationen eine Dreiecks einen vorgegebenen Grenzwert überschreitet wird für dieses Dreieck ein Ereignis detektiert. Die Dauer dieses Ereignisses wird durch das triggern weiterer Dreiecke innerhalb eines bestimmten Zeitfensters seit der letzten Detektion verlängert. [Abbildung 1][fig:detection_sequence] zeigt exemplarisch den Verlauf einer Ereignisdetektion. 

Sobald die Detektion eines Ereignisses abgeschlossen ist, werden Kenndaten des Ereignisses in einer Datenbank abgespeichert und relevante Daten wie die Seismogramme und die PGV-Zeitreihe archiviert. Die archivierten Daten sowie daraus abgeleitete Auswertungen sind im [Archiv der interaktiven Visualisierung][lnk:archiv] abrufbar.

{% include insert_image.html key="detection_sequence" %}


[lnk:delaunay]: https://en.wikipedia.org/wiki/Delaunay_triangulation
[lnk:archiv]: {% link _doc/interactive_map/archive_view.md %}

[fig:detection_sequence]: #{{page.figures.detection_sequence.label}}
