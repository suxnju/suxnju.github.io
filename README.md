# Personal Homepage

An English academic homepage focused on AI for Security, AI agents, program analysis, and blockchain security. The restrained profile-sidebar and content-panel layout is inspired by [luost26/academic-homepage](https://github.com/luost26/academic-homepage), implemented here as standalone HTML and CSS.

## Local preview

Run from this directory, then open http://127.0.0.1:8000:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

No package installation or build step is required.

## Updating the site

- `index.html`: all content, publication metadata, citations, and links.
- `assets/site.css`: responsive sidebar, content panels, typography, and print styles.
- `assets/site.js`: publication filtering; no framework or installation is needed.
- The profile photo is under `assets/photo/`. Only the Lato Regular and Bold fonts used by the page are retained in `fonts/lato/`. Papers link to their DOI or arXiv pages.
- Chinese names use system Kai-style fonts (`KaiTi`, `STKaiti`, or `Kaiti SC`), with a serif fallback when none is installed.

The page contains About Me, Publications, Experience, Technical Skills, Service, and Awards. Education and funding information are intentionally omitted. Contact and award icons use inline SVG, without external icon dependencies.

Publications are grouped into first-author papers, collaborative papers, and preprints. The All, First Author, Collaborative, and Preprints buttons filter entire groups, including their headings. Set each group's `data-category` to `first`, `collaborative`, or `preprints`. Without JavaScript all papers remain visible and the controls stay hidden; printing always includes all papers. Keep author lists, publication statuses, links, and the footer update date current.

AI agent topics are presented as research interests. The Google Scholar link points to the author's confirmed profile. Add a CV download only when its actual public file is available.

## Publishing

The standalone HTML works with GitHub Pages branch deployment from the repository root, including its default Jekyll build. No remote theme or plugin is needed. Push reviewed changes to the configured Pages source branch to publish.

Before publishing, check desktop/mobile layouts, all four publication filters, navigation and paper links, and the accuracy of publication statuses and personal information.
