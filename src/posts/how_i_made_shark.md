---
title: 'How I built App #1 — Shark'
published: 05/19/2018
readTime: 4
---

In case you’re wondering what this is about, read this [article](/personal/summer_break_2018_plan.html).

## The app idea. Why a debt manager?

Well, my mother borrows little amounts from me and always tells me to write it down because whenever she is ready to pay, more often than not I’d have long forgotten how much everything added up to.

I’d always planned to write an app so I wouldn’t have to manually write down the debts so it was a no-brainer what the first application I’d be building for the challenge was going to be.

<content-break />

## Designing the UI/UX

After deciding that I was going to be building a debt manager, I had to know what debt managers currently looked like so I went into the Play Store.

I searched for the most popular debt managers and took a long sip of design inspiration. I also took the opportunity to go through the reviews to understand a user’s idea of the features that are absolutely necessary for a debt manager.

I follow a lot of indie makers on Twitter and they always advice that you make an MVP (Minimum Viable Product) first to validate that there is an actual need for your application. You don’t want to waste several months building a fully fledged application that no one wants to use. With that in mind, I decided to narrow down the original list of features I jotted down into one that I felt was a minimum viable product.

### MVP features

1. A user had to be able to track debts they owe or are owed.
2. A simple dashboard that allowed a user to see how far along they are with repaying their debts / how far along people who owed them were with repayment.
3. For each account (debtor / creditor) added, a user had to be able multiple payments. A payment could be a debt pay-off, a new debt or even a penalty. All these payments should then affect the overall account’s debt.
4. From the app reviews, I noticed that users wanted the ability to add notes / extra details to each debt they create, a debt due date, and backup capabilities (locally and cloud).

Since I was also building for myself a couple of “me-centric” features were added.

I find ads annoying so the app absolutely had to be ad-free. I am lazy so the app had to be no fluff, straight to the point, and painfully easy to use. I abhor shitty UI design so the app had to feature at least half decent Material Design.

With the features ready, I headed to my favorite design inspiration site: [Uplabs](https://www.uplabs.com/android). I spent a couple of hours switching between Uplabs and Adobe XD until the UI design was completed.

<post-image :src="$withBase('/images/shark-initial-ui.png')" caption="Final Adobe XD UI" alt="shark_initial_ui" />

**NB**: A lot changed between the final application UI design and what I made in XD. The color scheme for example. I thought it was way too “loud” so I went with much more mellow colors.

<post-image :src="$withBase('/images/shark-final-ui.png')" caption="Final application UI" alt="shark_final_ui" />

<content-break />

## Developing the application

After completing the UI design, I started to think about how I’d represent everything in a database.

First, I established the entities. I ended up with 2 entities. Debt and Payment.

A **debt** had an account_name, debt_type, due_date, extra_detail, and amount.

A **payment** had a debt_id, amount, payment_type, extra_detail, due_date, and created_date.

Using that information I created the database schema. I used the [Room Persistence Library](https://developer.android.com/topic/libraries/architecture/room) for setting up the database, data access and manipulation. Room was a delight to work with. It abstracted away all the low level work and pain associated with working with SQLite in Android.

I used MV[VM](https://developer.android.com/topic/libraries/architecture/viewmodel) + [Android Databinding](https://developer.android.com/topic/libraries/data-binding/start) + [LiveData](https://developer.android.com/topic/libraries/architecture/livedata) for the UI, [Fuel](https://github.com/kittinunf/Fuel) for REST calls, [Klaxon](https://github.com/cbeust/klaxon) for JSON (de)serialization, [In-app billing](https://github.com/anjlab/android-inapp-billing-v3), and [Dexter](https://github.com/Karumi/Dexter) for requesting permissions at run-time.

I also built a simple Node.JS back-end on [Glitch](http://glitch.com/) that handles the cloud backup and restore.

**I’ll try to publish follow-up articles on how to use Room, Fuel and In-app billing.**

## Publishing the app

When I thought up the challenge, I wasn’t thinking of making the applications commercial but as it turns out Shark was a really good candidate for something I could sell. I added a couple of features (cloud & local backup and restoration, export debt data to CSV / HTML amongst whatever else I think up in the future) that can be accessed with an \$2.99 one-time in-app purchase.

Shark is available in the Google Play Store [here](https://play.google.com/store/apps/details?id=com.alansa.shark). Please try it out and let me know what you think.
