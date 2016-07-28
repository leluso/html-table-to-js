# html-table-to-js
A simple HTML table -> JS Object converter / scraper, for Hockey Relativity. Initialize with a Cheerio selector or anything that works like JQuery.

``` javascript
'use strict';
...
let htmlTableToJs = require('html-table-to-js')($);
htmlTableToJs.get('table thead tr', 'table tbody tr');
```

You can change the selector with htmlTableToJs.setSelector. 
