export function random(num) { 
  return Math.round(Math.random() * num);
}


export const counter = () => {
	let cnt = 0;
	return () => {return ++cnt;}
};