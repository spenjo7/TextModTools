const capture = (str, pattern) => {
	if(!str){ return null } else if(!pattern){ return str }
		// Supports captuer groups
	const matches = str.match(pattern)
	return matches? matches.pop() : null
}