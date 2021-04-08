---
layout: doc_page
lang-ref: archive_view
type: section
parent: interactive_map
nav_order: 3
title: "Ansichtsmodus Archiv"
subheadline: "Die archivierten Daten des MSS Netzwerks."
teaser: "In Ansichtsmodus Archiv können die detektierten Ereignisse des MSS Netzwerks durchsucht und deren Daten im Detail betrachtet werden. Für jedes Ereignis können die Kenndaten des Ereignisses auf der Karte dargestellt und für eine weitere Verwendung heruntergeladen werden."
description: "Die Beschreibung der Archivansicht des MSS Netzwerks."
image_dir: doc/interactive_map/archive_view/

figures:
    archive_view:
        label: "fig:archive_view"
        number: 1
        filename: "mss_vis_archive_view.jpg"
        caption: "Visualisierung der Daten im Ansichtsmodus Archiv."
        
    player_controls:
        label: "fig:player_controls"
        number: 2
        filename: "mss_vis_archive_view_player_controls.jpg"
        caption: "Abspielleiste für Zusatzdaten, die Zeitreihen enthalten. Die Anzeige der Zeit erfolgt in UTC oder lokaler"
        
    comp_data:
        label: "fig:comp_data"
        number: 3
        filename: "mss_vis_archive_view_complementary_data.jpg"
        caption: "Informationsabschnitt Zusatzdaten im Ansichtsmodus Archiv. Über das Auge-Symbol können die Zusatzdaten ein- bzw. ausgeblendet werden. Mit dem Download-Button können die Zusatzdaten im GeoJSON Dateiformat heruntergeladen werden."
        
    station_markers:
        label: "fig:station_markers"
        number: 4
        filename: "mss_vis_archive_view_pgv_station_markers.jpg"
        caption: "Darstellung der maximalen PGV Werte während des ausgewählten Ereignisses als Kreissymbole."
        
    voronoi_cells:
        label: "fig:voronoi_cells"
        number: 5
        filename: "mss_vis_archive_view_pgv_voronoi_cells.jpg"
        caption: "Darstellung der maximalen PGV Werte während des ausgewählten Ereignisses als Voronoi-Diagramm."
        
    pgv_contour_lines:
        label: "fig:pgv_contour_lines"
        number: 6
        filename: "mss_vis_archive_view_pgv_contour_lines.jpg"
        caption: "Darstellung der maximalen PGV Werte während der Zeitdauer des Ereignisses mit Konturlinien der interpolierten PGV Werte."
        
    event_table:
        label: "fig:event_table"
        number: 7
        filename: "mss_vis_archive_view_metadata_table.jpg"
        caption: "Tabelle der Ereignisse im Ansichtsmodus Archiv."
        
        
tables:
    pgv_to_intensity:
        label: "tab:pgv_to_intensity"
        number: 1
        caption: "Empirische Beziehung der PGV zur Intensität der EMS-98 Skala. Der PGV Wert entspricht jeweils der unteren Grenze des entsprechenden Intensitätsbereichs."
        data: "pgv_to_intensity_de"
        
videos:
    station_timeseries:
        label: "vid:station_timeseries"
        number: 1
        filename: "mss_vis_archive_view_pgv_marker_timeseries.mp4"
        caption: "Animation des Abspielens der PGV Stationsmarker Zeitreihe in der Archivansicht."
        
    voronoi_timeseries:
        label: "vid:voronoi_timeseries"
        number: 2
        filename: "mss_vis_archive_view_pgv_voronoi_cells_timeseries.mp4"
        caption: "Animationdes Abspielens der PGV Voronoizellen Zeitreihe in der Archivansicht."
---

Im Ansichtsmodus _Archiv_ können die Daten archivierten Ereignisse angezeigt werden (siehe [Abbildung {{ page.figures.archive_view.number }}][fig:archive_view]). In diesen Ansichtsmodus kann über das [Ansichtsmodus-Button][2] im rechten oberen Eck der Kartenansicht gewechselt werden oder indem im Ansichtsmodus _Aktuell_ ein Ereignis im Informationsabschnitt [Aktuelle Ereignisse][4] angeklickt wird. Um den Archiv Ansichtsmodus eindeutig vom [Ansichtsmodus Aktuell][6] zu unterscheiden, sind die Farben aller Hintergrundkarten entsättigt.

{% include insert_image.html key="archive_view" %}

Für jedes detektierte Ereignis werden auf dem MSS Server automatisch Zusatzdaten berechnet und als GeoJSON Dateien abgespeichert. Diese Zusatzdaten enthalten zum Beispiel die maximalen PGV Werte an den Stationen des MSS Netzwerks, den zeitlichen Verlauf der PGV Werte oder die Konturlinien einer Interpolation der PGV Werte.

