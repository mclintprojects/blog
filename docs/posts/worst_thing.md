---
title: 'What’s the worst thing you’ve done? 🙈'
published: 02/17/2019
readTime: 4
---

I just read a well-told short [story](https://inkmagician.wordpress.com/2017/10/20/nothing/) centred around that question and it inspired me to write this story. Before we begin, I’m not going to be confessing to any illegality I’ve engaged in (not that I have). Instead, this is going to be a lighthearted tale about when I manipulated the votes for the 2018 BET awards.

## June 19, 2018

I was bored and scrolling down my twitter timeline when I saw several tweets asking people to vote for Kwesi Arthur so he could win the 2018 BET “Best New International Act” award. There was only a day left (I think) for voting to close and Kwesi Arthur was nowhere near Nailah (1st position at the time) so the barrage of tweets soliciting for votes made sense.

The award was set up such that one could vote via Instagram by posting the **#IPICKKWESIA18** hashtag on a particular [photo](https://www.instagram.com/p/BjpSc8DFrhl) or via the official BET website. The results from both sources would then be tallied and (supposedly) factored into the final decision about who would win the award.

Knowing those facts, I started thinking about how I could help Kwesi Arthur win. I couldn’t write an Instagram bot to automate posting the hashtag mainly because I didn’t know how to and it would probably take a lot of time so I decided instead to find out how the BET website was recording the votes being made.

To do that, I navigated to the [BET](https://www.bet.com/shows/bet-awards/2018/bet-international/nominees/viewers-choice-best-new-international-act.html) voting webpage. Opened up the Network tab in DevTools and voted for Kwesi Arthur. While watching for XHR requests being sent out, I noticed a **POST** request being sent out to **`https://api.massrelevance.com/v1/polls.json?poll=4S4&option=S5T`**. After several minutes of googling MassRelevance, I concluded that:

1. BET was using a third party API to record the votes. Astonishingly, said API did not require authorization thus allowing anyone (thankfully) to tamper with the votes if they were savvy enough leaving BET none the wiser. In fact, I suspected that Nailah’s team caught wind of this and implemented a solution to automatically vote for her too.
2. The **poll** query parameter (4S4) was the poll for the Best New International Act award.
3. The **option** query parameter (S5T) was the identifier for Kwesi Arthur and including it in the **POST** request indicated a vote for him.

Armed with this information I started thinking about how best to implement the bot that would automate voting for Kwesi Arthur. I knew that it had to be a website because Kwesi Arthur was so far behind in votes that I’d need the help of other people running the bot to be able to catch up.

<post-image :src="$withBase('/images/kwesi-voter.png')" caption="The final iteration of Kwesi Voter" alt="kwesi_voter" />

The first iteration of “**Kwesi Voter**” was a simple Vue app that had two sections. The first section showed how many votes the bot had currently made and the second contained a button that allowed you to see how many votes Kwesi Arthur had in comparison to Nailah who was in the first position at the time. I wrote the code needed, pushed to a private repo on Github, set up Netlify deploy and shared the website with friends who were close to either Kwesi Arthur or people on his team. They got it and Kwesi’s votes started climbing.

After watching the votes for awhile, I concluded that Kwesi’s votes weren’t climbing fast enough considering the initial gap and also the fact that Nailah had her automated solution running too. That led to the second iteration of Kwesi Voter where I added an option to spawn new browser tabs that’d automatically start running the bot. In a few hours, Kwesi Arthur went from less than 500K votes to over 2M.

After crossing 2M votes I took the bot offline. A few days later the winner of the award was announced and it went to Sjava. Till date, I have no idea why he won. My current theory is that BET figured out that the combined votes for Nailah and Kwesi Arthur didn’t match the hits to their website so the votes were probably fake. Sjava, then 3rd in line became the winner.

<content-break />

## Wrapping up

Here are a few important takeaways:

1. Please! Implement some form of authorization for requests for resources that you absolutely do not want unauthorized people to be able to access. In this case, even a simple check for if a request was coming from an approved domain would have thwarted my whole operation.
2. Kids, cheating is bad, mkay! Don’t do it.
3. Someone better employ me fast because being bored is how this was borne and the next time I’m using my powers for evil, it could be against you.

<content-break />

**So there it is, the worst thing I’ve done. 🙈**
