// const oneStepBinary = (numberA:string,numberB:string)=>{
// 	let length = numberA.length;
// 	let result=''
// 	const higherIndex = Array(length).fill(null)
	
// 	while(--length){
// 		if(numberA[length]>numberB[length]){
// 			result+='1'
// 		}
// 		else
// 	}

// }


export const binaryDevider = (numberA:string,numberB:string) =>{
	const lengthA = numberA.length;
	const lengthB = numberB.length;
	if(lengthB>lengthA) return {result:[0,numberA]}
	if(lengthB===lengthA){
		let i = 0;
		while(i++<lengthA){
			if(numberB[i]>numberA[i]){
				return [0,numberA]
			}
		}
		return {result:['1',null]}
	}	

	const newB = numberB+('0'.repeat(lengthA-lengthB))


	return{result:[0,0],steps:[]}
}
