# TextModTools
A collection of tools designed to assist with text manipulation

const capture = (str, pattern) => {
	if(!str){ return null } else if(!pattern){ return str }
		// Supports capture groups and sub-capture groups
	const matches = str.match(pattern)
	return matches? matches.pop() : null
} 

// sub-string
capture('foobarbaz', 'bar')      //  "bar"
capture('foobarbaz', 'b(a)r')    //  "a"

// regex
capture('foobarbaz', /ba./ )      //  "bar"
capture('foobarbaz', /b(a.)/ )    //  "ar"
capture('foobarbaz', /b(a(.))/ )  //  "r"
