function myPromise() {
	let arr = [1,2,3,4];
	return new Promise((resolve) => {
		let EvenNums = arr.filter((num) => num%2==0);
		let doubledEven = [];
		for(let el of arr) {
			if(el%2==0) {
				doubledEven.push(el*2);
			}
		}
		setTimeout(() => resolve([EvenNums, doubledEven]), 3000);
	})
}

myPromise()
.then((res) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			output.innerText = res[0];
			resolve(res);
		}, 1000);
	})
})
.then((finalRes) => {
	setTimeout(() => {
		console.log("finalRes", finalRes[1]);
		output.innerText = finalRes[1];
	}, 2000)
})