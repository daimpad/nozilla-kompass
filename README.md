# Nozilla Kompass — Der Ausreden-Kompass

Zwei interaktive Webanwendungen, die wiederkehrende Argumentationsmuster dokumentieren, mit denen politisches Handeln verzögert oder strukturell blockiert wird.

## Inhalt

| Verzeichnis | Thema | Beschreibung |
|---|---|---|
| `ki-regulierung/` | KI-Ausreden-Kompass | Zwölf Argumentationsmuster gegen KI-Regulierung |
| `open-data/` | Open-Data-Ausreden-Kompass | Zwölf Argumentationsmuster gegen offene Daten |
| `verwaltung/` | Verwaltungs-Ausreden-Kompass | Zwölf Argumentationsmuster gegen die Digitalisierung der öffentlichen Verwaltung |

Beide Kompasse verwenden dasselbe visuelle Konzept: Zwölf Karten sind auf vier thematische Achsen verteilt (Verantwortung abwälzen, Resignation, Verharmlosung, Schaden durch Handlung). Ein Klick auf eine Karte öffnet eine Detailansicht mit Argumentation, Kritik und weiterführenden Quellen.

## Projektstruktur

```
nozilla-kompass/
├── shared/
│   ├── style.css        # Gemeinsames CSS beider Seiten
│   └── kompass.js       # Gemeinsame Overlay-Logik
├── ki-regulierung/
│   ├── index.html       # Seiteninhalt + Kartendaten (CARDS, LITS)
│   ├── fonts/           # Selbst-gehostete Schriften (Zilla Slab, IBM Plex Sans)
│   └── 1.svg … 12.svg   # Illustrationen der zwölf Figuren
└── open-data/
    ├── index.html       # Seiteninhalt + Kartendaten (CARDS, LITS)
    ├── fonts/           # Selbst-gehostete Schriften (Zilla Slab, IBM Plex Sans)
    └── 1.svg … 12.svg   # Illustrationen der zwölf Figuren
```

## Aufbau der HTML-Dateien

Jede `index.html` enthält drei Bereiche:

1. **`<head>`** — Seiten-spezifische Meta-Daten (Titel, Open Graph, Canonical URL), `@font-face`-Deklarationen für lokale Schriften, Link auf `../shared/style.css`
2. **`<body>`** — Vollständige HTML-Struktur mit Karten, Kompass-SVG und Overlay
3. **`<script>`** — Nur die seitenspezifischen Daten (`CARDS`, `LITS`), gefolgt von `<script src="../shared/kompass.js">`

## Neue Seite erstellen

1. Neues Verzeichnis anlegen (z. B. `klimaschutz/`)
2. `fonts/`-Verzeichnis aus einer bestehenden Seite kopieren oder verlinken
3. Zwölf SVG-Illustrationen als `1.svg` bis `12.svg` erstellen
4. `index.html` einer bestehenden Seite als Vorlage nehmen:
   - Meta-Tags, Titel und Canonical URL anpassen
   - HTML-Inhalte (Karten, Intro-Text, Achsen-Banner) ersetzen
   - `CARDS`- und `LITS`-Objekte im `<script>`-Block befüllen
5. `../shared/style.css` und `../shared/kompass.js` werden automatisch eingebunden

## Datenstruktur (`CARDS` und `LITS`)

Jede Karte wird im `CARDS`-Objekt mit Schlüssel `1`–`12` definiert:

```js
const CARDS = {
  1: {
    fig:    'FIG. 1 — BEZEICHNUNG',   // Kategorie-Label im Overlay
    title:  'Der Figurname',           // Kartenüberschrift
    bubble: '»Zitat der Figur…«',     // Sprechblase
    scrawl: 'Kritik <span class="hi">Kernaussage</span>.', // Kritikzeile im Overlay
    long:   `<p>Ausführliche Analyse…</p>`, // Langtext im Overlay
    color:  '#53f9ac'                  // Akzentfarbe im Overlay (optional)
  },
  // 2–12 …
};
```

Literaturhinweise werden im `LITS`-Objekt mit demselben Schlüssel definiert:

```js
const LITS = {
  1: `<div class="ov-lit">…</div>`,
  // 2–12 …
};
```

## Lizenz

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · Damian Paderta
