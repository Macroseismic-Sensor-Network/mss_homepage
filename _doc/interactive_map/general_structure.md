---
layout: doc_page
lang-ref: general_structure
type: section
parent: interactive_map
nav_order: 1
title: "Hauptelemente"
subheadline: "Die grundlegenden Ansichtselemente der Karte."
teaser: "Die Kartenansicht besteht aus unterschiedlichen Elementen und Ansichtsmodi in denen die ausgewählten Informationen angezeigt werden."
description: "Die wichtigsten Elemente der Kartenansicht."
image_dir: doc/interactive_map/general_structure/

figures:
    main_elements:
        label: "fig:main_elements"
        number: 1
        filename: "mss_vis_main_elements_annotated.jpg"
        caption: "Hauptelemente der interaktiven Kartenansicht. Kartenansicht (1), Informationspanel (2), Tracks-Panel (3) und Tabellenpanel (4)."
        
    panel_resize:
        label: "fig:panel_resize"
        number: 2
        filename: "mss_vis_panel_resize_annotated.jpg"
        caption: "Größenänderung der Panele durch Drag-And-Drop der Trennleiste."
        
    map_view:
        label: "fig:map_view"
        number: 3
        filename: "mss_vis_map_view_annotated.jpg"
        caption: "Elemente der Kartenansicht. Ansichtsmodus Auswahl Button (1), Karten-Zoom Buttons (2), Kartenlayer Auswahl Button (3) und Kartenlegende (4)."
        
    information_panel:
        label: "fig:information_panel"
        number: 4
        filename: "mss_vis_information_panel_annotated.jpg"
        caption: "Das Informationspanel ist in ausklappbare Informationsabschitte unterteilt. Abschnitt (1) zeigt zum Beispiel den aktuellen Status der Kartenansicht. Zum aus- und einblenden der Informationsabschnitte kann das Drop-Down Button (2) verwendet werden."
        
    
---

Die interaktive Karte stellt für die Daten des MSS Netzwerks in unterschiedlichen Bereichen dar. Die dargestellten Informationen hängen von dem gewählten Ansichtsmodus ([Aktuelle Ansicht][1] oder [Archiv Ansicht][2]) und den Aktionen des Benutzers ab. Auf dieser Seite wird der prinzipielle Aufbau der Ansichtselemente vorgestellt.


## Ansichtselemente
Die Interaktive Karte gliedert sich in vier Hauptbereiche, die in [Abbildung {{ page.figures.main_elements.number }}][fig:main_elements] dargestellt sind:

 - Kartenansicht (1)
 - Informationspanel (2)
 - Tracks-Panel (3)
 - Tabellenpanel (4)

{% include insert_image.html key="main_elements" %}

Die Größe der Panele kann per Drag-And-Drop der Trennleiste zweier Panele verändert werden (siehe [Abbildung {{ page.figures.panel_resize.number }}][fig:panel_resize]). Durch das ziehen der Trennleiste an den Fensterrand kann das entsprechende Panel auch vollständig ausgeblendet werden. Durch einen Doppelklick auf die Trennleiste wird die Größe des zugehörigen Panels maximiert. Sollte für ein Panel keine darzustellende Information verfügbar sein, wird dieses Panel minimiert und es kann auch durch Drag-And-Drop nicht angezeigt werden. Ein Beispiel dieses Verhaltens ist das Tracks-Panel wenn keine Zeitreihen von Stationen angezeigt werden. 

{% include insert_image.html key="panel_resize" %}


## Kartenansicht

Die Kartenansicht in [Abbildung {{ page.figures.map_view.number }}][fig:map_view] ist das Kernstück der MSS Datenvisualisierung. Sie zeigt die Daten des jeweiligen Ansichtsmodus. Der Ansichtsmodus kann durch das anklicken des Buttons 1 im rechten oberen Eck gewechselt werden. In der Karte lässt sich wie von anderen Kartenanwendungen im Internet navigieren. Per Drag-And-Drop lässt sich die Karte verschieben und mit dem Mausrad kann die Karte vergrößert bzw. verkleinert werden. Das Zoomen der Karte kann alternativ mit den + und - Buttons (2) durchgeführt werden. Die Art der Hintergrundkarte kann über das Layer-Auswahl Button (3) ausgewählt werden.

Die Legende (4) im rechten unteren Eck stellt die Farb- und Größenkodierung der angezeigten Datenwerte dar.

{% include insert_image.html key="map_view" %}


## Informationspanel

[Abbildung {{ page.figures.information_panel.number }}][fig:information_panel] zeigt das Informationspanel mit dem ausgeklapptem Informationsabschnitt _Status_. Im Informationspanel werden Kontextabhängige Informationsabschnitte (1) angezeigt. Diese Abschnitte sind als ausklappbare Elemente realisiert und können über das Drop-Down Button (2) angezeigt bzw. wieder versteckt werden. Sollte für die Darstellung von Daten in einem Informationsabschnitt noch zusätzliche Benutzerinteraktionen notwendig sein, so wird das im jeweiligen Informationsabschnitt beschrieben.

{% include insert_image.html key="information_panel" %}


## Tracks-Panel

Das Tracks-Panel zeigt kontextabhängig die Daten von Zeitreihen an. Jede Zeitreihe wird als sogenannter _Track_ dargestellt. Sind mehrere Tracks im Tracks-Panel vorhanden, so kann die Höhe der einzelnen Tracks per Drag-And-Drop der Trennleiste verändert werden.


## Tabellenpanel

Im Tabellenpanel werden kontextabhängig Daten in Tabellenform dargestellt. Durch das klicken auf den Titel einer Spalte der Tabelle wird die Tabelle auf- oder absteigend entsprechend der ausgewählten Spalte sortiert.


[1]:{% link _doc/interactive_map/realtime_view.md %}
[2]:{% link _doc/interactive_map/archive_view.md %}

[fig:main_elements]: #{{ page.figures.main_elements.label }}
[fig:panel_resize]: #{{ page.figures.panel_resize.label }}
[fig:map_view]: #{{ page.figures.map_view.label }}
[fig:information_panel]: #{{ page.figures.information_panel.label}}
