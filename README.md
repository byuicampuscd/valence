# Valence

### Helper Functions

##### function log(title, err, data)
  Writes to the console the message or the error message passed in.
Parameters:
  title: string - title of the log output
  err:   string - error message to output
  data:  string - message to output
Return:
  NOTHING
  
##### function searchGradesById(gradeId)
  Searches for a grade object in data which has a gradeId provided by the parameter.
Parameters:
  gradeId: int - the number representing the gradeID of the desired grade ID.
Return:
  Index of desired grade in data.grades 
  
##### function searchCategoriesById(catId)
  Searches for a category object in data which has a categoryId provided by the parameter.
Parameters:
  catId: int - the number representing the catID of the desired category ID.
Return:
  Index of desired category in data.categories 

##### function extend(target, objectToCopy)
  Mimics the functionality of jQuery's extend. Allows for shallow copies to be made.
Parameters:
  target:       object - the object that will be written to.
  objectToCopy: object - the object that will be copied.
Return:
  target: object - the object that will be written to.

##### makeDataWrapper()
   Returns an object that has functions to get information from the data object.
Parameters:
   NONE
Return:
   SEE DESCRIPTION
