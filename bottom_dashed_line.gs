var ss = SpreadsheetApp.getActive();
var sheet = ss.getActiveSheet();
var currentCell = sheet.getActiveCell();
var maxColumn = sheet.getMaxColumns();

function main() {
  select_all_rows();
  draw_lines();
  move_cell();
}

function repeat_main() {
  for(i=0;i<5;i++) {
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
  ss.getActiveRangeList().setBorder(null, null, true, null, null, null, '#999999', SpreadsheetApp.BorderStyle.DASHED);
}

function move_cell() {
  var newCell = currentCell.offset(1,0);
  currentCell = newCell.activate();
}
