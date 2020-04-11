/**
 * @param {character[][]} grid
 * @return {number}
 * 
 * 11110
   11010
   11000
   00000
 * 
 */
//DFS 
var numIslands = function(grid) {
  let islandNum = 0
  for (let i =0; i<grid.length; i++) {
    for (let j = 0; j< grid[0].length; j++) {
      if(grid[i][j]) {
        infect(grid, i, j)
        islandNum ++ 
      }
    }
  }
  return islandNum
}

const infect = function(grid, i, j) {
  if(i < 0 || j < 0 || i>=grid.length || j>=grid[0].length || grid[i][j] !==1) return 
  grid[i][j] = '2'
  infect(grid, i + 1, j)
  infect(grid, i - 1, j)
  infect(grid, i, j + 1)
  infect(grid, i, j - 1)
}