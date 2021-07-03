// Program for array rotation
// Time complexity : O(n * d) 
// Auxiliary Space : O(1)

function rotation(arr, n){
    for (let i = 0; i < n; i++) {
        let start = arr[0]
        for (let j = 0; j < arr.length-1; j++) {
            arr[j]=arr[j+1]
        }
        arr[arr.length-1]=start
    }
    return arr
}

let arr = [1,2,3,4,5]
console.log(rotation(arr,2))
