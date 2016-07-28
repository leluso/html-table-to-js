'use strict';

module.exports = function(s) {
  let $ = s;

  function get(headerSelector, rowsSelector) {
    let headerTr = $(headerSelector)[0];
    let rows = $(rowsSelector);

    let columns = [];
    for(let h = 0; h < headerTr.children.length; h++) {
      let value = headerTr.children[h].data || headerTr.children[h].children[0].data;
      value = value.trim();
      if(value) {
        columns.push({
          value: value,
          width: +headerTr.children[h].attribs.colspan || 1,
        });
      }
    }

    let arrayMap = [];
    for(let r = 0; r < rows.length; r++) {
      let row = $(rows[r]);
      let rowMap = {};
      let tdi = 0;
      for(let h = 0; h < columns.length; h++) {
        let column = columns[h];
        if(column.width === 1) {
          rowMap[column.value] = row.children()[tdi].children[0].data.trim();
        }

        else {
          rowMap[column.value] = [];
          for(let i = 0; i < column.width; i++) {
            rowMap[column.value].push(row.children()[tdi + i].children[0].data.trim());
          }
        }

        tdi += column.width;
      }

      arrayMap.push(rowMap);
    }

    return arrayMap;
  }

  function setSelector(s) {
    $ = s;
  }

  return {
    get: get,
    setSelector: setSelector,
  }
}
