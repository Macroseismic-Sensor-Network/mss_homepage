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
---

Im Ansichtsmodus _Archiv_ können die Daten archivierten Ereignisse angezeigt werden. In diesen Ansichtsmodus kann über das [Ansichtsmodus-Button][2] im rechten oberen Eck der Kartenansicht gewechselt werden oder indem im Ansichtsmodus _Aktuell_ ein Ereignis im Informationsabschnitt [Aktuelle Ereignisse][4] angeklickt wird. Um den Archiv Ansichtsmodus eindeutig vom [Ansichtsmodus Aktuell][6] zu unterscheiden, sind die Farben aller Hintergrundkarten entsättigt.

Für jedes detektierte Ereignis werden auf dem MSS Server automatisch Zusatzdaten berechnet und als GeoJSON Dateien abgespeichert. Diese Zusatzdaten enthalten zum Beispiel die maximalen PGV Werte an den Stationen des MSS Netzwerks, den zeitlichen Verlauf der PGV Werte oder die Konturlinien einer Interpolation der PGV Werte.

Sobald vom Benutzer ein Ereignis in der [Metadatentabelle][3] im [Tabellenpanel][1] ausgewählt wurde werden die verfügbaren Zusatzdaten des Ereignisses vom MSS Server geladen und zur Anzeige in der Kartenansicht im Zusatzdaten Abschnitt des Informationspanels zu Verfügung gestellt. Über eine Zeitleiste im linken unteren Eck der Kartenansicht kann durch Zusatzdaten, die eine Zeitreihe enthalten navigiert werden.

{% include insert_image img="mss_vis_archive_view.jpg" caption="Visualisierung der Daten im Ansichtsmodus Archiv." %}

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

Im Informationsabschnitt _Zusatzdaten_ werden die für das ausgewählte Ereignis verfügbaren Zusatzdaten angezeigt. Die jeweiligen Zusatzdaten können als eigenständige Ebenen in der Karte eingeblendet werden. Zum ein- und Ausblenden können die Buttons mit dem Auge-Symbol (rechts außen) verwendet werden. Das volle Auge zeigt an, dass die entsprechende Ebene in der Karte angezeigt wird, ein durchgestrichenes Auge markiert eine versteckte Ebene.

Die Zusatzdaten können auch über das Download Button (links neben dem Auge-Symbol) im [GeoJSON][5]{:target="blank"} Dateiformat heruntergeladen werden.

{% include insert_image img="mss_vis_archive_view_complementary_data.jpg" caption="Informationsabschnitt Zusatzdaten im Ansichtsmodus Archiv. Über das Auge-Symbol können die Zusatzdaten ein- bzw. ausgeblendet werden. Mit dem Download-Button können die Zusatzdaten im GeoJSON Dateiformat heruntergeladen werden." %}

### PGV Stationsmarker

Die Zusatzdaten _PGV Stationsmarker_ beinhalten die maximalen PGV Werte während des Ereignisses. Die Darstellung der PGV Werte erfolgt als farb- und größenkodierte Kreissymbole an der Position der zugehörigen Station. Stationen, für die keine Daten vorhanden sind werden als kleine graue Kreissymbole angezeigt.

Wird der Mauszeiger über eines der Kreissymbole gehalten erscheint der Name der Station und der zugehörige PGV Wert in einem Popup-Fenster.

{% include insert_image img="mss_vis_archive_view_pgv_station_markers.jpg" caption="Darstellung der maximalen PGV Werte während des ausgewählten Ereignisses als Kreissymbole." %}

### PGV Voronoizellen

Die Zusatzdaten _PGV Voronoizellen_ beinhalten die Voronoizellen des [Voronoi-Diagramms][7] des MSS Netzwerks und den zugehörigen maximalen PGV Werte des Ereignisses. Nur die Stationen, für die während des Ereignisses Daten vorhanden waren werden für die Berechnung des Voronoi-Diagramms verwendet.

Die opaken Voronoizellen sind jene Zellen, deren Station bei der Detektion des Ereignisses getriggert wurde. Das heißt, daß diese Station zumindest einmal wären der Zeitdauer des Ereignisses das Triggerkriterium erfüllt hat.

