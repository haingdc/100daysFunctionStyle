const validations = { name: isPresent, email: isEmail.concat(isPresent) }

isPresent(obj.name).concat( isEmail( obj.email ) )