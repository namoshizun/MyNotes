## Node.JS - Express.JS In Action

### Chapter 1. What is Express?



#### 1.1 What is this Node.JS Bussiness?

**Node.JS is:**

* **<u>*A runtime platform that operates on V8 Javascript engine*</u>** ( But it is not a framework!!! )
* It complements JavaScript with many backend capabilities, such as IO, File System ... ( But it's cumbersome to use these native APIs, so Express came to light just like the jQuery to the native JS )

**Why Node.JS**:

* How cool it is to have just one programming language from the frontend to backend ::smiley:!!!
* It is blazing fast :D. V8 is an awesome engine. 
* It runs JavaScript which naturally supports **<u>*Async Programming*</u>** and hence handles **<u>*concurrency*</u>** nicely and easily. It makes programming easier since you don't have to mangle multi-threads. The server is just faithfully just serving requests and doing messenger work :smiley:

#### What is Express.JS?





### Chapter 10: Security

A list of security issues or error-prone situations you should take care of: 

1. <u>**Perilous parsing of query strings ( 10.2.3 )**</u>:
   * The value of the query key that appears twice will be parsed into an array, and will be string if otherwise ... 
   * So treat it as array by default!
2. **<u>Using HTTPS</u>**:
   * It is so important that you should enforce users to send HTTPS requests. Use <u>express-enforces-ssl</u> to do this
   * Tell users to stay on HTTPS by using HSTS. Use <u>Halmet</u> to do this
3. <u>**Preventing XSS**</u>:
   * **SANITISZE** user input to invalid executable code. 
   * Set X-XSS-Protection header to prevent reflected XSS (don't let the browser to execute what is in the url )
   * Also check out this useful HTTP widget called Content-Security-Policy
4. **<u>Preventing CSRF</u>**:
   * Set & Check CSRF token to make sure every request is sent from authenticated source. Use <u>csurf</u> middleware to do this.
5. **<u>Handling server crashes</u>**:
   * Use <u>Forever-CLI</u> to serve your code. Forever helps auto-restart the server once it's down. 
6. <u>**Hide your server**</u>:


   * Stop Express publicizing itself by disable the X-Powered-By header
   * Again, use Helmet ( this package really worth a try :D it makes it easy to config HTTP options )




#### Questions:

Pg133: why setting {extended: false} in bodyParser makes parsing simpler and more secure???

Pg133: which way is better for handling user authentication ?

1. Use password ?
2. Send an access token in header and verifies that manually in backend ?



#### Good Links

[Translation from SQL Terminology to Mongo Terminology](http://docs.mongodb.org/manual/reference/sql-comparison/index.html)

