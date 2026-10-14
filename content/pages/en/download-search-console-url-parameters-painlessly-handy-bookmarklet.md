---
{
  "title": "Download Search Console URL Parameters Painlessly with This Handy Bookmarklet",
  "draft": false,
  "template": "full-width",
  "preset": "define-page",
  "slots": {
    "eyebrow": "Research & perspectives / January 5, 2016",
    "title": "Download Search Console URL Parameters Painlessly with This Handy Bookmarklet",
    "intro": "An archived workflow for extracting URL parameter settings from Google Search Console.",
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
      },
      {
        "label": "Contact Us",
        "url": "/contact/"
      }
    ]
  },
  "seo": {
    "metaDescription": "Free JavaScript bookmarklet to download URL parameter example URLs from Google Search Console."
  },
  "lanzaProvenance": {
    "version": 1,
    "fields": {
      "slots.eyebrow": {
        "origin": "agent",
        "text": "Research & perspectives / January 5, 2016"
      },
      "slots.intro": {
        "origin": "agent",
        "text": "An archived workflow for extracting URL parameter settings from Google Search Console."
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
      },
      "slots.relatedLinks.2.label": {
        "origin": "agent",
        "text": "Contact Us"
      }
    }
  }
}
---

<p><p><a href="https://www.youtube.com/embed/7cs5aIIZ2_w"><span data-lanza-origin="agent">Watch video or presentation</span></a></p></p>
<p>The URL parameter configuration tool in the <a href="https://www.google.com/webmasters/tools/">Google Search Console</a> is an SEO’s dream; it picks up the deepest parameters that many crawlers fail to find.  It’s a list of opportunities to close up duplicate content caused by parameters, but that list isn’t the easiest to get to, and it’s time consuming to extract when you have anything over 50 parameters.</p>
<p>Instead of having to click through 100’s of URL parameters and find example URLs like so:</p>
<p><a href="/media/legacy/show-example-url.png"><img alt="show example url configuration example" decoding="async" loading="lazy" src="/media/legacy/show-example-url.png"/></a></p>
<p>Aaron developed <a href="/media/legacy/wmt-script.txt">a handy script</a> that will extract all the parameters and an example URL, and display it on the screen for you to copy and paste to your heart’s delight:</p>
<p><a href="/media/legacy/extraction.png"><img alt="extraction" decoding="async" loading="lazy" src="/media/legacy/extraction.png"/></a></p>
<p>Pretty cool, right? No, you can’t have Aaron.</p>
<h2>How to install the bookmarklet and run the script within 2 minutes:</h2>
<p>1) Head over to Google Search Console</p>
<p>2) Ensure you have unrestricted access on the site you’re working on, or this won’t work. If you see the restricted access message in the top right for the site in question, get the administrator to at least give you full temporary access.</p>
<p>3) Head over to the Crawl &gt; URL Parameters Report. The more results you show by default, the more extraction you’ll get, but it all depends on how many parameters are listed there.</p>
<p>4) Either copy the code <strong><a href="/media/legacy/wmt-script.txt">from the script located here</a></strong> and drag it into your bookmark bar, or you can create a new bookmark and paste the code in directly.</p>
<p>5) Get back to your Search Console URL parameter report and click on the new bookmark you’ve just created.</p>
<p>6) You’ll end up with an extraction box you can easily copy from and paste into your spreadsheets.</p>
<h2>FAQ</h2>
<p><strong>1) Why isn’t the script working?</strong></p>
<p>Please ensure you’re viewing an unrestricted Search Console URL parameters report, and that you’ve copied the code exactly.  At times, Chrome might remove the start of the script as well, so view the URL of the bookmark and ensure it begins with “javascript:” without quotes</p>
<p><strong>2) How many example URLs will it extract?</strong></p>
<p>As many as are shown on the screen. The maximum you can view at a time is 500; if you have more than 500 you’ll need to navigate to page 2 and run the script again.</p>
<p><strong>3) What do I do with these examples once I have them?</strong></p>
<p>Crawl them using your favourite SEO crawler, we recommend Screaming Frog. The idea is to check the directives, such as Noindex or canonical to see if you’ve resolved the parameter issues, if they are even issues to begin with.</p>
<p><strong>4) Do you store any of my data?</strong></p>
<p>Absolutely not.</p>
<p>Let us know what you think <a href="https://twitter.com/definemg">@definemg</a>.</p>
