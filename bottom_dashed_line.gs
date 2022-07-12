var ss = SpreadsheetApp.getActive();
var sheet = ss.getActiveSheet();
var currentCell = sheet.getActiveCell();
var maxRow = sheet.getMaxRows();
var maxColumn = sheet.getMaxColumns();

function main() {
  select_all_rows();
  draw_lines();
  move_cell();
}

// 第2引数を自由に設定
function repeat_main() {
  for(i=0;i<maxRow;i++) {
    main();
  }
}

function select_all_rows() {
  var startRow = currentCell.getRow();
  var startColumn = currentCell.getColumn();
  var selectRows = sheet.getRange(startRow, startColumn, 1, maxColumn);
  selectRows.activate();
}

function draw_lines() {
  // 枠線設定
  // setBorder(top, left, bottom, right, vertical, horizontal, color, style)
  ss.getActiveRangeList().setBorder(null, null, true, null, null, null, '#999999', SpreadsheetApp.BorderStyle.DASHED);
}

function move_cell() {
  var newCell = currentCell.offset(1,0);
  currentCell = newCell.activate();
}
