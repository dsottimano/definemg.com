---
title: "Home"
draft: false
template: "landing"
---

<h1>Your site is live</h1>
<p>This page is a plain file in your own GitHub repository. You can edit it by hand at
<code>/admin</code>, or you can connect an AI assistant and simply tell it what you
want the site to be.</p>

<h2>Connect an assistant</h2>
<p>This site speaks <strong>MCP</strong>, so any assistant that supports it can read and
write your content directly. The address is this site's own, with <code>/api/mcp</code>
on the end:</p>
<p><code>https://your-site-address/api/mcp</code></p>
<p>The first time you connect, you will be asked to sign in with GitHub. Approve as the
account that owns this site. That is how the site knows it is you, and it is the only
password involved.</p>

<h3>Claude</h3>
<ol>
  <li>Settings → Connectors → add a custom connector</li>
  <li>Paste the address above</li>
  <li>Approve the GitHub sign-in</li>
</ol>

<h3>ChatGPT</h3>
<ol>
  <li>Settings → Connectors → create a custom connector</li>
  <li>Paste the address above</li>
  <li>Approve the GitHub sign-in</li>
</ol>

<h3>Claude Code</h3>
<p><code>claude mcp add --transport http lanza https://your-site-address/api/mcp</code></p>

<h2>Then ask for the site you want</h2>
<p>Describe the business, not the software. <em>"I run a violin repair shop in Toronto. I
want a page for each service I offer, with the price and how long it takes, and a page
listing them all."</em> The assistant works out what content types the site needs, writes
the page templates, creates the URLs and fills them in.</p>
<p>Everything it does lands on a <strong>draft</strong> copy of your site, so you can look
at the whole change before anyone else can. Nothing is public until you press Publish, and
one button in <code>/admin</code> throws the whole draft away if you don't like it.</p>
