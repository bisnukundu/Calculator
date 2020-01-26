
const qs = (t)=>{
	return document.querySelector(t);
}
const al = (t)=>{
	return document.querySelectorAll(t);
}
let total = qs(".total")
let res = qs(".res")
let btn = al(".c_i")
let del = qs(".o_c")
let clear = qs(".clear")
let ttt;
btn.forEach((i)=>{
	i.addEventListener("click",(even)=>{
		let val = even.target.value;
		ttt = res.value= res.value + val
	})
})

total.addEventListener("click",()=>{
	res.value = eval(ttt)
})
clear.addEventListener("click",()=>{
	res.value = ""
})
// 
del.addEventListener('click',()=>{
	let tset = res.value.slice(0,-1);
	res.value = tset
})















// const qs = (t)=>{
	// return document.querySelector(t);
// }
// const al = (t)=>{
	// return document.querySelectorAll(t);
// }
// let total = qs(".total")
// let res = qs(".res")
// let btn = al(".c_i")
// let del = qs(".o_c")
// let clear = qs(".clear")
// let ttt;
// btn.forEach((i)=>{
	// i.addEventListener("click",(even)=>{
		// let val = even.target.value;
		// ttt = res.value= res.value + val
	// })
// })

// total.addEventListener("click",()=>{
	// res.value = eval(ttt)
// })
// clear.addEventListener("click",()=>{
	// res.value = ""
// })
// 






