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

var findSolution = function(board, n, row, verifier, callback) {
  if (row === n) {
    return callback(board);
  }
  for (var i = 0; i < n; i++) {
    board.togglePiece(row, i);
    if (!board[verifier]()) {
      var solution = findSolution(board, n, row + 1, verifier, callback);
      if (solution) {
        return solution;
      }
    }
    board.togglePiece(row, i);
  }
}

window.findNRooksSolution = function(n) {
  var board = new Board({n:n});
  return findSolution(board, n, 0, "hasAnyRooksConflicts", function(board) {
    return board.rows();
  })

  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));

};




// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n:n});

  findSolution(board, n, 0, "hasAnyRooksConflicts", function(board) {
    solutionCount++;
  })

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n:n});
  var solution = board.rows();
  // debugger;
  var res = findSolution(board, n, 0, "hasAnyQueensConflicts", function(board) {

    return solution;
  })
  return res || solution;
  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));

};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});

  findSolution(board, n, 0, "hasAnyQueensConflicts", function(board) {
    solutionCount++;
  })

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