Die transparenten Zellen markieren jene Stationen, die nicht bei der Detektion des Ereignisses getriggert wurden. Der angezeigte PGV Wert dieser Zellen entspricht dem maximalen PGV Wert während der Zeitspanne des Ereignisses.

Wird der Mauszeiger über eine der Zellen gehalten erscheint der maximale PGV Werte sowie der Name der Station an welcher dieser gemessen wurde in einem Popup-Fenster.

{% include insert_image img="mss_vis_archive_view_pgv_voronoi_cells.jpg" caption="Darstellung der maximalen PGV Werte während des ausgewählten Ereignisses als Voronoi-Diagramm." %}

### PGV Konturlinien

Die Zusatzdaten _PGV Konturlinien_ beinhalten die Konturlinien der Interpolation der maximalen PGV Werte der Stationen während der Zeitdauer des Ereignisses. Die Interpolation erfolgt durch Kriging der logarithmischen PGV Werte mit einem linearen Variogramm Modell. 

Wird der Mauszeiger über eine der Konturflächen gehalten, so erscheint der dieser Kontourfläche zugeordnete PGV Wert in einem Popup-Fenster. Zusätzlich wird die diesem PGV Wert zugeordnete Intensität der makroseismischen Intensitätsskale EMS-98 angezeigt. Die Konturlinien wurden für die PGV Werte berechnete, die den Intensitäten von 1 bis 6 in Schritten von 0.5 entsprechen. Die folgende Tabelle zeigt die Zuordnung der PGV Werte zu Intensitäten.

{% include insert_image img="mss_vis_archive_view_pgv_contour_lines.jpg" caption="Darstellung der maximalen PGV Werte während der Zeitdauer des Ereignisses mit Konturlinien der interpolierten PGV Werte." %}


| PGV [MM/S] | INTENSITÄT | DEFINITION | BESCHREIBUNG |
|------------|------------|------------|--------------|
| < 0.1 | 1 | nicht fühlbar | Nicht fühlbar. |
| 0.1   | 2 | kaum bemerkbar | Nur sehr vereinzelt von ruhenden Personen wahrgenommen. |
| 0.316 | 3 | schwach | Von wenigen Personen in Gebäuden wahrgenommen. Ruhende Personen fühlen ein leichtes Schwingen oder Erschüttern |
| 1.0   | 4 | deutlich | Im Freien vereinzelt, in Gebäuden von vielen Personen wahrgenommen. Einige Schlafende erwachen. Geschirr und Fenster klirren, Türen klappern. |
| 10.0  | 5 | stark | Im Freien von wenigen, in Gebäuden von den meisten Personen wahrgenommen. Viele Schlafende erwachen. Wenige werden verängstigt. Gebäude werden insgesamt erschüttert. Hängende Gegenstände pendeln stark, kleine Gegenstände werden verschoben. Türen und Fenster schlagen auf oder zu. |
| 100.0 | 6 | leichte Gebäudeschäden | Viele Personen erschrecken und flüchten ins Freie. Einige Gegenstände fallen um. An vielen Häusern, vornehmlich in schlechterem Zustand, entstehen leichte Schäden wie feine Mauerrisse und das Abfallen von z.B. kleinen Verputzteilen. |

Table: Zuordnung der PGV Werte zu Intensitäten der makroseismischen Intensitätsskala EMS-98.


### PGV Stationsmarker Zeitreihe
<video controls style="width: 100%;">
	<source src="/images/{{ page.image_dir | append: 'mss_vis_archive_view_pgv_marker_timeseries.mp4' }}" type="video/mp4">
</video>


### PGV Voronoizellen Zeitreihe
<video controls style="width: 100%;">
	<source src="/images/{{ page.image_dir | append: 'mss_vis_archive_view_pgv_voronoi_cells_timeseries.mp4' }}" type="video/mp4">
</video>


## Metadatentabelle



[1]: /doc/interactive_map/general_structure#tabellenpanel
[2]: /doc/interactive_map/general_structure#kartenansicht
[3]: #metadatentabelle
[4]: /doc/interactive_map/realtime_view#aktuelle-ereignisse
[5]: https://geojson.org/
[6]: {% link _doc/interactive_map/realtime_view.md %}
[7]: https://de.wikipedia.org/wiki/Voronoi-Diagramm
