let inputDiv=document.getElementById("input")
let outputDiv=document.getElementById("output")
let inverseBtn=document.getElementById("inverse-btn")
let noInv=document.getElementById("error")
let N=3
let inMatrix=[[0,0,0],[0,0,0],[0,0,0]]
let outMatrix=[[0,0,0],[0,0,0],[0,0,0]]
let index=0;
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        outputDiv.children[index].textContent=outMatrix[i][j];
        index++;
    }
}




function swap(arr , i1 , j1 , i2,
    j2)
{
var temp = arr[i1][j1];
arr[i1][j1] = arr[i2][j2];
arr[i2][j2] = temp;
return arr;
}

function determinant(mat,n){
    var num1, num2, det = 1, index,
                        total = 1; // Initialize result
 
        // temporary array for storing row
        var temp = Array(n + 1).fill(0);
 
        // loop for traversing the diagonal elements
        for (i = 0; i < n; i++)
        {
            index = i; // initialize the index
 
            // finding the index which has non zero value
            while (index < n && mat[index][i] == 0)
            {
                index++;
            }
            if (index == n) // if there is non zero element
            {
                // the determinant of matrix as zero
                continue;
            }
            if (index != i)
            {
                // loop for swapping the diagonal element row
                // and index row
                for (j = 0; j < n; j++)
                {
                    swap(mat, index, j, i, j);
                }
                // determinant sign changes when we shift
                // rows go through determinant properties
                det = parseInt((det * Math.pow(-1, index - i)));
            }
 
            // storing the values of diagonal row elements
            for (j = 0; j < n; j++)
            {
                temp[j] = mat[i][j];
            }
 
            // traversing every row below the diagonal
            // element
            for (j = i + 1; j < n; j++)
            {
                num1 = temp[i]; // value of diagonal element
                num2 = mat[j][i]; // value of next row element
 
                // traversing every column of row
                // and multiplying to every row
                for (k = 0; k < n; k++)
                {
                    // multiplying to make the diagonal
                    // element and next row element equal
                    mat[j][k] = (num1 * mat[j][k])
                                - (num2 * temp[k]);
                }
                total = total * num1; // Det(kA)=kDet(A);
            }
        }
 
        // multiplying the diagonal elements to get
        // determinant
        for (i = 0; i < n; i++)
        {
            det = det * mat[i][i];
        }
        return (det / total);
  
}

inverseBtn.addEventListener('click',inverseCalc)

function inverseCalc(){
    let inputIndex=0;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            inMatrix[i][j]=inputDiv.children[inputIndex].value;
            console.log(inMatrix[i][j])
            inputIndex++;
        }
    }
    let invMatrix=inMatrix
    let det=determinant(invMatrix,3)
    console.log(det)
    
    noInv.textContent=`Determinat is ${det}`
    return
}