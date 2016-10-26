var tpl = (title,now,categories)=>
`---
layout: post
title:  "${title}"
date:   ${now} +0800
categories: ${categories}
---`;

module.exports = tpl;
