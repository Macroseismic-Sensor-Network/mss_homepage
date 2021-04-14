---
layout: doc_page
lang-ref: realtime_view
type: section
parent: interactive_map
nav_order: 2
title: "Ansichtsmodus Aktuell"
subheadline: "Die aktuellen Daten des MSS Netzwerks."
teaser: "Im Ansichtsmodus Aktuell werden die Daten des MSS Netzwerks in annähernd Echtzeit dargestellt. Die maximalen Bodengeschwindigkeitswerte (PGV) werden farb- und größenkodiert auf der Karte dargestellt und Zeitreihen ausgewählter Stationen können mitverfolgt werden."
description: "Die Beschreibung der aktuellen Ansicht des MSS Netzwerks, die die Daten des MSS Netzwerks in annähernd Echtzeit aufbereitet."
image_dir: doc/interactive_map/realtime_view/

figures:
    realtime_view:
        label: "fig:realtime_view"
        number: 1
        filename: "mss_vis_realtime_view.jpg"
        caption: "Kartenansicht im Ansichtsmodus Aktuell."
        
    map_view:
        label: "fig:map_view"
        number: 2
        filename: "mss_vis_map_view.jpg"
        caption: "Kartenansicht im Ansichtsmodus Aktuell."
    
    current_events:
        label: "fig:current_events"
        number: 3
        filename: "mss_vis_realtime_view_current_events.jpg"
        caption: "Informationsabschnitt Aktuelle Ereignisse."
        
    station_details:
        label: "fig:station_details"
        number: 4
        filename: "mss_vis_realtime_view_station_details.jpg"
        caption: "Informationsabschnitt Stationsdetails mit der Anzeige der beiden Stationen PITT und WOPF."
        
    pgv_track:
        label: "fig:pgv_track"
        number: 5
        filename: "mss_vis_realtime_view_pgv_tracks.jpg"
        caption: "Ansichtsmodus Aktuell mit zwei PGV Tracks der Stationen PITT und WOPF."
    
    metadata_table:
        label: "fig:metadata_table"
        number: 6
        filename: "mss_vis_realtime_view_table_view.jpg"
        caption: "Metadatentabelle im Ansichtsmodus Aktuell. Es wird eine Liste mit Metadaten und aktuellen Daten der Stationen angezeigt."
---

Im Ansichtsmodus _Aktuell_ (siehe [Abbildung {{ page.figures.realtime_view.number }}][fig:realtime_view]) werden die Daten des MSS Netzwerks in annähernd Echtzeit angezeigt. Durch die Datenakquisition und die Datenverarbeitung ergibt sich eine Verzögerung der angezeigten Daten zur aktuellen Zeit. Diese Verzögerung beträgt bei den Daten des MSS Netzwerks im Schnitt zwischen 10 und 20 Sekunden.

Die Aktualisierung der Datenwerte erfolgt alle 10 Sekunden.

Beim Ansichtsmodus _Aktuell_ ist die Hintergrundkarte im vollen Farbumfang dargestellt. Dadurch ist dieser Ansichtsmodus klar von der [Archivansicht][1], bei der die Hintergrundkarten entsättigte Farben haben, unterscheidbar. Im Informationspanel zeigen den Status des Servers, die aktuellen detektierten Ereignisse und Details zu ausgewählten Stationen.

{% include insert_image.html key="realtime_view" %}


## Kartenansicht
{% include insert_image.html key="map_view" %}

In der Kartenansicht (dargestellt in [Abbildung {{ page.figures.map_view.number }}][fig:map_view]) werden die maximale Bodengeschwindigkeit (Peak Ground Velocity, PGV) der MSS Stationen als größen- und farbkodierte Kreise angezeigt. Die PGV Werte werden in der Einheit mm/s angezeigt.

Für jede Station werden jeweils zwei Kreise angezeigt. Der innere Kreis entspricht dem aktuellsten an der Station gemessenen PGV Wert. Der äußere, transparente Kreis stellt die maximale PGV der letzten 60 Sekunden dar. Damit lässt sich sehr schnell beurteilen, ob innerhalb dieser 60 Sekunden ein Ereignis stattfand, dass auf mehreren Stationen des Netzwerks einen hohen PGV Wert hervorrief.

Übersteigt der PGV Wert den Grenzwert von 0.1 mm/s, so wird die Kontur des Kreises rot eingefärbt. Der Grenzwert 0.1 mm/s gilt allgemein als Fühlbarkeitsschwelle. Ist die PGV oberhalb dieser Schwelle, wird angenommen, dass ein Großteil der Menschen die Bodenerschütterung wahrnimmt.

Stationen, für die keine aktuellen Daten vorhanden sind werden als kleine graue Kreise dargestellt.

Wird der Mauszeiger über eines der Kreissymbole gehalten, so erscheint ein Popup Fenster, in dem der Stationsname und die PGV Werte der Station angezeigt werden.

## Informationspanel

Im Informationspanel auf der rechten Seite sind die Informationsabschnitte _Status_, _Ereignis Monitor_, _Aktuelle Ereignisse_ und _Stationsdetails_ verfügbar.

### Status
Der Status zeigt einige Parameter, die den Zustand der Serververbindung und des Datentransports beschreiben.

Server Zeit
: Die Zeit des Servers zum Zeitpunkt des Sendens der letzten Daten vom Server an den Browser der Benutzer*in.

Server Status
: Der Server Status gibt den aktuellen Zustand zum MSS Datenserver an.

min. Verzögerung
: Die kleinste Verzögerung der aktuellen seismischen Daten der MSS Stationen relativ zur Server Zeit.

max. Verzögerung
: Die maximale Verzögerung der aktuellen seismischen Daten des MSS Stationen relativ zur Server Zeit.


