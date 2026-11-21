# BK Bau – Grobkonzept Website & SEO

Stand: 21.11.2026 · Entwurf zur Abstimmung

## 1. Ausgangslage (aus Flyer, Visitenkarte, WhatsApp)

| | |
|---|---|
| Firma | BK Bau |
| Claim | Renovierung · Montage · Innenausbau |
| Slogans | „Gemeinsam für Ihr Zuhause“, „Ihr Zuhause. Unser Handwerk.“, „Ihr neues Zuhause ist nur einen Anruf entfernt.“ |
| Adresse | Im Oberdorf 6 B, 86720 Nördlingen-Löpsingen |
| Telefon | +49 171 2037784 (auch WhatsApp) |
| E-Mail | Anfrage.bkbau@gmail.com |
| Gebiet | Nördlingen und Umgebung |
| Design | Schwarz/Anthrazit + Gold/Kupfer, Haus-Dach-Logo, diagonale Goldlinien |

**Leistungen:** Trockenbau · Bodenverlegearbeiten (Laminat, Vinyl, PVC, Teppich, Parkett) · Montagearbeiten (Türen, Fenster, Zargen, Möbel, Küchen) · Kleinreparaturen & Hausmeisterservice · Garten- & Grundstückspflege · Entrümpelung & Entkernung

## 2. Zielgruppen

1. **Privatleute / Eigenheimbesitzer** im Ries – Renovierung, neuer Boden, Küche aufbauen
2. **Vermieter & Hausverwaltungen** – Hausmeisterservice, Wohnungen zwischen Mietern herrichten
3. **Erben / Senioren / Umzug** – Entrümpelung, Haushaltsauflösung, Gartenpflege

## 3. Keyword-Strategie (lokales SEO)

Ein kleiner Handwerksbetrieb gewinnt bei Google **nicht** mit „Trockenbau“, sondern mit **Leistung + Ort**. Suchende tippen z. B. „Laminat verlegen Nördlingen“ oder „Hausmeisterservice Ries“.

| Priorität | Keyword-Cluster | Ziel-Seite |
|---|---|---|
| A | Handwerker Nördlingen · Renovierung Nördlingen · Innenausbau Nördlingen | Startseite |
| A | Trockenbau Nördlingen · Trockenbau Donau-Ries | /trockenbau |
| A | Boden verlegen Nördlingen · Laminat / Vinyl / Parkett verlegen Nördlingen | /bodenverlegung |
| A | Hausmeisterservice Nördlingen · Hausmeister Ries | /hausmeisterservice |
| A | Entrümpelung Nördlingen · Haushaltsauflösung Nördlingen · Entkernung | /entruempelung |
| B | Küchenmontage Nördlingen · Türen einbauen · Möbelmontage | /montage |
| B | Gartenpflege Nördlingen · Heckenschnitt · Grundstückspflege | /gartenpflege |
| C | Ortsnamen: Oettingen, Wemding, Harburg, Wallerstein, Deiningen, Möttingen, Bopfingen, Donauwörth | Einsatzgebiet-Abschnitt, später ggf. eigene Seiten |

**Größter Hebel:** Entrümpelung und Hausmeisterservice haben lokal oft wenig Konkurrenz und viele Anfragen – diese Seiten früh ausbauen.

## 4. Seitenstruktur

**Phase 1 (jetzt, Onepager – umgesetzt in `index.html`):**
Hero (H1 mit Keyword + Ort) → Leistungen (6 Karten, je H3 mit Keyword) → Über uns → Ablauf in 4 Schritten → Einsatzgebiet (Ortsliste) → FAQ → Kontakt (NAP) → Footer

**Phase 2 (Ausbau für Rankings):**
```
/                       Startseite
/trockenbau/            je ca. 500–800 Wörter echter Text,
/bodenverlegung/        eigene Fotos, FAQ, Kontakt-Button
/montage/
/hausmeisterservice/
/gartenpflege/
/entruempelung/
/referenzen/            Vorher-Nachher-Fotos echter Projekte
/kontakt/
/impressum/  /datenschutz/
```

## 4b. Design-Richtung: „Apple-Style“

Was Apple.com ausmacht – und wie es hier umgesetzt ist:

