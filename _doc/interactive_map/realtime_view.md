---
layout: doc_page
lang-ref: realtime_view
type: section
parent: interactive_map
nav_order: 2
title: "Aktuelle Ansicht"
subheadline: "Die aktuellen Daten des MSS Netzwerks."
teaser: "In der aktuellen Ansicht werden die Daten des MSS Netzwerks in annhähernd Echtzeit dargestellt. Die maximalen Bodengeschwindigkeitswerte (PGV) werden farb- und größenkodiert auf der Karte dargestellt und Zeitreihen ausgewählter Stationen können mitverfolgt werden."
description: "Die Beschreibung der aktuellen Ansicht des MSS Netzwerks, die die Daten des MSS Netzwerks in annähernd Echtzeit aufbereitet."
image_dir: doc/interactive_map/realtime_view/
---

Im Ansichtsmodus _Aktuell_ werden die Daten des MSS Netzwerks in annähernd Echtzeit angezeigt. Durch die Datenakquisition und die Datenverarbeitung ergibt sich eine Verzögerung der angezeigten Daten zur aktuellen Zeit. Diese Verzögerung beträgt bei den Daten des MSS Netzwerks im Schnitt zwischen 10 und 20 Sekunden.

Die Aktualisierung der Datenwerte erfolgt alle 10 Sekunden.

Beim Ansichtsmodus _Aktuell_ ist die Hintergrundkarte im vollen Farbumfang dargestellt. Dadurch ist dieser Ansichtsmodus klar von der [Archivansicht][1], bei der die Hintergrundkarten entsättigte Farben haben, unterscheidbar.



## Kartenansicht
{% include insert_image img="mss_vis_map_view.jpg" caption="Kartenansicht im Ansichtsmodus Aktuell." %}

In der Kartenansicht werden die maximale Bodengeschwindigkeit (Peak Ground Velocity, PGV) der MSS Stationen als größen- und farbkodierte Kreise angezeigt. Die PGV Werte werden in der Einheit mm/s angezeigt.

Für jede Station werden jeweils zwei Kreise angezeigt. Der innere Kreis entspricht dem aktuellsten an der Station gemessenen PGV Wert. Der äußere, transparente Kreis stellt die maximale PGV der letzten 60 Sekunden dar. Damit lässt sich sehr schnell beurteilen, ob innerhalb dieser 60 Sekunden ein Ereignis stattfand, dass auf mehreren Stationen des Netzwerks einen hohen PGV Wert hervorrief.

Übersteigt der PGV Wert den Grenzwert von 0.1 mm/s, so wird die Kontur des Kreises rot eingefärbt. Der Grenzwert 0.1 mm/s wird allgemein als Fühlbarkeitsschwelle. Ist die PGV oberhalb dieser Schwelle, wird angenommen, dass ein großteil der Menschen die Bodenerschütterung wahrnimmt.

Stationen, für die keine aktuellen Daten vorhanden sind werden als kleine graue Kreise dargestellt.

Wird der Mauszeiger über eines der Kreissymbole gehalten, so erscheint ein Popup Fenster, in dem der Stationsname und die PGV Werte der Station angezeigt werden.

## Status

## Ereignis Monitor

## Aktuelle Ereignisse

## Stationsdetails

## Tabellenansicht

[1]: {% link _doc/interactive_map/archive_view.md %}
