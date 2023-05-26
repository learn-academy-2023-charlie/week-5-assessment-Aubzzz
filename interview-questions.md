# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer:I do not currently recall, but I can get back to you with an answer.

Researched answer: The Ruby keyword super can only be used inside of a method. It will pass arguements from child class to the parent class and return results from calling the parent class/method. However, it acts differently if arguments are passed or not. If no arguements are passed in the new method, it will not pass up the new method, rather it will reach out to the parent for information. If used on a method, that method will then look for the parent of that method.

2. What is a gem?

Your answer: A gem is a database management system that Ruby utilizes for holding snippets of code.

Researched answer: A gem is an open source database library that houses code. A coder could place a gem into one of their own gems and run the code, without having to actually have the code. A coder can install gems locally on their computer; some gems only need one gem downloaded, others will need multiple gems downloaded in order to function properly. To ensure that gems used in a project for one coder could work for another coder, Bundler was created to ensure that gem version dates matched across the board.

3. What is a relational database? Are there other kinds of databases?

Your answer: A relational databse is when an object has data that is related.

Researched answer: A relational database is a database that has datapoints that are related to one another. There are other examples of databases as well; all with the common goal of keeping data organized. Relational databases have a predined structure and displays data through tables, columns and rows. NoSQL database are another type of database that depends on tools rather than relational information/structure. SQL/relational databases are strict and orderly, where NoSQL databases have looser restrictions. Having a NoSQL database is good for large amounts of qualitiive information that may not have a lot of relational aspects.

4. What are primary keys? Why purpose does a primary key serve?

Your answer: Primary keys contain unique information in Ruby.

Researched answer: In Ruby, Primary keys contain unique information and are stored in a table, identifying each row. In Active Record the primary key is identiied as 'id' and is automically created when the table is created or when the data is input into the table. It is also created solely in the integar column.

5. What are the five HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: I do not know, however I will find out and get back to you.

Researched answer: The five HTTP verbs are GET, PATCH, POST, PUT and DELETE. These are considered methods.

-POST is in the CREATE portion of CRUD. This will create new resources
-GET is in the READ portion of CRUD. GET will show a representation of a resource that was called. Data cannot be changed here, only viewed.
-PUT is in the Update portion of CRUD. PUT updates the resource or shows the update of the parent resource.
-PATCH is in the Update portion of CRUD. PATCH will modify the resource and only contains the actual changes, not the resource itself. 
-DELETE is in the delete portion of CRUD. This one is self explanetory.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations: A framework that allows only valid data to be saved to a databse. Example, an invalid email will not be saved over a valid email entry.

2. RESTful routes: Representational State Transfer is a set of standards used across the board for HTTP methods and cRUD so that navigativng an application is more consistent and clean for a user. It uses a naming pattern to ensure that each ver or method is exactly what is going on.

3. ERB: ERB stands for embedded Ruby and it is a template system that can be added to any plain-text document to provide flow control or details from the document.

4. Params: A user can send data to your web application using the method, Params, this rerturns an object and acts like a hash; there are three ways. 1. A query param 2. Submitting a Form 3. Within the URL itself. I

5. API: API stands for application programming interface. This is a framework that has definitions, and protocols for developing application software and allows the applications to talk to one another.
