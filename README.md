# Big Bend Brain Health: Dementia Awareness Website

**Live site:** https://dementia-awareness.vercel.app

This website compiles and organizes information on dementia, caregiver education, support, and other resources available in the Big Bend region of Florida, especially in and around Tallahassee. The goal is to give families one clear place to start, so they don't have to figure out which organization to call.

## What's on the site

- **Start Here:** early warning signs of dementia and a free doctor-visit toolkit
- **For Caregivers:** support groups, classes and education, a caregiver video library, home safety, online communities, self-care, and talking to your doctor
- **Find Care & Services:** respite and adult day programs, in-home services, long-term care options, wandering and missing persons, and transportation
- **Financial and Legal Assistance:** help with money, benefits, and legal planning
- **Resource Directory:** searchable listings and downloadable guides
- **County outreach pages:** events and resources for Leon, Wakulla, Gadsden, Jefferson, Madison, Taylor, Liberty, Franklin, and Calhoun counties
- **Emergency resources:** crisis lines and urgent contacts, available from every page

## Partner organizations

Alzheimer's Project · TMH Memory Disorder Clinic · FSU REACH · Advantage Aging Solutions · Big Bend AHEC · Florida Department of Elder Affairs · Big Bend Healthcare Coalition

## Tech stack

- [Next.js](https://nextjs.org) (React)
- Hosted on [Vercel](https://vercel.com). Every push to `main` deploys to the live site automatically.

## Repository layout

The app lives in the `DCCI Consolidated Website/` subfolder. The repo root holds only this README and the license.

## Editing content

Two things are edited in [Sanity](https://www.sanity.io) at https://dementia-awareness.vercel.app/studio, with no code changes needed:

- **Events**, shown on the Events page and county pages
- **Recurring programs**, such as the respite Social Club days and times on the Respite & Adult Day page

Everything else is part of the site's code. See the [editor guide](DCCI%20Consolidated%20Website/docs/EDITING.md) for step-by-step instructions, including how to edit a respite schedule.

## Running the site locally

Requires [Node.js](https://nodejs.org).

    git clone https://github.com/ERahmathulla/DCCI_Website.git
    cd "DCCI_Website/DCCI Consolidated Website"
    npm install
    npm run dev

Then open http://localhost:3000.

> **Windows tip:** if PowerShell says "running scripts is disabled," use `npm.cmd` in place of `npm` (for example, `npm.cmd run dev`).

## Making changes

1. Pull the latest version first: `git checkout main` then `git pull`
2. Create a branch for your changes: `git checkout -b your-branch-name`
3. Commit and push the branch, then open a pull request on GitHub
4. Vercel builds a **preview link** on the pull request. Check your changes there.
5. Merge the pull request to publish to the live site

## Credits

- Website created by Emaad Rahmathulla
- Brain animation by [Robin's Pixel](https://iconscout.com/contributors/robin-donvai) on [IconScout](https://iconscout.com)
- Caregiver videos are linked from their original sources (UCLA Health, the Alzheimer's Project, Teepa Snow's Positive Approach to Care, and others), and each is credited on its card

## Disclaimer

Information on this site is provided for educational purposes only and is not medical, legal, or financial advice. In an emergency, call **911**. For a mental health crisis, call or text **988**.

## License

Licensed under the [Apache License 2.0](LICENSE).