### Ereignis Monitor

Der Ereignis Monitor zeigt den Zustand des Detektionsprozesses auf dem MSS Server an. Sobald der Beginn eines Ereignisses detektiert wurde, werden Details zu diesem aktuellen Ereignis im Ereignis Monitor dargestellt. In diesem Fall werden die folgenden Parameter des im Moment in der Detektion befindlichen Ereignisses dargestellt.

public_id
: Die eindeutige ID des Ereignisses.

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



### Aktuelle Ereignisse

{% include insert_image.html key="current_events" %}

Der in [Abbildung {{ page.figures.current_events.number }}][fig:current_events] dargestellte Informationsabschnitt _Aktuelle Ereignisse_ stellt die aktuellsten mit dem MSS Netzwerk detektierten Ereignisse dar. Die angezeigten Ereignisse können gefiltert werden. Der Filter _Wahrnehmbar_ zeigt nur jene Ereignisse an, deren maximale PGV Werte den Grenzwert von 0.1 mm/s (Fühlbarkeitsschwelle) überschritten haben.

Die Ereignisse werden als farbkodierte Rechtecke angezeigt. Die Farbe entspricht dem maximalen PGV Wert entsprechend der Farbskala in der Legende der [Kartenansicht][2]. Für jedes Ereignis wird der Startzeitpunkt des Ereignisses und die maximale PGV angezeigt.

Durch das anklicken eines Ereignissymbols wechselt man in die [Archivansicht][1], in der das ausgewählte Ereignis angezeigt wird.

### Stationsdetails

{% include insert_image.html key="station_details" %}

Im Informationsabschnitt _Stationsdetails_ (siehe [Abbildung {{ page.figures.station_details.number }}][fig:station_details]) können ausführliche Informationen zu ausgewählten Stationen angezeigt werden. Um die Details einer Station in diesem Abschnitt anzuzeigen, muss auf den Stationsmarker der gewünschten Station in der [Kartenansicht][2] geklickt werden. Die angezeigte Station kann über den _Schließen_ Button wieder aus dem Abschnitt entfernt werden.

Für jede Station werden einige Metadaten (Name, Beschreibung und der Network:Station:Location-Code) sowie die aktuellen Daten der Station angezeigt.

akt.PGV
: Der aktuelle PGV Wert der Station.

max. PGV
: Der maximale PGV Wert der letzten 60 Sekunden.

Verzögerung
: Die Verzögerung der aktuellen Daten relativ zur Server Zeit.

Mit dem Button _Zeige PGV Track_ kann die Zeitreihe der aktuellen PGV Werte der Station als [PGV Track][3] angezeigt werden. Der _Zeige PGV Track_ Button wechselt in diesem Falls zum _Verstecke PGV Track_ Button.
Wird der PGV Track der Station bereits angezeigt kann dieser über den _Verstecke PGV Track_ Button wieder ausgeblendet werden.

### PGV Track

{% include insert_image.html key="pgv_track" %}

Die PGV Tracks der ausgewählten Stationen erscheinen im [Tracks Panel][4] oberhalb der Kartenansicht (siehe [Abbildung {{ page.figures.pgv_track.number }}][fig:pgv_track]). Wird der Mauszeiger über die Zeitreihe geführt, so werden die Daten der Zeitreihe in einem Popup Fenster angezeigt. Überstieg der PGV Wert der angezeigten Zeitreihe den Wert von 0.1 mm/s, so wird die Zeitreihe orange eingefärbt.

Die Höhe der Tracks kann individuell durch ziehen der Trennleiste der Tracks geändert werden.

## Metadatentabelle

{% include insert_image.html key="metadata_table" %}

Die Metadatentabelle kann durch das ziehen der Trennleiste am unteren Rand der Kartenansicht angezeigt und in seiner Größe veränder werden (siehe [Abbildung {{ page.figures.metadata_table.number }}][fig:metadata_table]). Die Tabelle zeigt eine Liste mit Metadaten und aktuellen Messwerten der Stationen des MSS Netzwerks. Die Tabelle kann durch das klicken der Spaltenüberschrift entsprechend der gewählten Spalte auf- oder absteigend sortiert werden.

NSL Code
: Der Network:Station:Location Code der Station.

Name
: Der Name der Station.

Beschreibung
: Eine Kurzbeschreibung der Station.

MSS Seriennummer
: Die Seriennummer des MSS Datenrekorders, der an der Station plaziert ist.

Länge
: Geographische Länge der Position der Station.

Breite
: Geographische Breite der Position der Station.

Höhe
: Höhe über Meeresniveau der Position der Station.

PGV [mm/s]
: Aktueller Wert der an der Station gemessenen Peak-Ground-Velocity (maximale Bodengeschwindigkeit) im mm/s.

max. PGV letzte 60 s [mm/s]
: Wert der an der Station gemessenen maximalen Peak-Ground-Velocity während der letzten 60 Sekunden.

Verzögerung [s]
: Die Verzögerung der aktuellen Daten relativ zur Server Zeit.


[1]: {% link _doc/interactive_map/archive_view.md %}
[2]: #kartenansicht
[3]: #pgv-track
[4]: /doc/interactive_map/general_structure#tracks-panel
[fig:realtime_view]: #{{ page.figures.realtime_view.label }}
[fig:map_view]: #{{ page.figures.map_view.label }}
[fig:current_events]: #{{ page.figures.current_events.label }}
[fig:station_details]: #{{ page.figures.station_details.label }}
[fig:pgv_track]: #{{ page.figures.pgv_track.label }}
[fig:metadata_table]: #{{ page.figures.metadata_table.label }}