Sobald vom Benutzer ein Ereignis in der [Metadatentabelle][3]{:target="blank"} im [Tabellenpanel][1] ausgewählt wurde werden die verfügbaren Zusatzdaten des Ereignisses vom MSS Server geladen und zur Anzeige in der Kartenansicht im Zusatzdaten Abschnitt des Informationspanels zu Verfügung gestellt. Über eine Abspielleiste (siehe [Abbildung {{ page.figures.player_controls.number }}][fig:player_controls]) im linken unteren Eck der Kartenansicht kann durch Zusatzdaten, die eine Zeitreihe enthalten navigiert werden. Durch einen Klick auf die Datums- und Zeitinformation in der Abspielleiste kann zwischen der [Universal Time Coordinated][9] (UTC) und der Mitteleuropäischen Zeit (MEZ) Zone gewechselt werden.

{% include insert_image.html key="player_controls" %}

## Ereignisdetails

Im Informationsabschitt Ereignisdetails werden die Metadaten des ausgewählten Ereignisses dargestellt.

public_id
: Die eindeutige ID des Ereignisses.

Status
: Der Status der Detektion.

Start
: Die Startzeit des detektierten Ereignisses.

Ende
: Die Endzeit des detektierten Ereignisses.

PGV
: Die Peak-Ground-Velocity (maximale Bodengeschwindigkeit) des Ereignisses.

Dauer
: Die Dauer des Ereignisses.

Anzahl der Detektionsdreiecke
: Die Anzahl der Dreiecke des Delaunay-Detektionsalgorithmus, die getriggert wurden. Das heißt, dass die PGV Werte aller drei Stationen des Dreiecks einen bestimmten Grenzwert überschritten haben.

getriggerte Stationen:
: Die Stationen, die getriggert wurden. Diese Stationen bilden die Eckpunkte der obigen Detektionsdreiecke.


## Zusatzdaten

Der in [Abbildung {{ page.figures.comp_data.number }}][fig:comp_data] dargestellte Informationsabschnitt _Zusatzdaten_ werden die für das ausgewählte Ereignis verfügbaren Zusatzdaten angezeigt. Die jeweiligen Zusatzdaten können als eigenständige Ebenen in der Karte eingeblendet werden. Zum ein- und Ausblenden können die Buttons mit dem Auge-Symbol (rechts außen) verwendet werden. Das volle Auge zeigt an, dass die entsprechende Ebene in der Karte angezeigt wird, ein durchgestrichenes Auge markiert eine versteckte Ebene.

Die Zusatzdaten können auch über das Download Button (links neben dem Auge-Symbol) im [GeoJSON][5]{:target="blank"} Dateiformat heruntergeladen werden.

Bei der Beurteilung der Zusatzdaten sind die [MSS Richtlinien][mss_guideline] bei der Verwendung von punktuellen Messdaten und der interpolierten, flächenhaften Darstellung zu berücksichtigen.

{% include insert_image.html key="comp_data" %}


### PGV Stationsmarker

Die Zusatzdaten _PGV Stationsmarker_ beinhalten die maximalen PGV Werte während des Ereignisses. Die Darstellung der PGV Werte erfolgt als farb- und größenkodierte Kreissymbole an der Position der zugehörigen Station. Stationen, für die keine Daten vorhanden sind werden als kleine graue Kreissymbole angezeigt (siehe [Abbildung {{ page.figures.station_markers.number }}][fig:station_markers]).

Wird der Mauszeiger über eines der Kreissymbole gehalten erscheint der Name der Station und der zugehörige PGV Wert in einem Popup-Fenster.

{% include insert_image.html key="station_markers" %}

### PGV Voronoizellen

Die Zusatzdaten _PGV Voronoizellen_ beinhalten die Voronoizellen des [Voronoi-Diagramms][7] des MSS Netzwerks und den zugehörigen maximalen PGV Werten des Ereignisses. Nur die Stationen, für die während des Ereignisses Daten vorhanden waren werden für die Berechnung des Voronoi-Diagramms verwendet. Die Darstellung der Voronoizellen erfolgt farbkodiert entsprechend den PGV Werten der Zellen (siehe [Abbildung {{ page.figures.voronoi_cells.number }}][fig:voronoi_cells]).

Die opaken Voronoizellen sind jene Zellen, deren Station bei der Detektion des Ereignisses getriggert wurde. Das heißt, daß diese Station zumindest einmal wären der Zeitdauer des Ereignisses das Triggerkriterium erfüllt hat.

Die transparenten Zellen markieren jene Stationen, die nicht bei der Detektion des Ereignisses getriggert wurden. Der angezeigte PGV Wert dieser Zellen entspricht dem maximalen PGV Wert während der Zeitspanne des Ereignisses.

Wird der Mauszeiger über eine der Zellen gehalten erscheint der maximale PGV Werte sowie der Name der Station an welcher dieser gemessen wurde in einem Popup-Fenster.

{% include insert_image.html key="voronoi_cells" %}

### PGV Konturlinien

