/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

// # of tiles in matrix = n * n;
// 1st placement of rook === 2(n-1) - 2;

// Examples:

// n = 4:
// 1st rook placement: remove 6 tiles
// 2nd '' : remove 4 tiles
// 3rd '': remove 2 tiles

// n = 3
// 1st rook placement: remove 4 tiles
// 2nd '': remove 2 tiles

window.findNRooksSolution = function(n) {
  var board = new Board({n: n});

  var findSolution = function(board, row, col) {
    if (row === col) {
      return board.rows();
    }

    for (var i = 0; i < col; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyRooksConflicts()) {
        // ^ if there are no conflicts we can leave
        // piece on board (which we did on line 40)
        var result = findSolution(board, row + 1, col);
        // ^ move on to the next row after placing piece
        if (result) {
          return result;
        }
      }
      board.togglePiece(row, i);
    }
  };

  var solution = findSolution(board, 0, n); //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({n: n});
  var solutionCount = 0;

  var findSolution = function(board, row, col) {
    if (row === col) {
      solutionCount++;
      return;
    }

    for (var i = 0; i < col; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyRooksConflicts()) {
        // ^ if there are no conflicts we can leave
        // piece on board (which we did on line 40)
        var result = findSolution(board, row + 1, col);
        // ^ move on to the next row after placing piece
        if (result) {
          return;
        }
      }
      board.togglePiece(row, i);
    }
  };

  findSolution(board, 0, n);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other

window.findNQueensSolution = function(n) {
  var board = new Board({n: n});
  //var solution = board.rows();

  var findSolution = function(board, row, col) {
    if (row === col) {
      return board.rows();
    }

    for (var i = 0; i < col; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyQueensConflicts()) {
        // ^ if there are no conflicts we can leave
        // piece on board (which we did on line 40)
        var result = findSolution(board, row + 1, col);
        // ^ move on to the next row after placing piece
        if (result) {
          return result;
        }
      }
      board.togglePiece(row, i);
    }
  };

  var solution = findSolution(board, 0, n); //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution || board.rows();
  // var board = new Board({n});
  // var solutionCount = 0;

  // var findOneQueenSolution = function(board, cols, row) {
  //   if (row === cols) {
  //     return;
  //   }
  //   for (var columnPosition = 0; columnPosition < cols; columnPosition++ ) {
  //     board.togglePiece(row, columnPosition);
  //     solutionCount++;
  //     if (!board.hasAnyQueensConflicts()) {
  //       findOneQueenSolution(board, cols, row + 1);
  //     }
  //     if (solutionCount === cols && !board.hasAnyQueensConflicts()) {
  //       return;
  //     }
  //     board.togglePiece(row, columnPosition);
  //     solutionCount--;
  //   }
  // };
  // findOneQueenSolution(board, n, 0);
  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(board.rows()));
  // return board.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var board = new Board({n: n});
  var solutionCount = 0;

  var findSolution = function(board, row, col) {
    if (row === col) {
      solutionCount++;
      return;
    }

    for (var i = 0; i < col; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyQueensConflicts()) {
        // ^ if there are no conflicts we can leave
        // piece on board (which we did on line 40)
        var result = findSolution(board, row + 1, col);
        // ^ move on to the next row after placing piece
        if (result) {
          return;
        }
      }
      board.togglePiece(row, i);
    }
  };

  findSolution(board, 0, n);


  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
