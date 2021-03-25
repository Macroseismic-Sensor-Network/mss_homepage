---
layout: doc_page
lang-ref: sensor
type: section
parent: instrumentation
title: "Sensor"
subheadline: "Der Macroseismic Sensor."
teaser: ""
description: "Beschreibung des Macroseismic Sensors."
image_dir: doc/instrumentation/sensor
---


### Entwicklung des MacroSeismic-Senors
Der MacroSeismic Sensor (abgekürzt MSS) wurde im Rahmen der vom [BMWFW][1]{:target="blank"} geförderten [Sparkling Science][2]{:target="blank"} und Citizen Science Projekte [Schools & Quakes][3]{:target="blank"} und [QuakeWatch Austria][4]{:target="blank"} in einer Kooperation der [TU Wien][5]{:target="blank"} mit dem [TGM][6]{:target="blank"} und der [Mertl Research GmbH][7]{:target="blank"} entwickelt. Eine Serie der MacroSeismic-Sensoren wurde von Schüler\*innen der [HTL Wiener Neustadt][8]{:target="blank"} im Rahmen von Laborübungen gefertigt.


### Aufbau und Funktion
Zwei, zueinander senkrecht stehende Horizontalgeophone (Eigenfrequenz 4,5 Hz) wandeln die entsprechenden Komponenten der Schwinggeschwindigkeit des Aufstellungsortes in ein elektrisches Signal. Nach einer einfachen Tiefpass-Filterung werden diese über 16 bit Analog – Digital Wandler (ADC) digitalisiert. Diese Komponenten befinden sich auf einer eigens gefertigten Platine. Der ADC wird von einem SBC (Single Board Computer) – in unserem Fall ein Raspberry Pi – gesteuert. Der SBC übernimmt auch die Formatierung der Daten in ein, in der Seismologie übliches Format (MSEED). Die exakte zeitliche Markierung der digitalen Daten erfolgt über NTP (Network Time Protocol). Die formatierten Daten werden über LAN / WLAN an einen eigenen Server gesandt. Von diesem Server werden die Daten zur weiteren Bearbeitung abgerufen.

{% include insert_image img="Sensor-Beschreibung_web.jpg" caption="Die wichtigsten Komponenten des MacroSeismic-Sensors."%}

### Installation und Betrieb
Für die Installation und den Betrieb des MacroSeismic-Sensors sind die folgenden Voraussetzungen notwendig:
* Möglichkeit der Montage des MSS an einer vertikalen, möglichst tragenden Wand; 
* kontinuierlich in Betrieb stehende LAN- oder WLAN Verbindung zum Montageort;
* 220V Steckdose in der Nähe (Entfernung zum MSS < 1.5 m).

Diese Voraussetzungen können vorab durch den jeweiligen Citizen Science Partner sichergestellt beziehungsweise vorbereitet werden. Nach entsprechender Vereinbarung wird sodann ein MSS getestet und betriebsbereit durch ein Mitglied des MacroSeismic-Sensor Teams an die geplante Messstelle gebracht und (gemeinsam mit dem Citizen Scientist) montiert und in Betrieb genommen. Bei einer Internetanbindung über LAN ist nach dem Anschließen des Netzgerätes an die 220V Steckdose der MSS bereits in Betrieb. Die Internetanbindung über WLAN erfordert noch die Eingabe der WLAN Daten (SSID, password, encryption). Dies erfolgt derzeit noch durch das begleitende Mitglied des MacroSeismic-Sensor Teams.

{% include insert_image img="Sensor_montage_web.jpg" caption="Die Montage eines MacroSeismic-Sensors."%}


### Empfindlichkeit und Frequenzcharakteristik
Der MacroSeismic Sensor arbeitet mit dem 16 Bit Analog-Digital Wandler (ADC) ADS1114 von Texas Instruments. Dieser ADC hat eine Eingangsspannung (Fullscale Range) von +/- 4.096 V und kann diesen Spannungsbereich auf 2<sup>16</sup> Zahlenwerte, den sogenannten *Counts* aufteilen. Daraus ergibt sich das nominale Bitweight, das angibt, wieviel Volt ein Count entspricht. Für den ADS1114 ergibt sich ein Bitweigth von 125 &mu;V. Weiters verfügt der ADC über einen programmierbaren Vorverstärker, der als Programmable Gain Amplifier (PGA) bezeichnet wird. Für das MSS Netzwerk werden je nach Aufstellungsort die Vorverstärkungsfaktoren (gain) 8 und 16 verwendet.

Als Geofone werden R.T.Clark 4.5 Hz Geofone verwendet. Diese verfügen über eine Sensitivität $$ \mathrm{sensitivity}_{geo} $$ von 28.8 V/m/s.

Für die Empfindlichkeit des MacroSeismic-Sensors $$ S_{mss} $$gilt:

$$
S_{mss} = \frac{\mathrm{bitweight}}{\mathrm{gain} * \mathrm{sensitivity}_{geo}}
$$

Mit dieser Formel und den zuvor angegebenen Werten lässt sich die Empfindlichkeit der MacroSeismic-Sensoren bestimmen. Diese gibt die Amplitude der Bodengeschwindigkeit an, die mit einem Count des ADC dargestellt werden kann. Es ergeben sich die folgenden Empfindlichkeiten des MacroSeismic-Sensors:

|--------------------+-----------------------------------|
| Verstärkung (gain) | MSS Empfindlichkeit &mu;m/s/count |
|--------------------|-----------------------------------|
| 8                  | 0.54                              |
| 16                 | 0.27                              |
|--------------------+-----------------------------------|

{% include insert_image img="Sensor_Frequenzcharakteristik-1.jpg" caption="Frequenzcharakteristik des MacroSeismic-Sensors. Die Linie *MSS* zeigt die Amplitudenantwort des MSS, *alias* den zu erwartenden Aliasingeffekts des digitalen Filters des Analog-Digital Wandlers und *M 1,5* das theoretische Quellspektrum eines Erbebens mit einer lokalen Magnitude von 1.5."%}




[1]: https://www.bmbwf.gv.at/
[2]: https://www.sparklingscience.at/
[3]: https://www.sparklingscience.at/en/projects/show.html?--typo3_neos_nodetypes-page[id]=857
[4]: https://www.zamg.ac.at/cms/de/forschung/geophysik/forschung-erdbeben/quake-watch
[5]: https://www.tuwien.ac.at/
[6]: https://www.tgm.ac.at/
[7]: http://www.mertl-research.at/
[8]: http://www.htlwrn.ac.at/
