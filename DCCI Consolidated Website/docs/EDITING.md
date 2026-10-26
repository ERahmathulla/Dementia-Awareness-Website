# Editing the website

This guide is for club officers who keep the **Resource Directory** and **Events** up to date. You don't need to know any code. Everything is done in the editing screen, called the Studio.

## Logging in

1. Go to **https://dementia-awareness.vercel.app/studio**
2. Log in with the account (Google, GitHub, or email) that you were invited with.
3. If it says you don't have access, ask a club admin to invite you (see [Inviting new editors](#for-club-admins-inviting-new-editors)).

The menu on the left has these lists:

- **All listings**: every directory listing
- **Listings by category**: listings grouped by category
- **Needs review**: listings that need checking
- **Hidden listings**: listings hidden from the website
- **Upcoming events** and **Past events**
- **Categories**

## Publishing: the most important step

Your edits are saved automatically as a **draft**, but nobody can see them until you click **Publish** (bottom right). Changes show on the live website **within about a minute** after you publish. Refresh the page to see them.

Made a mistake? Open the item and use the **History** (clock) button at the top to go back to an earlier version.

## Listings

### Add a listing

1. Click **All listings**, then the **Create** (+ or pencil) button at the top of the list.
2. Fill in the fields. Each field has a short note under its name explaining what to enter. The required ones are:
   - **Name**
   - **Category**
   - **Summary**: one or two sentences shown on the card (under 200 characters)
   - **Counties served**: tick every county it covers. Use "All Big Bend counties", "Statewide", or "Nationwide / Online" for wider coverage.
3. Add the phone, website, cost, and anything else you know.
4. Set **Last verified** to today's date if you just confirmed the information.
5. Click **Publish**.

If something is wrong (for example, a phone number with too few digits), the field turns red and explains the problem. Fix it before publishing.

### Edit a listing

Open the listing, make your changes, and click **Publish**.

### Hide a listing

To take a listing off the website without deleting it (for example, a program that is paused), turn on **Hide from website** and click **Publish**. It then appears under **Hidden listings**. To show it again, turn the switch off and publish.

Hiding is safer than deleting, because deleted listings are gone for good.

### Verify a listing

Whenever you confirm a listing's information is still correct (by calling them or checking their website):

1. Fix anything that has changed.
2. Set **Last verified** to today's date.
3. Click **Publish**.

The website shows "Last verified: Month Year" on the card, so families know the information is current.

## The Needs review list

**Needs review** shows every listing that has never been verified, or was last verified more than 12 months ago. Work through it a few at a time: check each listing, update it, set **Last verified** to today, and publish. Once verified, it drops off the list.

## Categories

Categories are the choices in the directory's category filter.

1. Click **Categories**, then **Create**.
2. Enter the **Title**, then click **Generate** next to **Web address name**.
3. Optionally add a **Sort order** number. Lower numbers appear first in the filter.
4. Click **Publish**.

New categories appear in the website's filter automatically. Don't delete a category while listings still use it; move those listings to another category first.

## Events

### Add an event

1. Click **Upcoming events**, then **Create**.
2. Fill in **Title**, **Starts** (date and time), and **County**. These are required.
3. Add the end time, location, description, registration link, organizer, and cost if you have them.
4. Click **Publish**.

The event shows on the **Events** page, and on that county's page.

### Past events disappear on their own

Once an event ends (or starts, if it has no end time), it leaves the website automatically and moves to **Past events** in the Studio. You don't need to delete it.

To hide an event early (for example, if it's cancelled), turn on **Hide from website** and publish.

## Good to know

- **Don't put private information in any field.** The website's content can be read by anyone with technical know-how, including **Editor notes**. Editor notes never appear on the website, but they are not secret.
- Times you enter are in your computer's time zone, so enter Florida times while you're in Florida.

## For club admins: inviting new editors

1. Go to **https://www.sanity.io/manage** and log in.
2. Open the **Dementia Awareness Website** project.
3. Go to **Members** and click **Invite members**.
4. Enter the person's email and pick a role. **Editor** can change content. **Administrator** can also invite people and change settings.
5. They get an email invitation. Once they accept, they can log in at `/studio`.

To remove someone, open **Members**, find them, and remove them from the project.

If the website ever moves to a new address, an admin must add that address in sanity.io/manage under **API → CORS origins**, with **Allow credentials** turned on. Otherwise the Studio won't load there.
