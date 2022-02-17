---
title: "Erdbebenschwarm Wiener Neustadt"
subheadline: "ZAMG Informationen zum Erdbebenschwarm."
teaser: "Die Zentralanstalt für Meteorologie und Geodynamik veröffentlichte einen Artikel zur aktuellen hohen Seismizität in der Region Wiener Neustadt. Auch in den Daten des MSS Netzwerks zeigt sich diese hohe seismische Aktivität durch die Detektion von 5 potenziell wahrnehmbaren Erdbeben seit 19. Jänner 2022"


license: cc-by-sa-4.0
copyright:
    date: 2022
    author: MSS Team
    
categories: 
    - background
    
tags:


image_dir: posts/2022/09_erdbebenschwarm_wiener_neustadt_zamg

image:
    header: "header_schwarm.jpg"


figures:
    swarm_timeline:
        label: fig:swarm_timeline
        number: 1
        filename: schwarm_wrneustadt_zamg.jpg
        caption: "Zeitliche Verteilung der registrierten Magnituden unter Wr. Neustadt. Die Beben, für die Wahrnehmungsmeldungen bei der ZAMG eingegangen sind haben neongrüne Symbole (Stand 16. Feb., 11:00 Uhr MEZ, Vollständigkeit der Daten: 15.  Feb., 13:00 Uhr MEZ)."
        credit: "ZAMG"
        
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

Zur Zeit ist im Raum Wiener Neustadt eine erhöhte Seismizität zu Beobachten. Mit dem MSS Netzwerk wurden seit 19. Jänner 2022 fünf potenziell wahrnehmbare Erdbeben mit der Intensität II (kaum bemerkbar,  [EMS-98][sec:ems98]) registriert (siehe [Gallerie {{page.galleries.felt_earthquakes.number}}][gal:felt_earthquakes]). Diese wahrnehmbaren Erdbeben sind Teil eines sogenannten [Erdbebenschwarms][lnk:erdbebenschwarm]{:target="blank"}. Bei einem Erdbebenschwarm kommt es innerhalb einer meist relativ kleinen Region während eines begrenzten Zeitraums zu einer Häufung von Erdbeben.

{% include insert_gallery.html key="felt_earthquakes" %}


Die Zentralanstalt für Meteorologie und Geophysik hat auf ihrer Homepage einen [Artikel mit Details zu diesem Schwarm][lnk:artikel_zamg]{:target="blank"} veröffentlicht. Die aus diesem Artikel entnommene Grafik in [Abbildung {{ page.figures.swarm_timeline.number }}][fig:swarm_timeline] zeigt den zeitlichen Verlauf des Erdbebenschwarms. Auf der [Liste der aktuellen Erdbeben der ZAMG][lnk:erdbebenliste]{:target="blank"} sind weitere Details zu den Erdbeben des Schwarms abrufbar.

Die fünf stärksten Erdbeben dieser Zeitreihe, für die auch Wahrnehmungsmeldungen bei der ZAMG eingegangen sind (grün markierte Symbole), entsprechen den fünf Erdbeben, die mit dem MSS Netzwerk registriert wurden. Aus der Zeitreihe der ZAMG ist ersichtlich, dass für zwei weitere schwächere Erdbeben (Magnitude ca. 1.5) Wahrnehmungsmeldungen eingegangen sind. Für diese beiden Beben wurden vom MSS Netzwerk keine potentiell fühlbare Ereignisse detektiert. Dies kann dadurch zustande kommen, dass die individuelle Wahrnehmung durch einzelne Personen stark von deren Empfindlichkeit auf Bodenerschütterung und Aufenthaltsort (z.B. hohes Gebäude) abhängt. Das MSS Netzwerk kann diese Wahrnehmungsunterschiede, besonders im Grenzbereich der Wahrnehmbarkeitschwelle nicht immer eindeutig abbilden.


{% include insert_image.html key="swarm_timeline" %}


[sec:ems98]: /doc/pgv/#intensität-nach-ems-98

[lnk:erdbebenschwarm]: https://de.wikipedia.org/wiki/Erdbebenschwarm
[lnk:artikel_zamg]: https://www.zamg.ac.at/cms/de/geophysik/news/registrierung-des-erdbebenschwarms-unter-wr.-neustadt
[lnk:erdbebenliste]: https://www.zamg.ac.at/cms/de/geophysik/erdbeben/aktuelle-erdbeben/karten-und-listen/bebenkarte/austria

[fig:swarm_timeline]: #{{page.figures.swarm_timeline.label}}

[gal:felt_earthquakes]: #{{page.galleries.felt_earthquakes.label}}