| Apple-Prinzip | Umsetzung bei BK Bau |
|---|---|
| Schmale, transluzente Navigation (Milchglas) | 48 px Leiste mit Blur, kleine Schrift, „Anrufen“-Pill |
| Riesige, zentrierte Schlagzeilen, enge Laufweite | „Gemeinsam für Ihr Zuhause.“ bis 96 px, Gold-Verlauf |
| Kurze, rhythmische Taglines | „Laminat, Vinyl, Parkett. Perfekt verlegt.“ / „Räume. Neu gedacht.“ |
| Produkt-Kacheln im Wechsel Schwarz/Hellgrau | Jede Leistung eine Kachel, große Bilder, 12 px Abstand im 2er-Raster |
| Viel Weißraum, wenig Text pro Bildschirm | Max. ein Gedanke pro Abschnitt |
| Pill-Buttons + „Mehr erfahren ›“-Links | Gold statt Apple-Blau (Markenfarbe aus Flyer) |
| Horizontal wischbare Karten / Galerie | „Warum BK Bau“-Karten, Projekt-Galerie |
| Sanftes Einblenden beim Scrollen | Fade-up + leichter Bild-Zoom (abschaltbar über „Bewegung reduzieren“) |
| Kleiner grauer Footer mit Spalten | Leistungen / BK Bau / Kontakt |

Die Bilder aus der bisherigen Seite (BK-BAU-modernisiert.html) wurden als einzelne WebP-Dateien unter `img/` abgelegt statt 3,4 MB eingebettet → deutlich schnellere Ladezeit (wichtiger Google-Rankingfaktor „Core Web Vitals“). Es sind weiterhin Beispielbilder.

## 5. Bereits eingebaute SEO-Technik

- `<title>` und Meta-Description mit Hauptkeywords, Ort und Telefonnummer
- Saubere Überschriften-Hierarchie (eine H1, H2 je Abschnitt, H3 je Leistung)
- **Schema.org-Daten:** `HomeAndConstructionBusiness` (Adresse, Telefon, Leistungen, Einsatzorte) + `FAQPage`
- **NAP** (Name, Adresse, Telefon) identisch an allen Stellen
- Mobile-first: feste Anruf- / WhatsApp-Leiste unten auf dem Handy
- Schnell: eine Datei, keine externen Schriften/Skripte, keine Bilder → sehr gute Ladezeit
- Keine Google Fonts eingebunden (DSGVO-Abmahnrisiko in DE)
- Zurzeit `noindex`: Seite liegt als Entwurf unter fremder Domain und hat noch kein Impressum

## 6. Was außerhalb der Website am meisten bringt

1. **Google-Unternehmensprofil** (Google Maps) anlegen – für lokale Handwerker wichtiger als die Website selbst. Kategorie z. B. „Trockenbauunternehmen“ + Zusatzkategorien „Hausmeisterdienst“, „Entrümpelungsdienst“, „Bodenleger“. Exakt dieselbe Adresse/Telefon wie auf der Website.
2. **Google-Bewertungen** von jedem zufriedenen Kunden aktiv einholen (QR-Code auf Visitenkarte/Rechnung).
3. **Einträge** in Branchenverzeichnissen: Gelbe Seiten, Das Örtliche, 11880, MyHammer, Check24-Profis – immer gleiche NAP-Daten.
4. **Eigene Domain**, z. B. `bk-bau-noerdlingen.de` oder `bkbau-ries.de` (Ort in der Domain hilft leicht).
5. Später eigene E-Mail auf der Domain (wirkt seriöser als Gmail).

## 7. Offene Punkte – brauche ich vom Kunden

- [ ] **Vollständiger Inhabername** (Pflicht fürs Impressum, § 5 DDG) – einziger offener Platzhalter in impressum.html + datenschutz.html
- [x] Rechtsform: Einzelunternehmen, Kleinunternehmer § 19 UStG
- [ ] Wirtschafts-Identifikationsnummer, sobald vom BZSt zugeteilt
- [ ] **Echte Fotos** von eigenen Projekten (die Flyer-Bilder sind KI-generiert – für Website/Google sind echte Vorher-Nachher-Bilder deutlich besser)
- [ ] Logo als Datei (SVG/PNG in hoher Auflösung)
- [ ] Wunsch-Domain: bkbau.de gewünscht (vermutlich vergeben) → Verfügbarkeit bei denic.de prüfen, sonst bkbau-noerdlingen.de
- [ ] Gibt es schon ein Google-Unternehmensprofil?
- [ ] Wofür steht „BK“? (Gründer-Initialen → persönliche „Über uns“-Geschichte wirkt vertrauensbildend)
- [ ] Gewünschte Schwerpunkt-Leistungen (womit wird am meisten Geld verdient?)
- [x] Bisherige Seite „BK-BAU-modernisiert.html“ erhalten und eingearbeitet (Bilder übernommen)

## 8. Nächste Schritte

1. Entwurf prüfen, Feedback zu Texten / Design
2. Offene Punkte klären → Impressum + Datenschutz ergänzen
3. Domain registrieren, Seite umziehen, `noindex` entfernen, in Google Search Console anmelden
4. Google-Unternehmensprofil anlegen
5. Phase 2: Unterseiten je Leistung mit echten Fotos