Die Zusatzdaten _PGV Konturlinien_ beinhalten die Konturlinien der Interpolation der maximalen PGV Werte der Stationen während der Zeitdauer des Ereignisses. Die Interpolation erfolgt durch Kriging der logarithmischen PGV Werte mit einem linearen Variogramm Modell. Die Darstellung erfolgt farbkodiert entsprechend dem PGV Werten der Konturlinien (siehe [Abbildung {{ page.figures.pgv_contour_lines.number }}][fig:pgv_contour_lines]).

Wird der Mauszeiger über eine der Konturflächen gehalten, so erscheint der dieser Kontourfläche zugeordnete PGV Wert in einem Popup-Fenster. Zusätzlich wird die diesem PGV Wert zugeordnete Intensität der makroseismischen Intensitätsskale EMS-98 angezeigt. Die Konturlinien wurden für die PGV Werte berechnete, die den Intensitäten von 1 bis 6 in Schritten von 0.5 entsprechen. [Tabelle {{ page.tables.pgv_to_intensity.number }}][tab:pgv_to_intensity] zeigt die Zuordnung der PGV Werte zu Intensitäten. Eine detaillierte Beschreibung des Zusammenhangs zwischen der PGV und der Intensität ist im Abschnitt [PGV und Intensität][pgv_int] zu finden.

{% include insert_image.html key="pgv_contour_lines" %}

{% include insert_table.html key="pgv_to_intensity" %}


### PGV Stationsmarker Zeitreihe

Die Zusatzdaten _PGV Stationsmarker Zeitreihe_ beinhalten die maximalen PGV Werte des Ereignisses als Zeitreihe. Die Darstellung erfolgt analog zu den Zusatzdaten [PGV Stationsmarker][8]. Die Zeitreihe kann über die Abspielleiste abgespielt werden (siehe [Video {{ page.videos.station_timeseries.number }}][vid:station_timeseries]).

{% include insert_video.html key="station_timeseries" %}


### PGV Voronoizellen Zeitreihe
Die Zusatzdaten _PGV Voronoizellen Zeitreihe_ beinhalten eine Zeitreihe der Voronoizellen des Voronoi-Diagramms des MSS Netzwerks und den zugehörigen maximalen PGV Werten des Ereignisses. Die Darstellung erfolgt analog zu den Zusatzdaten [PGV Voronoizellen][10]. Die Zeitreihe kann über die Abspielleiste abgespielt werden (siehe [Video {{ page.videos.voronoi_timeseries.number }}][vid:voronoi_timeseries]).

{% include insert_video.html key="voronoi_timeseries" %}


## Ereignistabelle

Die Ereignistabelle zeigt eine Liste mit den Ereignissen, die mit dem MSS Netzwerk detektiert wurden (siehe [Abbildung {{ page.figures.event_table.number }}][fig:event_table]). Es werden die Ereignisse der letzten 30 Tage angezeigt. Die Tabelle kann durch das anklicken einer Spaltenüberschrift entsprechend der gewählten Spalte auf- oder absteigend sortiert werden.

{% include insert_image.html key="event_table" %}

public_id
: Die eindeutige ID des Ereignisses.

Start
: Die Startzeit des Ereignisses.

Ende
: Die Endzeit des Ereignisses.

Dauer [s]
: Die Dauer des Ereignisses in Sekunden.

PGV [mm/s]
: Die maximale Bodengeschwindigkeit (Peak-Ground-Velocity, PGV) des Ereignisses in mm/s.

#Detektionen
: Die Anzahl der Detektionsdreiecke, die während des Ereignisses getriggert wurden.

#Stationen
: Die Anzahl der Stationen, die währende des Ereignisses getriggert wurden.


[1]: /doc/interactive_map/general_structure#tabellenpanel
[2]: /doc/interactive_map/general_structure#kartenansicht
[3]: #ereignistabelle
[4]: /doc/interactive_map/realtime_view#aktuelle-ereignisse
[5]: https://geojson.org/
[6]: {% link _doc/interactive_map/realtime_view.md %}
[7]: https://de.wikipedia.org/wiki/Voronoi-Diagramm
[8]: #pgv-stationsmarker
[9]: https://de.wikipedia.org/wiki/Koordinierte_Weltzeit
[10]: #pgv-voronoizellen
[mss_guideline]: {% link _doc/amplification_factors_and_interpolation.md %}
[pgv_int]: {% link _doc/pgv.md %}

[fig:archive_view]: #{{ page.figures.archive_view.label }}
[fig:player_controls]: #{{ page.figures.player_controls.label }}
[fig:comp_data]: #{{ page.figures.comp_data.label }}
[fig:station_markers]: #{{ page.figures.station_markers.label }}
[fig:voronoi_cells]: #{{ page.figures.voronoi_cells.label }}
[fig:pgv_contour_lines]: #{{ page.figures.pgv_contour_lines.label }}
[fig:event_table]: #{{ page.figures.event_table.label }}

[tab:pgv_to_intensity]: #{{ page.tables.pgv_to_intensity.label }}

[vid:station_timeseries]: #{{ page.videos.station_timeseries.label }}
[vid:voronoi_timeseries]: #{{ page.videos.voronoi_timeseries.label }}

