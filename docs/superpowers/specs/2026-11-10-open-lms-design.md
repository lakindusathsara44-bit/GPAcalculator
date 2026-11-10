# Open LMS — Design Specification

**Status:** Proposed; awaiting user approval  
**Target page:** `open.lms.html`  
**Repository:** `lakindusathsara44-bit/GPAcalculator`

## Goal

Create a free, responsive learning-resource directory for all 15 HND programmes already listed by the GPA Calculator. It supplements SLIATE LMS; it does not replace the official LMS or claim to be an official SLIATE service.

## Users and primary flow

1. Open `open.lms.html`.
2. Choose an HND programme.
3. Search or browse its subjects/modules.
4. Open a module to see relevant learning resources.
5. Filter resources by type and priority, then open the original source in a new tab.

## Course coverage

Use the existing course directory in `index.html` as the initial source of programme names and module-count metadata:

HNDA, HNDBA, HNDBF, HNDBSE, HNDE-Civil, HNDE-Electrical, HNDE-Mechanical, HND-English, HNDFT, HNDIT, HNDM, HNDPM, HNDQS, HNDT-Agri, and HNDTHM.

Do not fabricate module titles. Populate module lists from verified syllabus/LMS references where available; clearly label incomplete course coverage and allow additional modules to be added as verified data becomes available.

## Hybrid resource model

Each module can contain:
- Curated, checked resources with title, provider, resource type, URL, language, and short description.
- Discovery links for finding further resources (for example, YouTube search results and reputable educational sites).
- A visible source/verification note and last-reviewed date where known.

Resource types: lecture notes, PDFs, video lessons, playlists, tutorials, practical exercises, projects, past papers, reference books, and career/industry learning.

Never present a search result as a verified resource. Curated resources and discovery suggestions must be visually distinguishable.

## Priority policy

- **Priority 1 — Critical:** important syllabus knowledge or foundational concepts that are missing, weakly covered, or difficult to learn through SLIATE LMS alone.
- **Priority 2 — High:** practical skills, industry tools, modern technologies, and employability skills relevant to the programme.
- **Priority 3 — Supporting:** advanced references, research, and optional enrichment.

Priority is based on educational value, relevance, and source quality—not merely on whether a resource is absent from LMS. Each resource should have a short reason for its priority. Do not imply that a resource is missing from LMS unless that has been checked.

## Interface and accessibility

- Match the current GPA Calculator's dark interface, restrained blue accents, and responsive layout.
- Provide course selection, module/topic search, resource-type filters, and priority filters.
- Make external links clearly identifiable and open them safely in a new tab.
- Include loading/empty states, keyboard-friendly controls, visible focus states, and readable mobile layouts.
- Explain that external content is hosted by third parties and may change.

## Technical approach

- Keep the first version compatible with the repository's static GitHub Pages setup: plain HTML, CSS, and JavaScript.
- Put resource catalogue data in a separate JavaScript data file if that improves maintainability; avoid requiring a build step or backend for browsing.
- Do not expose private credentials or embed API keys.
- Automatic discovery should use ordinary search links unless a legitimate public API is configured. Do not scrape YouTube or other sites.
- Add a clear navigation link from the existing GPA Calculator home page only after confirming the correct insertion point and preserving its current layout.

## Initial release scope

1. Build the standalone `open.lms.html` interface.
2. Support all 15 programme selectors.
3. Add verified module/resource records where source evidence exists; otherwise show a clear “resources being collected” state and useful discovery links.
4. Include Priority 1/2/3 labels and filters.
5. Test course switching, search, filters, external links, mobile layout, and empty states.

## Out of scope for the first release

- User accounts, uploads, comments, ratings, or community submissions.
- A private database or paid search API.
- Claims that all courses/modules/resources are complete.
- Copying copyrighted notes or PDFs into the repository without permission; link to legitimate source pages instead.

## Acceptance criteria

- All 15 HND programmes are selectable.
- Users can find modules/resources by course and search term.
- Priority filters work and explain the priority meaning.
- Curated items are distinguishable from discovery links.
- No invented module names, fake resource URLs, or unsupported LMS-absence claims.
- Page works as a static GitHub Pages page on desktop and mobile.
- Existing GPA Calculator pages remain unchanged except for an optional, separately reviewed navigation link.
