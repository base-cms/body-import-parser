# Pennwell Extraction Rules

## Default
To access, send a `POST` request to `/pennwell/default`. This rule set performs the following operations:
- Removes duplicative whitespace values (via `html.replace(/\s\s+/g, '')`)
- Extracts the `deck` text from elements classed with `.paraStyle_headline_deck` and removes the element from the cleaned HTML.
- Extracts an `author` object from elements classed with `.paraStyle_byline` or `.paraStyle_byline` and removes the elements from the cleaned HTML.
- If an `<h1>` is detected anywhere in the body, all heading elements are increased by one (e.g. `<h1>` becomes `<h2>`, `<h2>` becomes `<h3>`, etc).

### Examples

#### Request
```html
<h4 class="paraStyle_headline_deck">Put Drivers in Safe Hands with Telematics</h4>
			<h2 class="paraStyle_byline">By Jenny Shiner</h2>

<p>Test</p>

<p class="paraStyle_body">At the end of the day, when considering the objectives of a telematics implementation, no reasoning is quite as important as increasing safety for employees and the general public on the roadways. Using telematics as part of a fleetwide safety initiative will drive the program miles forward while providing the business with several other impactful benefits. UP </p>
			<p class="paraStyle_body_bio"><strong class="charStyle_bold">The Author: </strong></p>

<p class="paraStyle_body_bio"><img src="//aemstatic-ww2.azureedge.net/content/dam/up/print-articles/volume-23/issue-2/1902UPpf2-a01.jpg" alt="" width="167" height="167"></p>

<p class="paraStyle_body_bio">Jenny Shiner is the communications manager for GPS Insight. She graduated from Arizona State University with a bachelor’s degree in communication and is responsible for communication for all business segments that GPS Insight targets. For more information on telematics and fuel card technologies, visit www.gpsinsight.com.</p>
```

#### Response
```json
{
  "extracted": {
    "deck": "Put Drivers in Safe Hands with Telematics",
    "author": {
      "name": "Jenny Shiner",
      "image": "//aemstatic-ww2.azureedge.net/content/dam/up/print-articles/volume-23/issue-2/1902UPpf2-a01.jpg",
      "bio": "<p><strong class=\"charStyle_bold\">The Author: </strong></p><p>Jenny Shiner is the communications manager for GPS Insight. She graduated from Arizona State University with a bachelor&#x2019;s degree in communication and is responsible for communication for all business segments that GPS Insight targets. For more information on telematics and fuel card technologies, visit www.gpsinsight.com.</p>"
    }
  },
  "html": {
    "cleaned": "<p>Test</p><p class=\"paraStyle_body\">At the end of the day, when considering the objectives of a telematics implementation, no reasoning is quite as important as increasing safety for employees and the general public on the roadways. Using telematics as part of a fleetwide safety initiative will drive the program miles forward while providing the business with several other impactful benefits. UP </p>",
    "original": "<h4 class=\"paraStyle_headline_deck\">Put Drivers in Safe Hands with Telematics</h4>\n\t\t\t<h2 class=\"paraStyle_byline\">By Jenny Shiner</h2>\n\n<p>Test</p>\n\n<p class=\"paraStyle_body\">At the end of the day, when considering the objectives of a telematics implementation, no reasoning is quite as important as increasing safety for employees and the general public on the roadways. Using telematics as part of a fleetwide safety initiative will drive the program miles forward while providing the business with several other impactful benefits. UP </p>\n\t\t\t<p class=\"paraStyle_body_bio\"><strong class=\"charStyle_bold\">The Author: </strong></p>\n\n<p class=\"paraStyle_body_bio\"><img src=\"//aemstatic-ww2.azureedge.net/content/dam/up/print-articles/volume-23/issue-2/1902UPpf2-a01.jpg\" alt=\"\" width=\"167\" height=\"167\"></p>\n\n<p class=\"paraStyle_body_bio\">Jenny Shiner is the communications manager for GPS Insight. She graduated from Arizona State University with a bachelor’s degree in communication and is responsible for communication for all business segments that GPS Insight targets. For more information on telematics and fuel card technologies, visit www.gpsinsight.com.</p>"
  }
}
```
