// complete the given function

function palindrome(str){
	 str = str.toLowerCase();
      let i =0;
	let j = str.length-1;
	while(i<=j){
		while(str[i]==" "){
			i++;
		}
		while( str[j]==" ")j--;
		// console.log(str[i],str[j]);
		if(str[i] != str[j]) return false;
		i++;
		j--;
	}
	return true;
}
module.exports = palindrome
// console.log(palindrome( "abbababababababa" ));
