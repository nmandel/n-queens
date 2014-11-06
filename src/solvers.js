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

window.findNRooksSolution = function(n) {
  var solution = new Board({n:n});
  //console.log(solution(4));
  var list = [];
  for(var t = 0; t<n; t++){
    list.push(0);
  }
  // for(var i = 0; i<n; i++){
  //   solution.push([]);
  //   for(var k = 0; k<n; k++){
  //     solution[i].push(0);
  //   }
  // }
  for(var j = 0; j<n; j++){
    for(var l = 0; l<n; l++){
      if(solution.get(j)[l] === 0){
        list[l] = 1;
        solution.set(j, list);
        //for (var i = 0; i < n; i++) {console.log(solution.get(i))}
        // console.log(" ");
        if(solution.hasAnyRowConflicts() || solution.hasAnyColConflicts()){
            list[l] = 0;
            solution.set(j, list);
        }

      }
    }
    list = [];
    for(var t = 0; t<n; t++){
      list.push(0);
    }
  }
  var result = [];
  for (var p = 0; p < n; p++) {
    result.push(solution.get(p));
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return result;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
