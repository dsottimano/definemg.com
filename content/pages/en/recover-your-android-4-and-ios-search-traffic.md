---
{
  "title": "You’re Losing Android 4 Search Traffic. Here’s How to Get it Back.",
  "draft": false,
  "template": "full-width",
  "preset": "define-page",
  "slots": {
    "eyebrow": "Research & perspectives / 2013-01-24",
    "title": "You’re Losing Android 4 Search Traffic. Here’s How to Get it Back.",
    "intro": "A practical investigation into search attribution on Android 4 and iOS.",
    "kind": "article",
    "railLabel": "In this article",
    "relatedTitle": "Continue exploring",
    "relatedLinks": [
      {
        "label": "All research & articles",
        "url": "/blog/"
      },
      {
        "label": "Our services",
        "url": "/services/"
      }
    ]
  },
  "seo": {
    "metaDescription": "In Android 4 and iOS, search referrals aren’t being reported correctly. Here's how you can get your hard-earned mobile search traffic back."
  },
  "lanzaProvenance": {
    "version": 1,
    "fields": {
      "slots.eyebrow": {
        "origin": "agent",
        "text": "Research & perspectives / 2013-01-24"
      },
      "slots.intro": {
        "origin": "agent",
        "text": "A practical investigation into search attribution on Android 4 and iOS."
      },
      "slots.railLabel": {
        "origin": "agent",
        "text": "In this article"
      },
      "slots.relatedTitle": {
        "origin": "agent",
        "text": "Continue exploring"
      },
      "slots.relatedLinks.0.label": {
        "origin": "agent",
        "text": "All research & articles"
      },
      "slots.relatedLinks.1.label": {
        "origin": "agent",
        "text": "Our services"
      }
    }
  }
}
---

<p>In a prior post, we wrote about <a href="/ios6-seo-search-traffic-loss/">how Apple’s release of iOS 6 in September led to a decrease in reported search traffic</a>. Within the Safari search bar, the search referrer string is no longer being passed, so a significant portion of iOS 6 search referrals are being bucketed as direct within analytics packages, including Google Analytics and Omniture. At the time of our analysis, our clients collectively saw a 9% decrease in search traffic, and we offered a methodology to properly attribute iOS 6 organic search referrals.</p>
<p>But it turns out that this was an incomplete solution, because Android 4+ (ie Ice Cream Sandwich and Jellybean) is also stripping out the search referral string. Now, Android 4.0 was first released in November 2011, so technically Android has been obscuring search data long before iOS started to. However, Android’s fragmented ecosystem leads to slow adoption rates for each new release, and iOS is a significantly larger driver of search traffic overall, so the impact of the Android 4 search traffic hadn’t really been felt – until recently.</p>
<p><b>After a Slow Start, Android 4 is Growing Quickly</b></p>
<p>We analyzed the traffic of 30 clients across multiple verticals. As is always the case, we anonymized and aggregated the data, and because of the sheer individual and collective volume of traffic our clients receive, we’re fairly confident that the sample size and diversity of sites in our analysis fairly represents web trends overall.</p>
<p>For our sample set, Android 4 traffic was negligible prior to June 2012, but grew significantly after that:</p>
<p><img alt="Android 4 Visits" decoding="async" loading="lazy" src="/media/legacy/android-4-visits.png"/></p>
<p>And with the brisk sales of recent Android 4 devices, Android 4+ now accounts for the majority of Android visits to the sites we used in this analysis:</p>
<p><img alt="Android 4+ generates the majority of all Android Traffic" decoding="async" loading="lazy" src="/media/legacy/android-4-percentage-visits.png"/></p>
<p>Collectively, Android 4 accounts for 3% of all visits to the sites we analyzed, while iOS 6 sends 13% of all visits, so the Android 4 search referral issue is still relatively small in terms of overall impact to your search numbers. However, this issue is not going away anytime soon, and will only grow over time. So it would serve you well as a search marketer to educate your clients, peers and higher ups about this mobile search issue on the two dominant OS platforms now, and implement a solution to account for it.</p>
<p><b>Adjusting Your Search Numbers for Android and iOS </b></p>
<p>Our methodology for recovering the iOS search traffic was fairly straightforward: we looked at pre-iOS 6 search referral rates and applied those against post-iOS 6 search traffic, while basically discarding the existing iOS search traffic percentage. For example, let’s say the following is true:</p>
<ul>
<li>Before the iOS 6 change, 50% of your site’s iOS traffic came from search</li>
<li>Last week, you received 10,000 visits</li>
<li>Last week, GA showed that you had 4,000 organic search referrals, which means that 40% of your reported traffic came from search.</li>
<li>Last week, iOS 6 sent 2,000 visits to the site</li>
<li>Due to the iOS 6 search referral issue, of these 2,000 iOS 6 visits, only 15% (or 300 visits) were reported as coming from search. This is down significantly from the 50% search traffic iOS 6 was sending prior to the iOS 6 launch.</li>
</ul>
<p>Our proposal was simply to apply the 50% iOS search traffic percentage against your current week’s iOS 6 traffic. In this scenario, your adjusted iOS 6 search traffic would be:</p>
<p>2,000 iOS 6 visits * 50% pre-iOS 6 search referral rates = 1,000 iOS 6 adjusted search visits.</p>
<p>The site would regain 700 search referrals from iOS 6 based on this calculation, boosting the overall search traffic total to 4,700. In this fictitious scenario, you’d recoup 18% of your search traffic for the week.</p>
<p>The same calculation using a similar methodology can be applied to retrieve the Android 4 calculation. Once the Android 4 and iOS 6 adjustments are calculated, you can simply add the two together to get the adjusted search traffic for both. Add these back to your reported search traffic, and you’ve got a more accurate assessment of the actual search traffic numbers you’ve worked so hard to build.</p>
<p><b>For Your Further Reading Pleasure</b></p>
<p>There are a few solid write-ups on this topic by AJ Kohn, The Rimm-Kaufmann Group and Web Kruscht on this subject. We’d highly recommend reading up on their analysis of this issue as well:</p>
<p><a href="https://www.webkruscht.com/2012/ios6-and-the-missing-referrer-data">The Missing iOS 6 Referrer Data</a></p>
<p><a href="https://www.blindfiveyearold.com/reclaiming-lost-ios-search-traffic">Reclaiming Lost iOS Search Traffic</a></p>
<p><a href="https://www.rimmkaufman.com/blog/estimating-google-organic-search-visits-hidden-by-ios-6/17122012/">Estimating Google Organic Search Visits Hidden by iOS 6</a></p>
