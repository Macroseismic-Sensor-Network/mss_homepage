---
layout: doc_page
lang-ref: sensor
type: section
parent: instrumentation
title: "Sensor"
subheadline: "Der Macroseismic Sensor."
teaser: "Der Macroseismic Sensor ist ein low-cost Messgerät zur Aufzeichnung der Bodengeschwindigkeit. Er besteht aus einem Raspberry Pi, einer ADC-Platine und zwei bis drei Geofonen."
description: "Beschreibung des Macroseismic Sensors."
image_dir: doc/instrumentation/sensor

figures:
    sensor_description:
        label: "fig:sensor_description"
        number: 1
        filename: "Sensor-Beschreibung_web.jpg"
        caption: "Die wichtigsten Komponenten des MacroSeismic-Sensors."
        
    sensor_montage:
        label: "fig:sensor_montage"
        number: 2
        filename: "Sensor_montage_web.jpg"
        caption: "Die Montage eines MacroSeismic-Sensors."
        
    sensor_amp_response:
        label: "fig:sensor_amp_response"
        number: 3
        filename: "Sensor_Frequenzcharakteristik-1.jpg"
        caption: "Frequenzcharakteristik des MacroSeismic-Sensors. Die Linie *MSS* zeigt die Amplitudenantwort des MSS, *alias* den zu erwartenden Aliasingeffekts des digitalen Filters des Analog-Digital Wandlers und *M 1,5* das theoretische Quellspektrum eines Erbebens mit einer lokalen Magnitude von 1.5."
        
tables:
    mss_amplification:
        label: "tab:mss_amp"
        number: 1
        caption: "Verstärkungsfaktoren des MSS."
        data: "mss_amplification_de"
---


### Entwicklung des MacroSeismic-Senors
Der MacroSeismic Sensor (abgekürzt MSS) wurde im Rahmen der vom [BMWFW][1]{:target="blank"} geförderten [Sparkling Science][2]{:target="blank"} und Citizen Science Projekte [Schools & Quakes][3]{:target="blank"} und [QuakeWatch Austria][4]{:target="blank"} in einer Kooperation der [TU Wien][5]{:target="blank"} mit dem [TGM][6]{:target="blank"} und der [Mertl Research GmbH][7]{:target="blank"} entwickelt. Eine Serie der MacroSeismic-Sensoren wurde von Schüler\*innen der [HTL Wiener Neustadt][8]{:target="blank"} im Rahmen von Laborübungen gefertigt.


### Aufbau und Funktion
Die Ansicht des MSS ohne Gehäuse in [Abbildung {{ page.figures.sensor_description.number }}][fig:sensor_description] zeigt zwei, zueinander senkrecht stehende Horizontalgeophone (Eigenfrequenz 4,5 Hz) wandeln die entsprechenden Komponenten der Schwinggeschwindigkeit des Aufstellungsortes in ein elektrisches Signal. Nach einer einfachen Tiefpass-Filterung werden diese über 16 bit Analog – Digital Wandler (ADC) digitalisiert. Diese Komponenten befinden sich auf einer eigens gefertigten Platine. Der ADC wird von einem SBC (Single Board Computer) – in unserem Fall ein Raspberry Pi – gesteuert. Der SBC übernimmt auch die Formatierung der Daten in ein, in der Seismologie übliches Format (MSEED). Die exakte zeitliche Markierung der digitalen Daten erfolgt über NTP (Network Time Protocol). Die formatierten Daten werden über LAN / WLAN an einen eigenen Server gesandt. Von diesem Server werden die Daten zur weiteren Bearbeitung abgerufen.

{% include insert_image.html key="sensor_description" %}

### Installation und Betrieb
Für die Installation und den Betrieb des MacroSeismic-Sensors sind die folgenden Voraussetzungen notwendig:
* Möglichkeit der Montage des MSS an einer vertikalen, möglichst tragenden Wand; 
* kontinuierlich in Betrieb stehende LAN- oder WLAN Verbindung zum Montageort;
* 220V Steckdose in der Nähe (Entfernung zum MSS < 1.5 m).

