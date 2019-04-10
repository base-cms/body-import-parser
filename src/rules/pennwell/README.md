# Pennwell Extraction Rules

## Default
To access, send a `POST` request to `/pennwell/default`. This rule set performs the following operations:
- Removes duplicative whitespace values
- If an `<h1>` or `<h2>` is detected anywhere in the body, all heading elements are increased by two (e.g. `<h1>` becomes `<h3>`, `<h2>` becomes `<h4>`, etc).
- Removes all `<form>` and `<style>` elements.
- Removes all `id`, `class`, `style` and `data-*` attributes from elements.
- Removes PennNet.com iframe embeds, e.g. where `iframe[src*="pennnet.com"]`.\
