e-ARAL Hub — Version 15 (100 ITEMS PER OPERATION)

New: Window Card 1 (Basic Facts) and Window Card 2 (Two-Digit Practice).
On each card, choose Addition, Subtraction, Multiplication, or Division.
Each operation generates 100 problems. The default 5-minute challenge can be switched off for untimed practice.
On computers AND compatible Android keyboards, enter the answer then press Enter/Next.
No per-item confirmation screens: the next problem appears instantly, and correct answers are reviewed at the end.
Level 2 operation unlocks when the SAME Level 1 operation has reached 80/100.
Printable 100-item worksheet and answer key for each operation.
Scores remain on that browser/device; static GitHub Pages has no central teacher scoring.

DEPLOY: Unzip and upload ALL files and images/ at repo root (index.html at root). Commit to main.
If you use GitHub Pages, refresh the website twice after deployment to let the updated service worker activate.

IMPORTANT: Original digital practice problems, not exact reproduced official DepEd cards.
The 5-minute timer is a practice challenge, not a universal official DepEd time mandate.
For evaluation, use teacher-supervised methods as prescribed by your school/SDO.

e-ARAL Hub — Version 14 | 100-Item Math Window Cards
Linasin Elementary School

KASAMA:
- index.html: siyam na tiles (Kinder, Grades 1–6, Window Card 1 at Window Card 2), 3 x 3 sa desktop.
- grade0.html ... grade6.html: naunang Reading/Math activities.
- window1.html: 100 BASIC FACTS, 25 bawat operation, 15 minuto ng actual solving time.
- window2.html: 100 TWO-DIGIT PRACTICE, 25 bawat operation, 25 minuto ng actual solving time.
- window-data.js: random math generators, 100 unique problems bawat practice set.
- window-app.js: assessment screen, countdown, auto-scoring, 80/100 mastery unlocking,
  answer review, local history, CSV at score sharing.
- window-print.html: parehong 100-item set (kung nagawa na sa browser) o bagong random printable;
  50 items bawat A4 page, optional answer key.
- app.js / lessons.js / bank.js at images/: existing K–G6 lessons and scores unchanged.

PAG-UPDATE SA GITHUB PAGES:
1. I-extract ang ZIP (huwag ang ZIP lang ang i-upload).
2. Palitan/i-upload ang mga file sa root ng GitHub repository at panatilihin ang images/ directory.
3. Commit changes; hintaying mag-deploy ang GitHub Pages.
4. Refresh ang website; kung may lumang offline cache, i-reload ang page para ma-activate ang bagong service worker.

MAHALAGANG TANDAAN:
- Hindi na kailangan pumili ng number of questions o operation: 100 mixed items palagi.
- Window Card 2 ay nag-u-unlock kapag naka-80/100 o higit pa sa Window Card 1,
  gamit ang parehong learner code/pangalan sa parehong browser.
- Naka-pause ang timer habang nire-review ang sagot; natitirang oras lang sa solving ang nauubos.
- Score at mastery ay local sa browser at hindi pa nakikita ng guro nang automatic.
  Gamitin ang Ibahagi ang score o CSV export. Public GitHub Pages does not host a shared database.
- Hindi nito napipigilan ang paggamit ng ibang device o calculator.
- Ito ay locally authored practice, hindi opisyal na DepEd diagnostic assessment.
