---
layout: post
title:  baseurl
tags: Jekyll-baseurl
categories: Jekyll
---


If you go to the provided URL and don’t see the site, like this for example:
*404 Not Found*

*check on the value of baseurl in the config.yml file.*

 This file, which we’ll talk more about later, controls the overall configuration for the entire site.

The baseurl variable is appended to the main domain, which when we work offline is http://localhost:4000.
In the above example we want our site to show up at http://localhost:4000. In the config.yml file our baseurl variable is set to:

`baseurl: "http://localhost"`
This may seem right at first, but because this value is appended to the main domain it actually makes the site try to load at http://localhost:4000http://localhost.
So, we need to change the value to an empty string like this:

`baseurl: ""`
Your site will then load as expected.
If you want to load your site from a subdirectory instead, change the baseurlvalue to the name of the subdirectory, being sure to start and finish with a forward slash:

`baseurl: "/themedemo/"`


