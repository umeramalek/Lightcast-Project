
// regex - that takes in an integer and returns a string representation of the number 
export function formatNumber(v){
	return String(v).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}