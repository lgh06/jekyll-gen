var tpl = (title,now)=>
`---
layout: post
title:  "${title}"
date:   ${now} +0800
categories: jekyll update
---`;

module.exports = tpl;
