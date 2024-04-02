// function pivotSearch(arr){
//     if (arr.length <= 1) {
//     return arr; // Trả về mảng ban đầu nếu chỉ có một phần tử hoặc không có phần tử nào
//   }    
//     let pivotIndex = arr.length - 1
//     let pivot = arr[pivotIndex]
//     const left = []
//     const right = []

//     let currentItem  
//     for(let i = 0 ; i < pivotIndex; i ++){
//         currentItem = arr[i]
//         if( currentItem < pivot ){
//             left.push(currentItem)
//         }else{
//             right.push(currentItem)
//         }
//     }
//     return [...pivotSearch(left),pivot, ...pivotSearch(right)]
// }

// console.log(pivotSearch([100, 2, 5, 4, 7, 5, 6, 8, 0, 12, 34, 15]))


