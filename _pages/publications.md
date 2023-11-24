---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

<!-- Publications -->
<!-- ====== -->


You can also find my articles on <a href="https://scholar.google.com/citations?user=2hVqqW4AAAAJ&hl">my Google Scholar profile</a>.


{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
