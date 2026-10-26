# Glennford Atay — The Multiperspective Index

A multidisciplinary portfolio starter built with Next.js, React, TypeScript, and CSS. The visual direction combines editorial design, field-note indexing, and distinct visual treatments for technical, analytical, and creative work.

## Requirements

- Node.js LTS
- npm
- Git (recommended)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customize before publishing

1. Confirm the University of Cebu start date: the supplied résumé says May 2024, while the updated profile says April 2024.
2. Add your own screenshots for GoPhish, Cowrie, Splunk, and Wireshark under `public/images/`, then update the relevant project cards to use those assets.
3. Add certificate images and exact issuing/completion details under `public/certificates/`.
4. Confirm all project labels and only mark work as completed when you have evidence. Incident reporting, triage, Splunk, and Wireshark currently contain transparent work-sample or evidence-needed labels.
5. Replace or add a downloadable résumé in `public/documents/` if desired.
6. Review the contact details and LinkedIn URL in `src/app/page.tsx`.

## Deploy to GitHub and Vercel

1. Create a GitHub repository named `glennford-portfolio`.
2. From this project directory, run:

   ```bash
   git init
   git add .
   git commit -m "Create portfolio starter"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/glennford-portfolio.git
   git push -u origin main
   ```

3. Sign in to Vercel with GitHub and import the repository.
4. Keep the detected Next.js defaults and deploy.
5. Future pushes to the connected branch will trigger deployments.

## Notes

- The GoPhish metrics displayed are the documented local test results supplied for this portfolio and are not presented as a real-world phishing success rate.
- No OWASP Juice Shop, Nmap, or Blue/Red/Purple Team project entries are included.
- This starter uses Google Fonts via CSS import; local/system fallback fonts remain available if external font loading is blocked.
