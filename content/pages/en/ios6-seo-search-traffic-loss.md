---
{
  "title": "Hey Siri: Why Am I Losing 9% of My SEO Traffic from iOS?",
  "draft": false,
  "template": "full-width",
  "preset": "define-page",
  "slots": {
    "eyebrow": "Research & perspectives / 2012-12-18",
    "title": "Hey Siri: Why Am I Losing 9% of My SEO Traffic from iOS?",
    "intro": "An investigation into missing search referrals following the release of iOS 6.",
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
    "metaDescription": "Apple's switch to iOS 6 causes 9% of search traffic to be incorrectly reported. Find out how you can get your hard-earned search traffic back."
  },
  "lanzaProvenance": {
    "version": 1,
    "fields": {
      "slots.eyebrow": {
        "origin": "agent",
        "text": "Research & perspectives / 2012-12-18"
      },
      "slots.intro": {
        "origin": "agent",
        "text": "An investigation into missing search referrals following the release of iOS 6."
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

<p>When iOS 6 was released in September, there was an unexpected yet all-too-familiar impact on those of us who rely on search data for a living: <a href="https://searchengineland.com/ios-6-removes-all-google-search-referer-data-134560">iPad and iPhone search traffic was suddenly obscured</a>. Google was caught off-guard by this change, which specifically impacts searches done within the Safari search box.  They told Search Engine Land that they were looking into ways around this issue:</p>
<blockquote><p>The web browser on iOS 6 switched to use SSL by default and our web servers don’t yet take that fact into account. Searching still works fine, but in some situations the HTTP referer header isn’t passed on to the destination page. We’re investigating different options to address this issue.</p></blockquote>
<p>Google’s <a href="https://googlewebmastercentral.blogspot.com/2011/10/accessing-search-query-data-for-your.html">not provided</a> issue has been well documented, but <a href="https://www.seomoz.org/blog/quantifying-googles-keyword-referral-data-shutdown">that only concealed specific keywords</a> and not attribution of traffic from search. This iOS 6 issue, though smaller in scale, is more insidious, because a substantial amount of search traffic from iOS is now being reported as direct traffic (<a href="https://econsultancy.com/us/blog/11188-apple-s-ios-6-update-means-86-of-google-referral-traffic-is-encrypted">86% according to this article</a>). If you are an SEO whose performance is directly correlated with search traffic performance (and frankly, who isn’t?), then you need to understand and account for this issue. The true and full measure of the value you bring to those who pay you for your search expertise depends on it.</p>
<p><strong>UPDATE:</strong> See our follow-up post that describes how your <a href="/recover-your-android-4-and-ios-search-traffic/" title="Hey Siri: Why Am I Losing 9% of My SEO Traffic from iOS?">Android 4 search traffic is also being lost – and what to do about it</a>.</p>
<p>Google released the statement above to Search Engine Land on September 27. 13 weeks later, no solution for the search referrer issue has been published, and <a href="https://news.cnet.com/8301-13579_3-57537774-37/ios-6-adoption-hits-61-percent-just-one-month-after-its-release/">iOS 6 usage continues to grow</a>, both with the sales of new iPads and iPhones, and with users upgrading their older mobile devices with the new OS. Unless and until Google develops a solution for this, workarounds to re-bucket search from direct traffic need to be put in place.</p>
<p>In the rest of this post, we’re going to quantify the impact on search traffic referrals to provide a sense of its scale (spoiler alert: it’s 9%), and then suggest a workaround to account for the attribution problem.</p>
<h2><b>Quantifying the iOS 6 Search Traffic Problem</b></h2>
<p>To understand the scale of this problem, we looked at the iOS, search traffic, direct traffic and total visits data for a cross section of our clients across many verticals, including video, health, entertainment, lifestyle, fashion, ecommerce and news. In aggregate, the sites we looked at receive 83MM visits per week and include some of the most recognizable brands on the web.</p>
<p>On average, the sites we analyzed received 16.9% of their traffic from iOS visits. We pulled weekly data pre- and post-iOS 6 launch, and it’s clear that even in this short period total iOS traffic has grown substantially:</p>
<p><a href="/media/legacy/ios-six-9-percent-of-traffic.png"><img alt="Total Weekly iOS Visits - July 29 - Dec 9" decoding="async" loading="lazy" src="/media/legacy/ios-six-9-percent-of-traffic.png"/></a></p>
<p>iOS 6 was released on September 19, and this chart provides a stark visualization of the corresponding search and direct traffic decline post-launch:</p>
<p><a href="/media/legacy/ios-search-pre-and-post-ios-6-launch.png"><img alt="iOS Search v. Direct Traffic, Jul 29 - Dec 9" decoding="async" loading="lazy" src="/media/legacy/ios-search-pre-and-post-ios-6-launch.png"/></a></p>
<p>In aggregate (and prior to adjustments), weekly search referrals for these sites are 27MM/week, or 32.7% of all visits. For the latest week in which we pulled data, reported search traffic via iOS was 2.8MM, vs. 7.6MM visits from direct. For the week ending December 9, the search and direct traffic referral numbers debited 2.4MM from the iOS search referral ledger, while incorrectly crediting iOS direct with 2.3MM referrers. Here’s how we arrived at that calculation.</p>
<p>In the weeks prior to the iOS 6 release, direct and search traffic averaged 34% and 33% respectively:</p>
<p><a href="/media/legacy/ios-search-direct-traffic-percentage-pre-ios-6.png"><img alt="iOS 6 Search and Direct Traffic Percentage" decoding="async" loading="lazy" src="/media/legacy/ios-search-direct-traffic-percentage-pre-ios-6.png"/></a></p>
<p>but as of our latest pull, that’s been skewed to 48% direct vs. 18% search:</p>
<p><a href="/media/legacy/ios-search-traffic-percentage-chart.png"><img alt="iOS Search and Direct Traffic Percentage, post iOS 6 launch" decoding="async" loading="lazy" src="/media/legacy/ios-search-traffic-percentage-chart.png"/></a></p>
<h2><b>Adjusting for the iOS 6 Search Traffic Loss</b></h2>
<p>Assuming that iOS 6 usage behavior for search hasn’t changed pre- v post-launch, we applied the 34% direct traffic/33% search traffic baseline to iOS 6 data for each week post-launch, to normalize the data:</p>
<p><a href="/media/legacy/ios-adjusted-search-and-direct-traffic.png"><img alt="Adjusted iOS 6 Search Traffic and Direct Data" decoding="async" loading="lazy" src="/media/legacy/ios-adjusted-search-and-direct-traffic.png"/></a></p>
<p>For the latest week in which we pulled data, this exercise led to the recovery to 8.9% of search referrals, up from 3.3% from the first week of iOS 6’s launch:</p>
<p><a href="/media/legacy/ios-weekly-percentage-traffic-chart.png"><img alt="9% weekly search traffic loss from iOS" decoding="async" loading="lazy" src="/media/legacy/ios-weekly-percentage-traffic-chart.png"/></a></p>
<p>At 9% this iOS 6 obfuscation is materially impacting our clients’ search referrals – and likely yours too. And with no solution on the immediate horizon, this percentage is only going to grow.  So get ahead of this issue now. Make it known to your clients and employers. Apply a calculation to get back the credit for the search traffic you’ve worked so hard to earn, using the methodology outlined above, <a href="https://www.rimmkaufman.com/blog/estimating-google-organic-search-visits-hidden-by-ios-6/17122012/">another one published by the Rimm Kauffman Group</a> or one you develop on your own. And do so before this issue balloons to a point where your client or key executives start to notice, leaving you to scramble and defend against a search loss that isn’t your fault.</p>
