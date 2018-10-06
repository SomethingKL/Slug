function memoize(func) {
	if(func === undefined)
		return undefined

	function hash() {
	}

	let memory = {
		memoized: new Map(),
		run: function() {
			let args = Array.prototype.slice.call(arguments).join()
			//if(true)//memory.memoized.has(args))
			//	return "IT'S WORKING:: "//+memory.memoized.get(args)

			//console.log("{rd~0:9}:{1:_5}".fmt("mem size", memory.memoized.size))
			
			let response = func.apply(this, arguments)
			console.log("{rd~0} : {1} : {2}".fmt(
			args, response, memory.memoized.has(args)))
			memory.memoized.set(args, response)
			return response
		}
	}

	return function() {
		/*memory.memoized.forEach((value, key) => {
			console.log(
				"{ma~0}:{1}".fmt(
				`memoized[${key}]`, value)
			)
		})*/
		let args = Array.prototype.slice.call(arguments)
		let str
		args.forEach((e) => str+)
		return (memory.memoized.has(args)) ?
			memory.memoized.get(args) :
			memory.run.apply(this, arguments)
	}
}

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

module.exports = memoize