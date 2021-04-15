---
layout: doc_page
lang-ref: publications
type: chapter
nav_order: 100
title: "Publikationen"
subheadline: "Publikationen mit Bezug zum MSS Netzwerk"
teaser: "Die Bibliografie gibt einen Überblick über Publikationen, die vom MSS Team verfasst wurden, oder die einen direkten Bezug zum MSS Netzwerk haben."
description: "Publikationen mit Bezug zum MSS Netzwerk."
image_dir: doc/publications
---

## Mit Beteiligung vom MSS Team

{% capture n_documents %}{% bibliography_count --query @article[category = mss_team] %}{% endcapture %}
{% if n_documents != "0" %}
<h3>Artikel in Journalen</h3>
{% bibliography --query @article[category = mss_team] %}
{% endif %}

{% capture n_documents %}{% bibliography_count --query @incollection[category = mss_team]@inbook[category = mss_team] %}{% endcapture %}
{% if n_documents != "0" %}
<h3>Beiträge in Büchern</h3>
{% bibliography --query @incollection[category = mss_team]@inbook[category = mss_team] %}
{% endif %}

{% capture n_documents %}{% bibliography_count --query @report[category = mss_team]@techreport[category = mss_team] %}{% endcapture %}
{% if n_documents != "0" %}
<h3>Berichte</h3>
{% bibliography --query @report[category = mss_team]@techreport[category = mss_team] %}
{% endif %}

{% capture n_documents %}{% bibliography_count --query @*[group = undergraduate_thesis && category = mss_team] %}{% endcapture %}
{% if n_documents != "0" %}
<h3>Abschlussarbeiten an Schulen</h3>
{% bibliography --query @*[group = undergraduate_thesis && category = mss_team] %}
{% endif %}

{% capture n_docs_conference %}{% bibliography_count --query @*[group = conference && category = mss_team] %}{% endcapture %}
{% if n_docs_conference != "0" %}
<h3>Präsentationen auf Konferenzen</h3>
{% bibliography --query @*[group = conference && category = mss_team] %}
{% endif %}

