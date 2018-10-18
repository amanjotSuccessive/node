https://docs.google.com/document/d/1NxWCG_Y1Bagq0inBlv-IJ1AaufMIvlGnjCgHvdoyaQo/edit
JS Task Functions 1 - 20th July

Note: Write the below program in pure javascript, without using any library.
Acceptance Criteria:  Lesser the lines, higher the score. Must be modular, i.e. do follow “Single Responsibility” and “Pure Function” concepts.
Submission: Please create a “folder” in your branch named as “Function-1” and put your task into that.

1. Write a program to pick selected properties of object. Where first argument is the “Object” and then rest of the arguments are the keys that need to be picked. Please handle all the use cases. Also if key is not available, then pass “null” for that key.
 
Input: 
pick ({key1: 'A1', key2: 'B', value1: 10, value2: 20}, 'key1', 'key2', 'value1')
 
Output:
{key1: 'A1', key2: 'B', 'value1': 10}




2. A simple program containing an array of objects with each object containing following properties:
fullname
age
address
	Create an HTML list containing UL and LI tags, where LI will only display “fullname” but when you click on “fullname”, it will open an modal popup, which will show the rest of the information.
	Note: No loops will be used when you click on an element to open a modal window.
 
3.. Suppose we need to print a stacked bar graph to see the total number of new users joined every year, further categorized by media in descending orders and by maintaining position.


Consider following array of objects:
	[
	{ year: 2016: type: ‘Facebook’, newUsers: 3000 },
		{ year: 2016: type: ‘Twitter’, newUsers: 2000 },
		{ year: 2016: type: ‘Instagram, newUsers: 2500 },
	{ year: 2017: type: ‘Facebook’, newUsers: 2300 },
		{ year: 2017: type: ‘Twitter’, newUsers: 2500 },
		{ year: 2017: type: ‘Instagram, newUsers: 2800 },
	{ year: 2018: type: ‘Facebook’, newUsers: 2000 },
		{ year: 2018: type: ‘Twitter’, newUsers: 2200 },
		{ year: 2018: type: ‘Instagram, newUsers: 2500 },
	]

	Result is:
	{
		2016: {
 		  total: 7500
		  values: [
			{type: ‘Facebook’, newUsers: ‘3000’, position: [1, 3000] },
			{type: ‘Instagram, newUsers: ‘2500’, position: [3001, 5500]},
			{type: ‘Twitter’, newUsers: ‘2000’, position: [5501, 7500]}
  ]
		},
		2017: {
 		  total: 7600
		  values: [
			{type: ‘Instagram, newUsers: 2800, position: [1, 2800] },
			{type: ‘Twitter’, newUsers: ‘2500’, position: [2801, 5300]},
			{type: ‘Facebook’, newUsers: ‘2300’, position: [5301, 7600]}
  ]
		},
2018: {
 		  total: 6700
		  values: [
			{type: ‘Instagram, newUsers: 2500, position: [1, 2500] },
			{type: ‘Twitter’, newUsers: ‘2200’, position: [2501, 4700]},
			{type: ‘Facebook’, newUsers: ‘2000’, position: [4701, 6700]}
  ]
		},

4. Write a program to convert an object to its cartesian product, and array inside an object can be at any level i.e. 1..n. 
In below example we have “tags”, “members”, “members.sports” i.e. upto 2 levels.

Consider following object:
{
  "title": "Nest eggs",
  "tags":  [ "cash", "shares" ],
  "members": [ 
    {
      "name":    "John Smith",
	      “Sports”: [“Cricket”, “Football”]
	    },
    {
      "name":    "Alice White",
	      “Sports”: [“Cricket”, “Hockey”]
	    }
  ]
}


	Result:
	[
   { "title": "Nest eggs",  "tags":  "cash",   "members": {  "name":    "John Smith", “Sports”: “Football” }},
   { "title": "Nest eggs",  "tags":  "cash",   "members": {  "name":    "John Smith", “Sports”: “Cricket”  }},
   { "title": "Nest eggs",  "tags":  "cash",   "members": {  "name":    "Alice White", “Sports”: “Cricket” }},
   { "title": "Nest eggs",  "tags":  "cash",   "members": {  "name":    "Alice White",  “Sports”: “Hockey” }},
   { "title": "Nest eggs",  "tags":  "shares",  "members": {  "name":  "John Smith",  “Sports”: “Cricket” }},
   { "title": "Nest eggs",  "tags":  "shares",  "members": {  "name":   "John Smith",  “Sports”: “Football” }},
   { "title": "Nest eggs",  "tags":  "shares",  "members": {  "name":  "Alice White",  “Sports”: “Cricket”   }},
   { "title": "Nest eggs",  "tags":  "shares",  "members": {  "name":  "Alice White",  “Sports”: “Hockey”  }}
	]


