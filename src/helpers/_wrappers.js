function generator(func, structure) {
	// structure of input matches structure output 
	if(arguments[1] === undefined || arguments[1] === "match")
		return function() {
		let response = {
			last: arguments[0],
			next: function() {
				response.last = func.apply(this, [response.last])
				return response.last
			}
		}
		return response
	}
	// the same input produces different output
	if(arguments[1] === "same")
		return function() {
		let args = arguments
		let response = {
			last: undefined,
			next: function() {
				response.last = func.apply(this, args)
				return response.last
			}
		}
		return response
	}
	// the first argument is the previous output
	if(arguments[1] === "first")
		return function() {
		let args = arguments
		let response = {
			last: args[0],
			next: function() {
				response.last = func.apply(this, args)
				args[0] = response.last
				return response.last
			}
		}
		return response
	}
	// unknown structure
	return undefined
}

module.exports = generator