Diese Voraussetzungen können vorab durch den jeweiligen Citizen Science Partner sichergestellt beziehungsweise vorbereitet werden. Nach entsprechender Vereinbarung wird sodann ein MSS getestet und betriebsbereit durch ein Mitglied des MacroSeismic-Sensor Teams an die geplante Messstelle gebracht und (gemeinsam mit dem Citizen Scientist) montiert und in Betrieb genommen. Die [Abbildung {{ page.figures.sensor_montage.number }}][fig:sensor_montage] zeigt einige Schritte der Montage eines MSS.

Bei einer Internetanbindung über LAN ist nach dem Anschließen des Netzgerätes an die 220V Steckdose der MSS bereits in Betrieb. Die Internetanbindung über WLAN erfordert noch die Eingabe der WLAN Daten (SSID, password, encryption). Dies erfolgt derzeit noch durch das begleitende Mitglied des MacroSeismic-Sensor Teams.

{% include insert_image.html key="sensor_montage" %}


### Empfindlichkeit und Frequenzcharakteristik
Der MacroSeismic Sensor arbeitet mit dem 16 Bit Analog-Digital Wandler (ADC) ADS1114 von Texas Instruments. Dieser ADC hat eine Eingangsspannung (Fullscale Range) von +/- 4.096 V und kann diesen Spannungsbereich auf 2<sup>16</sup> Zahlenwerte, den sogenannten *Counts* aufteilen. Daraus ergibt sich das nominale Bitweight, das angibt, wieviel Volt ein Count entspricht. Für den ADS1114 ergibt sich ein Bitweigth von 125 &mu;V. Weiters verfügt der ADC über einen programmierbaren Vorverstärker, der als Programmable Gain Amplifier (PGA) bezeichnet wird. Für das MSS Netzwerk werden je nach Aufstellungsort die Vorverstärkungsfaktoren (gain) 8 und 16 verwendet.

Als Geofone werden R.T.Clark 4.5 Hz Geofone verwendet. Diese verfügen über eine Sensitivität $$ \mathrm{sensitivity}_{geo} $$ von 27 V/m/s.

Für die Empfindlichkeit des MacroSeismic-Sensors $$ S_{mss} $$gilt:

$$
S_{mss} = \frac{\mathrm{bitweight}}{\mathrm{gain} * \mathrm{sensitivity}_{geo}}
$$

Mit dieser Formel und den zuvor angegebenen Werten lässt sich die Empfindlichkeit der MacroSeismic-Sensoren bestimmen. Diese gibt die Amplitude der Bodengeschwindigkeit an, die mit einem Count des ADC dargestellt werden kann. In [Tabelle {{ page.tables.mss_amplification.number }}](#{{ page.tables.mss_amplification.label }}) sind die Empfindlichkeiten des MacroSeismic-Sensors für unterschiedliche Verstärkungsfaktoren angegeben.

{% include insert_table.html key="mss_amplification" %}


[Abbildung {{ page.figures.sensor_amp_response.number }}][fig:sensor_amp_response] zeigt die normalisierte Amplitudenantwort eines MacroSeismic-Sensors. Die Amplitudenantwort ist durch die Amplitudenantworten des 4.5 Hz Geofons, des Anti-Aliasing Filters und des Analog-Digital Wandlers bestimmt. Der Vergleich mit der Amplitudenantwort eines theoretischen Quellspektrums eines Erdbebens der Magnitude M = 1.5 zeigt die Frequenzabdeckung des MSS im Falle eines Erdbebens. Der potentielle Beitrag zum Signalinhalt durch vom Aliasing beeinflusste Frequenzbereiche ist durch die strichlierte Kurve _alias_ dargestellt.

{% include insert_image.html key="sensor_amp_response" %}


[1]: https://www.bmbwf.gv.at/
[2]: https://www.sparklingscience.at/
[3]: https://www.sparklingscience.at/en/projects/show.html?--typo3_neos_nodetypes-page[id]=857
[4]: https://www.zamg.ac.at/cms/de/forschung/geophysik/forschung-erdbeben/quake-watch
[5]: https://www.tuwien.ac.at/
[6]: https://www.tgm.ac.at/
[7]: http://www.mertl-research.at/
[8]: http://www.htlwrn.ac.at/

[tab:mss_amp]: #{{ page.tables.mss_amplification.label }}
[fig:sensor_description]: #{{ page.figures.sensor_description.label }}
[fig:sensor_montage]:#{{ page.figures.sensor_montage.label }}
[fig:sensor_amp_response]:#{{ page.figures.sensor_amp_response.label }}
