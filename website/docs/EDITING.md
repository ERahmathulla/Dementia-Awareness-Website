# Editing the website

This guide is for club officers who keep **events** and **recurring programs** (the respite Social Club schedule and support groups) up to date. You don't need to know any code. Everything is done in the editing screen, called the Studio.

Everything else on the site (resource pages, phone numbers, articles) is part of the website's code and is updated by the site's developer.

## Logging in

1. Go to **https://dementia-awareness.vercel.app/studio**
2. Log in with the account (Google, GitHub, or email) that you were invited with.
3. If it says you don't have access, ask a club admin to invite you (see [Inviting new editors](#for-club-admins-inviting-new-editors)).

The menu on the left has:

- **Upcoming events** and **Past events**
- **Recurring programs**, grouped by type: Respite, Support group, Class, and Other

## Publishing: the most important step

Your edits are saved automatically as a **draft**, but nobody can see them until you click **Publish** (bottom right). Changes show on the live website **within about a minute** after you publish. Refresh the page to see them.

Made a mistake? Open the item and use the **History** (clock) button at the top to go back to an earlier version.

## Events

### Add an event

1. Click **Upcoming events**, then **Create** (the + or pencil button at the top of the list).
2. Fill in **Title**, **Starts** (date and time), and **County**. These are required.
3. Add the end time, location, description, registration link, organizer, and cost if you have them.
4. Click **Publish**.

The event shows on the **Events** page, and on that county's page.

### Past events disappear on their own

Once an event ends (or starts, if it has no end time), it leaves the website automatically and moves to **Past events** in the Studio. You don't need to delete it.

To hide an event early (for example, if it's cancelled), turn on **Hide from website** and publish.

## Recurring programs

Recurring programs are things that happen on the same days every week (or every month), like the Alzheimer's Project Social Clubs and support groups. Where they appear depends on the **Program type**:

| Program type | Where it appears |
|---|---|
| **Respite** | The **Respite & Adult Day Programs** page (grouped by day), and **Weekly Programs** on the Events page |
| **Support group** | The **Support Groups** page, and **Recurring Support Groups** on the Events page |
| **Class** or **Other** | **Weekly Programs** on the Events page |

Every program also appears on its county's page, and in the website's search, as soon as you publish.

### Edit a respite schedule

1. Click **Recurring programs**, then **Respite**.
2. Open the program, for example **Social Club at Temple Israel**.
3. Under **Schedule**, click the day you want to change. You can change:
   - **Day of the week**
   - **Start time** and **End time**
   - **Which weeks of the month**: leave empty if it meets every week
4. To add another day, click **Add item** under **Schedule**. To remove a day, use the **⋯** menu on that day and choose **Remove**.
5. Click **Publish**.

If every Social Club keeps the same hours, the website shows the hours once at the top ("Open 9am–3pm"). If you give one club different hours, the website shows the hours next to each club instead. **Public notes** (like "drop-off after 9, pickup before 3") work the same way.

### Add a new respite location

1. Click **Recurring programs**, then **Respite**, then **Create**. The program type is filled in for you.
2. Enter the **Name** (e.g. "Social Club at Example Church"), **Location name**, **Address** (the website shows it in brackets, e.g. "Example Church (Tallahassee)"), and **County**.
3. Add at least one **Schedule** entry.
4. Click **Publish**.

### Edit a support group

1. Click **Recurring programs**, then **Support group**.
2. Open the group, for example **Evening Support Group**.
3. Change what you need:
   - **Schedule**: the day, start and end time, and **Which weeks of the month**. For a group that meets on the 2nd and 4th Tuesday, pick Tuesday and tick **2nd** and **4th**. For "last Monday of each month", tick **Last**.
   - **Location name** and **Address** (e.g. "Immanuel Baptist Church" and "Tallahassee, FL")
   - **Label**: the small badge on the Support Groups page, such as General, Specialized, or County
   - **Public notes**: a short line shown under the group, e.g. "Evening scheduling for working caregivers"
4. Click **Publish**.

### Add a new support group

1. Click **Recurring programs**, then **Support group**, then **Create**. The program type is filled in for you.
2. Enter the **Name**, **Location name**, **Address**, and **County**, and add a **Schedule** entry.
3. Optionally add a **Label** and **Public notes**.
4. Click **Publish**.

### Pause or remove a program

Turn on **Hide from website** and click **Publish**. The program stays in the Studio so you can turn it back on later. Hiding is safer than deleting, because deleted items are gone for good.

## Good to know

- **Don't put private information in any field.** Everything in the Studio can be read by anyone with technical know-how.
- Times you enter for events are in your computer's time zone, so enter Florida times while you're in Florida.

## For club admins: inviting new editors

1. Go to **https://www.sanity.io/manage** and log in.
2. Open the **Dementia Awareness Website** project.
3. Go to **Members** and click **Invite members**.
4. Enter the person's email and pick a role. **Editor** can change content. **Administrator** can also invite people and change settings.
5. They get an email invitation. Once they accept, they can log in at `/studio`.

To remove someone, open **Members**, find them, and remove them from the project.

If the website ever moves to a new address, an admin must add that address in sanity.io/manage under **API → CORS origins**, with **Allow credentials** turned on. Otherwise the Studio won't load there.
