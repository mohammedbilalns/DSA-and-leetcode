
function flattenNestedArr(arr){
	
	let result = []

	for(let i=0;i<arr.length;i++){
		if(Array.isArray(arr[i])){
			result.concat(flattenNestedArr(arr[i]))
		}else {
			result.push(arr[i])
		}
	}

	return result
}


