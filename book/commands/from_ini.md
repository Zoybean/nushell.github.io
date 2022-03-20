---
title: from ini
layout: command
version: 0.59.1
usage: |
  Parse text as .ini and create table
---

# `{{ $frontmatter.title }}`

<div style='white-space: pre-wrap;'>{{ $frontmatter.usage }}</div>

## Signature

```> from ini ```

## Examples

Converts ini formatted string to table
```shell
> '[foo]
a=1
b=2' | from ini
```