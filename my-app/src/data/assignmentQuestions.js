const QUESTION_BANK = {
  ai: [
    { question: 'What is the main goal of Artificial Intelligence?', options: ['To solve puzzles', 'To understand human thinking', 'To make intelligent machines', 'To play games'], answer: 2 },
    { question: 'Which of the following is an application of AI?', options: ['Email spam filtering', 'Autonomous vehicles', 'Speech recognition', 'All of the above'], answer: 3 },
    { question: 'Who is considered the father of Artificial Intelligence?', options: ['Alan Turing', 'John McCarthy', 'Marvin Minsky', 'Geoffrey Hinton'], answer: 1 },
    { question: 'Which of the following is NOT a type of machine learning?', options: ['Supervised Learning', 'Reinforcement Learning', 'Unsupervised Learning', 'Assisted Learning'], answer: 3 },
    { question: 'What does NLP stand for in AI?', options: ['Natural Language Processing', 'Natural Learning Processing', 'Neural Language Programming', 'None of the above'], answer: 0 },
    { question: 'Which algorithm is used for classification problems in AI?', options: ['K-Means', 'Linear Regression', 'Decision Tree', 'Apriori'], answer: 2 },
    { question: 'What is the Turing Test used for?', options: ['Measuring CPU speed', 'Testing computer vision', 'Checking machine intelligence', 'Validating software'], answer: 2 },
    { question: 'Which of the following is a component of an intelligent agent?', options: ['Perception', 'Learning', 'Reasoning', 'All of the above'], answer: 3 },
    { question: 'In which AI approach are knowledge and rules explicitly coded?', options: ['Neural Networks', 'Rule-based System', 'Genetic Algorithms', 'Deep Learning'], answer: 1 },
    { question: 'Which of these is an example of Weak AI?', options: ['Siri', 'Self-aware robots', 'Sentient machines', 'Conscious AI'], answer: 0 },
  ],
  aws: [
    { question: 'What does AWS stand for?', options: ['Amazon Web Services', 'Advanced Web Systems', 'Amazon Website Setup', 'Application Web Service'], answer: 0 },
    { question: 'Which AWS service is used for computing power in the cloud?', options: ['S3', 'Lambda', 'EC2', 'RDS'], answer: 2 },
    { question: 'What is S3 primarily used for?', options: ['Relational database', 'File storage and backups', 'Serverless functions', 'Analytics'], answer: 1 },
    { question: 'Which service is best for serverless event-driven code?', options: ['EC2', 'CloudFront', 'Lambda', 'IAM'], answer: 2 },
    { question: 'Which AWS feature helps control permissions?', options: ['VPC', 'IAM', 'CloudWatch', 'SNS'], answer: 1 },
    { question: 'What is the purpose of an EC2 instance?', options: ['Store static files', 'Run virtual servers', 'Host DNS records', 'Monitor traffic'], answer: 1 },
    { question: 'Which service provides monitored logging and metrics?', options: ['CloudWatch', 'S3', 'RDS', 'Elastic Beanstalk'], answer: 0 },
    { question: 'Which AWS storage is ideal for object storage?', options: ['EBS', 'S3', 'EFS', 'Instance Store'], answer: 1 },
    { question: 'What is the purpose of Route 53?', options: ['Compute workloads', 'Domain Name System service', 'Queue management', 'Data warehousing'], answer: 1 },
    { question: 'Which service is used for durable message queues?', options: ['SNS', 'SQS', 'ECR', 'CloudFront'], answer: 1 },
  ],
  azure: [
    { question: 'What is Azure?', options: ['A database tool', 'Microsoft cloud platform', 'A coding language', 'A browser'], answer: 1 },
    { question: 'Which Azure service hosts virtual machines?', options: ['Azure Functions', 'Azure VM', 'Azure SQL', 'Azure DevOps'], answer: 1 },
    { question: 'What is Azure App Service used for?', options: ['Data processing', 'Deploying web apps', 'Monitoring networks', 'Backing up disks'], answer: 1 },
    { question: 'Which resource stores files in Azure?', options: ['Blob Storage', 'Kubernetes', 'Queue Storage', 'App Insights'], answer: 0 },
    { question: 'Which Azure feature provides identity and access management?', options: ['Azure AD', 'Azure CDN', 'Azure Monitor', 'Azure Front Door'], answer: 0 },
    { question: 'Which service is Azure’s container orchestration platform?', options: ['Azure Kubernetes Service', 'Azure Functions', 'Azure SQL', 'Azure Cache'], answer: 0 },
    { question: 'What is Azure SQL?', options: ['A serverless compute engine', 'A managed relational database', 'A virtual network', 'A container registry'], answer: 1 },
    { question: 'Which service is used to build and deploy pipelines?', options: ['Azure DevOps', 'Azure Functions', 'Azure Blob', 'Azure VM'], answer: 0 },
    { question: 'What does Azure Monitor do?', options: ['Runs containers', 'Monitors apps and infrastructure', 'Creates websites', 'Manages DNS'], answer: 1 },
    { question: 'Which Azure service helps deliver content globally?', options: ['Azure CDN', 'Azure Firewall', 'Azure Synapse', 'Azure Backup'], answer: 0 },
  ],
  c: [
    { question: 'What is the correct syntax to declare a pointer in C?', options: ['int p', 'int *p', 'int &p', 'pointer int p'], answer: 1 },
    { question: 'Which of the following is the correct operator to compare two values?', options: ['==', '=', '===', '!='], answer: 0 },
    { question: 'What does int a = 5; printf("%d", a++) display?', options: ['5', '6', 'Compilation Error', 'Runtime Error'], answer: 0 },
    { question: 'Which function is used to read formatted input in C?', options: ['printf()', 'scanf()', 'gets()', 'puts()'], answer: 1 },
    { question: 'What is the size of int typically on a 32-bit system?', options: ['2 bytes', '4 bytes', '8 bytes', '16 bytes'], answer: 1 },
    { question: 'Which of the following is not valid C storage class?', options: ['auto', 'register', 'static', 'mutable'], answer: 3 },
    { question: 'Which loop will execute at least once, even if the condition is false initially?', options: ['for', 'while', 'do-while', 'None of the above'], answer: 2 },
    { question: 'What is a correct way to declare a multi-dimensional array in C?', options: ['int arr[10][20]', 'int arr[10,20]', 'int arr(10)(20)', 'int arr{10,20}'], answer: 0 },
    { question: 'Which header file is required for malloc()?', options: ['stdlib.h', 'stdio.h', 'string.h', 'math.h'], answer: 0 },
    { question: 'Which function is used to find the length of a string in C?', options: ['strcpy()', 'strlen()', 'strcat()', 'strcmp()'], answer: 1 },
  ],
  cpp: [
    { question: 'Which keyword is used to define a class in C++?', options: ['class', 'struct', 'type', 'object'], answer: 0 },
    { question: 'What is the purpose of a constructor?', options: ['To initialize an object', 'To destroy an object', 'To define a variable', 'To overload operators'], answer: 0 },
    { question: 'Which operator is used for dynamic memory allocation in C++?', options: ['new', 'malloc', 'alloc', 'create'], answer: 0 },
    { question: 'What is inheritance in C++?', options: ['A way to reuse code', 'A type of loop', 'A pointer', 'A macro'], answer: 0 },
    { question: 'Which of the following is an OOP concept?', options: ['Polymorphism', 'Recursion', 'Enum', 'Pointer'], answer: 0 },
    { question: 'What does STL stand for?', options: ['Standard Template Library', 'Simple Template Logic', 'System Template List', 'Standard Test Library'], answer: 0 },
    { question: 'Which access specifier allows members to be accessed only within the class?', options: ['public', 'private', 'protected', 'friend'], answer: 1 },
    { question: 'Which function is used to display output in C++?', options: ['printf()', 'cout', 'scan()', 'puts()'], answer: 1 },
    { question: 'Which concept allows a function to behave differently based on object type?', options: ['Encapsulation', 'Inheritance', 'Polymorphism', 'Abstraction'], answer: 2 },
    { question: 'Which header is commonly used for input/output in C++?', options: ['stdio.h', 'iostream', 'math.h', 'stdlib.h'], answer: 1 },
  ],
  css: [
    { question: 'What does CSS stand for?', options: ['Creative Style Sheets', 'Cascading Style Sheets', 'Computer Style Syntax', 'Colorful Style System'], answer: 1 },
    { question: 'Which property changes text color?', options: ['font-size', 'color', 'background', 'padding'], answer: 1 },
    { question: 'Which CSS selector targets an element by id?', options: ['.class', '#id', 'element', '*'], answer: 1 },
    { question: 'Which property controls spacing inside an element?', options: ['margin', 'padding', 'border', 'width'], answer: 1 },
    { question: 'What does display: flex do?', options: ['Makes text bold', 'Creates a flex container', 'Hides an element', 'Changes font style'], answer: 1 },
    { question: 'Which CSS unit is relative to the viewport width?', options: ['em', 'vh', 'px', 'rem'], answer: 1 },
    { question: 'Which property rounds corners?', options: ['border-radius', 'margin-radius', 'padding-radius', 'box-shadow'], answer: 0 },
    { question: 'How do you apply CSS to an HTML file?', options: ['Using a script tag', 'Using a style tag or external stylesheet', 'Using JavaScript', 'Using PHP'], answer: 1 },
    { question: 'Which property controls element position relative to page flow?', options: ['position', 'float', 'display', 'color'], answer: 0 },
    { question: 'Which pseudo-class targets the mouse hover state?', options: [':hover', ':focus', ':visited', ':active'], answer: 0 },
  ],
  dbms: [
    { question: 'What is DBMS?', options: ['Database Management System', 'Data Backup Method', 'Data Browser Management', 'Digitized Binary Memory'], answer: 0 },
    { question: 'Which key uniquely identifies a row in a table?', options: ['Foreign key', 'Primary key', 'Unique key', 'Index'], answer: 1 },
    { question: 'What is normalization?', options: ['Reducing redundancy', 'Increasing duplication', 'Encrypting data', 'Deleting tables'], answer: 0 },
    { question: 'Which language is used to query a database?', options: ['SQL', 'HTML', 'CSS', 'JS'], answer: 0 },
    { question: 'Which join returns rows common to both tables?', options: ['LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'FULL JOIN'], answer: 2 },
    { question: 'What is a transaction?', options: ['A set of operations treated as one unit', 'A saved query', 'A table column', 'A database view'], answer: 0 },
    { question: 'Which command removes rows from a table?', options: ['DELETE', 'DROP', 'TRUNCATE', 'REMOVE'], answer: 0 },
    { question: 'What does ACID stand for?', options: ['Atomicity, Consistency, Isolation, Durability', 'Access, Control, Integrity, Data', 'Accuracy, Consistency, Integrity, Data', 'Atomic, Consistent, Indexed, Durable'], answer: 0 },
    { question: 'Which command creates a table?', options: ['CREATE TABLE', 'ADD TABLE', 'INSERT TABLE', 'MAKE TABLE'], answer: 0 },
    { question: 'Which is a database object that stores a query result?', options: ['View', 'Index', 'Trigger', 'Constraint'], answer: 0 },
  ],
  django: [
    { question: 'What is Django?', options: ['A Python web framework', 'A CSS library', 'A database engine', 'A package manager'], answer: 0 },
    { question: 'Which file defines URL routes in Django?', options: ['views.py', 'urls.py', 'models.py', 'forms.py'], answer: 1 },
    { question: 'Which command starts a Django development server?', options: ['django runserver', 'python manage.py runserver', 'django startapp', 'manage.py start'], answer: 1 },
    { question: 'What are models used for?', options: ['Rendering pages', 'Defining database tables', 'Styling templates', 'Sending emails'], answer: 1 },
    { question: 'Which template engine does Django use by default?', options: ['Jinja2', 'Blade', 'Handlebars', 'EJS'], answer: 0 },
    { question: 'What is MTV in Django?', options: ['Model Template View', 'Model Test View', 'Main Template View', 'Model Text View'], answer: 0 },
    { question: 'What is a migration in Django?', options: ['A database schema change history', 'A static file', 'A CSS media query', 'An API endpoint'], answer: 0 },
    { question: 'Which command creates a Django app?', options: ['python manage.py startapp', 'django create app', 'manage.py newapp', 'python app.py new'], answer: 0 },
    { question: 'What is a queryset?', options: ['A Python object representing database data', 'A CSS class', 'An HTML template', 'A router rule'], answer: 0 },
    { question: 'Which file handles app settings?', options: ['settings.py', 'config.py', 'urls.py', 'forms.py'], answer: 0 },
  ],
  dl: [
    { question: 'What does DL stand for in AI?', options: ['Deep Learning', 'Data Learning', 'Digital Logic', 'Device Learning'], answer: 0 },
    { question: 'Which type of neural network is widely used for image data?', options: ['RNN', 'CNN', 'SVM', 'Decision Tree'], answer: 1 },
    { question: 'What does ReLU do?', options: ['Regularizes data', 'Activates neurons', 'Sorts features', 'Loads weights'], answer: 1 },
    { question: 'Which model type processes sequential data?', options: ['RNN', 'CNN', 'KNN', 'Naive Bayes'], answer: 0 },
    { question: 'What is a layer in a neural network?', options: ['A set of neurons', 'A weight matrix', 'A database table', 'A line of code'], answer: 0 },
    { question: 'What is backpropagation?', options: ['A method to update weights', 'A data cleaning step', 'A model deployment step', 'A SQL query'], answer: 0 },
    { question: 'Which framework is popular for deep learning?', options: ['TensorFlow', 'Bootstrap', 'Django', 'Express'], answer: 0 },
    { question: 'What is overfitting?', options: ['Model performs badly on train data', 'Model learns noise instead of signal', 'Model never trains', 'Model is too small'], answer: 1 },
    { question: 'What does epoch mean?', options: ['One full pass through dataset', 'A layer type', 'A Python list', 'A GPU memory size'], answer: 0 },
    { question: 'What is a feature vector?', options: ['A list of input characteristics', 'A Python file', 'A CSS style', 'A database row'], answer: 0 },
  ],
  flask: [
    { question: 'What is Flask?', options: ['A Python web framework', 'A JavaScript library', 'A database engine', 'A CSS preprocessor'], answer: 0 },
    { question: 'Which file usually contains Flask app logic?', options: ['app.py', 'styles.css', 'index.html', 'routes.js'], answer: 0 },
    { question: 'What is a route in Flask?', options: ['A URL endpoint', 'A CSS selector', 'A database field', 'A JavaScript function'], answer: 0 },
    { question: 'Which decorator defines a route?', options: ['@app.route', '@app.url', '@app.get', '@route'], answer: 0 },
    { question: 'Which command runs a Flask app?', options: ['flask run', 'python run.py', 'npm start', 'django run'], answer: 0 },
    { question: 'What is Jinja used for in Flask?', options: ['Template rendering', 'Database access', 'Authentication', 'Background jobs'], answer: 0 },
    { question: 'What is a template in Flask?', options: ['An HTML file with dynamic values', 'A YAML file', 'A CSS page', 'A JSON model'], answer: 0 },
    { question: 'Which package is used to install Flask?', options: ['pip install flask', 'npm install flask', 'brew install flask', 'apt install flask'], answer: 0 },
    { question: 'Which object is used to access the app configuration?', options: ['request', 'app.config', 'session', 'jsonify'], answer: 1 },
    { question: 'Which function sends JSON response?', options: ['render_template', 'jsonify', 'redirect', 'abort'], answer: 1 },
  ],
  flutter: [
    { question: 'What is Flutter?', options: ['A front-end framework by Google', 'A database tool', 'A cloud provider', 'A Python library'], answer: 0 },
    { question: 'Which language does Flutter use?', options: ['Java', 'Dart', 'Swift', 'Kotlin'], answer: 1 },
    { question: 'What is a Widget in Flutter?', options: ['A UI component', 'A database table', 'A CSS class', 'An API route'], answer: 0 },
    { question: 'Which widget is used for a screen layout?', options: ['Text', 'Container', 'Row', 'Column'], answer: 2 },
    { question: 'What does setState do?', options: ['Refreshes UI', 'Creates a database', 'Sends HTTP request', 'Imports package'], answer: 0 },
    { question: 'Which folder usually contains app assets?', options: ['assets', 'lib', 'test', 'bin'], answer: 0 },
    { question: 'What is MaterialApp?', options: ['A root app widget', 'A database class', 'An HTTP client', 'A state manager'], answer: 0 },
    { question: 'Which widget displays user text?', options: ['Text', 'Image', 'Button', 'Icon'], answer: 0 },
    { question: 'Which package is commonly used for navigation?', options: ['flutter/material.dart', 'react-router-dom', 'express', 'next'], answer: 0 },
    { question: 'What is a StatefulWidget?', options: ['A widget with mutable state', 'A static text widget', 'A layout container', 'A local storage tool'], answer: 0 },
  ],
  gcp: [
    { question: 'What does GCP stand for?', options: ['Google Cloud Platform', 'Global Cloud Provider', 'Google Code Platform', 'General Cloud Program'], answer: 0 },
    { question: 'Which GCP service is used for virtual machines?', options: ['Compute Engine', 'BigQuery', 'Cloud Storage', 'Cloud Functions'], answer: 0 },
    { question: 'Which service is used for serverless code?', options: ['Cloud Functions', 'Cloud SQL', 'Kubernetes Engine', 'Dataflow'], answer: 0 },
    { question: 'Which GCP service stores large datasets for analytics?', options: ['BigQuery', 'Firebase', 'Cloud CDN', 'Pub/Sub'], answer: 0 },
    { question: 'What is Cloud Storage?', options: ['Object storage service', 'Database engine', 'Message queue', 'Load balancer'], answer: 0 },
    { question: 'Which service helps with event-driven messaging?', options: ['Pub/Sub', 'Cloud Spanner', 'Compute Engine', 'Cloud Build'], answer: 0 },
    { question: 'What does IAM control?', options: ['Identity and access', 'Storage performance', 'Network routing', 'Template generation'], answer: 0 },
    { question: 'Which service is used for container orchestration?', options: ['Kubernetes Engine', 'Cloud Storage', 'Bigtable', 'Artifact Registry'], answer: 0 },
    { question: 'Which product is Google’s NoSQL database?', options: ['Firestore', 'Cloud SQL', 'BigQuery', 'Cloud Run'], answer: 0 },
    { question: 'Which service helps deploy containers without managing servers?', options: ['Cloud Run', 'Compute Engine', 'Cloud SQL', 'Artifact Registry'], answer: 0 },
  ],
  hibernate: [
    { question: 'What is Hibernate?', options: ['A Java ORM framework', 'A CSS library', 'A serverless tool', 'A testing tool'], answer: 0 },
    { question: 'What does ORM stand for?', options: ['Object Relational Mapping', 'Object Runtime Manager', 'Ordered Response Method', 'Open Resource Model'], answer: 0 },
    { question: 'Which file configures Hibernate?', options: ['hibernate.cfg.xml', 'settings.json', 'pom.xml', 'App.java'], answer: 0 },
    { question: 'Which annotation marks an entity class?', options: ['@Entity', '@Table', '@Column', '@Id'], answer: 0 },
    { question: 'What is a session in Hibernate?', options: ['A unit of work with the database', 'A CSS session', 'A UI component', 'A route'], answer: 0 },
    { question: 'Which annotation marks a primary key?', options: ['@Id', '@GeneratedValue', '@Entity', '@Column'], answer: 0 },
    { question: 'What is lazy loading?', options: ['Loading data only when needed', 'Loading all data at once', 'Caching requests', 'Removing rows'], answer: 0 },
    { question: 'Which method saves an entity?', options: ['save()', 'persist()', 'insert()', 'add()'], answer: 1 },
    { question: 'What is an HQL query?', options: ['Hibernate Query Language', 'High-level Query Language', 'Hyper Query Language', 'HTML Query Logic'], answer: 0 },
    { question: 'What is the purpose of a transaction?', options: ['To ensure atomic database operations', 'To render templates', 'To style pages', 'To create controllers'], answer: 0 },
  ],
  html: [
    { question: 'What does HTML stand for?', options: ['HyperText Markup Language', 'Hyper Transfer Markup Language', 'Home Tool Markup Language', 'High Text Management Language'], answer: 0 },
    { question: 'Which tag is used for the main heading?', options: ['<h1>', '<head>', '<p>', '<title>'], answer: 0 },
    { question: 'Which tag creates a hyperlink?', options: ['<link>', '<a>', '<href>', '<url>'], answer: 1 },
    { question: 'What is the correct way to insert an image?', options: ['<img src="image.jpg">', '<image src="image.jpg">', '<pic src="image.jpg">', '<img href="image.jpg">'], answer: 0 },
    { question: 'Which tag is used to create a list item?', options: ['<li>', '<ul>', '<ol>', '<list>'], answer: 0 },
    { question: 'Which tag defines the body of a page?', options: ['<body>', '<main>', '<section>', '<header>'], answer: 0 },
    { question: 'What does the <meta> tag do?', options: ['Defines metadata', 'Creates a form', 'Adds a button', 'Styles text'], answer: 0 },
    { question: 'Which attribute sets the URL for a link?', options: ['href', 'src', 'title', 'alt'], answer: 0 },
    { question: 'Which HTML5 element is used for navigation?', options: ['<nav>', '<header>', '<footer>', '<article>'], answer: 0 },
    { question: 'Which tag creates a table row?', options: ['<tr>', '<td>', '<th>', '<table>'], answer: 0 },
  ],
  java: [
    { question: 'What is Java?', options: ['A programming language', 'A database', 'A browser', 'A server'], answer: 0 },
    { question: 'Which keyword is used to create a class in Java?', options: ['class', 'new', 'object', 'type'], answer: 0 },
    { question: 'What is the main method signature?', options: ['public static void main(String[] args)', 'void main()', 'main(String args)', 'public void main()'], answer: 0 },
    { question: 'Which access modifier allows access from anywhere?', options: ['private', 'protected', 'public', 'default'], answer: 2 },
    { question: 'What is inheritance in Java?', options: ['A class acquiring properties of another class', 'A database concept', 'A variable type', 'A loop'], answer: 0 },
    { question: 'What is an interface in Java?', options: ['A contract with abstract methods', 'A class instance', 'A package', 'A variable'], answer: 0 },
    { question: 'Which keyword creates an object?', options: ['new', 'class', 'this', 'return'], answer: 0 },
    { question: 'What does JVM stand for?', options: ['Java Virtual Machine', 'Java Version Manager', 'Java Virtual Method', 'Just Virtual Machine'], answer: 0 },
    { question: 'Which collection is used for dynamic array?', options: ['ArrayList', 'HashMap', 'Set', 'Queue'], answer: 0 },
    { question: 'Which exception is thrown when dividing by zero?', options: ['ArithmeticException', 'NullPointerException', 'ArrayIndexOutOfBoundsException', 'IOException'], answer: 0 },
  ],
  js: [
    { question: 'What is JavaScript primarily used for?', options: ['Styling web pages', 'Structuring web pages', 'Making web pages interactive', 'Database management'], answer: 2 },
    { question: 'Which is the correct syntax to declare a JavaScript variable?', options: ['variable x=10;', 'v x=10;', 'var x=10;', 'dim x=10;'], answer: 2 },
    { question: 'Inside which HTML element do we put JavaScript code?', options: ['<script>', '<javascript>', '<js>', '<code>'], answer: 0 },
    { question: 'What will typeof "Hello" return in JavaScript?', options: ['String', 'text', 'object', 'character'], answer: 0 },
    { question: 'How do you write a comment in JavaScript?', options: ['<!--comment-->', '/*comment*/', '#comment', '//comment'], answer: 3 },
    { question: 'Which operator is used to assign a value to a variable?', options: ['==', '=', '===', ':='], answer: 1 },
    { question: 'How do you write a function in JavaScript?', options: ['function=myFunc()', 'function:myfunc()', 'function myFunc()', 'func myFunc()'], answer: 2 },
    { question: 'How do you call a function named myFunction?', options: ['call myFunction()', 'myFunction()', 'call function myFunction()', 'Call.myFunction()'], answer: 1 },
    { question: 'What does the == operator do in JavaScript?', options: ['Compares values only', 'Assigns a value', 'Compares value and type', 'Checks if variable exists'], answer: 2 },
    { question: 'Which method can be used to select an element by its ID in JavaScript?', options: ['getElement("id")', 'getElementByID()', 'getElementById()', 'querySelectorId()'], answer: 2 },
  ],
  ml: [
    { question: 'What is Machine Learning?', options: ['Programming without code', 'Teaching computers from data', 'A type of database', 'Cloud storage'], answer: 1 },
    { question: 'What is supervised learning?', options: ['Learning with labeled data', 'Learning with unlabeled data', 'Learning without feedback', 'None of the above'], answer: 0 },
    { question: 'Which algorithm is commonly used for classification?', options: ['Decision Tree', 'HTTP Server', 'CSS Grid', 'SQL'], answer: 0 },
    { question: 'What is feature selection?', options: ['Choosing relevant input variables', 'Choosing output labels', 'Creating tables', 'Loading data'], answer: 0 },
    { question: 'What is overfitting?', options: ['Model fits training data too closely', 'Model is undertrained', 'Model has no features', 'Model is not loaded'], answer: 0 },
    { question: 'Which metric is used for regression loss?', options: ['MSE', 'HTML', 'JPEG', 'SSH'], answer: 0 },
    { question: 'What is unsupervised learning?', options: ['Learning without labeled output', 'Learning with labels', 'Model deployment', 'Database backup'], answer: 0 },
    { question: 'Which library is widely used in Python ML?', options: ['Scikit-learn', 'Bootstrap', 'React', 'Express'], answer: 0 },
    { question: 'What is a model?', options: ['A learned representation from data', 'A CSS rule', 'An API key', 'A cloud instance'], answer: 0 },
    { question: 'What is clustering?', options: ['Grouping similar data points', 'Sorting files', 'Compiling code', 'Debugging'], answer: 0 },
  ],
  mongodb: [
    { question: 'What is MongoDB?', options: ['A relational database', 'A NoSQL document database', 'A Java framework', 'A web server'], answer: 1 },
    { question: 'What is a document in MongoDB?', options: ['A JSON-like record', 'A SQL table', 'A CSS file', 'An array'], answer: 0 },
    { question: 'Which command inserts a document?', options: ['insertOne()', 'save()', 'create()', 'add()'], answer: 0 },
    { question: 'Which field is commonly used as a unique identifier?', options: ['_id', 'id', 'uuid', 'key'], answer: 0 },
    { question: 'What is a collection in MongoDB?', options: ['A group of documents', 'A table schema', 'A network request', 'A JSON parser'], answer: 0 },
    { question: 'Which operator matches values in an array?', options: ['$in', '$eq', '$gt', '$or'], answer: 0 },
    { question: 'What does aggregation do?', options: ['Processes data in pipelines', 'Styles collections', 'Creates HTML', 'Runs JavaScript'], answer: 0 },
    { question: 'Which query finds documents matching a condition?', options: ['find()', 'select()', 'query()', 'filter()'], answer: 0 },
    { question: 'Which format are MongoDB documents stored in?', options: ['JSON/BSON', 'XML', 'YAML', 'CSV'], answer: 0 },
    { question: 'What is sharding?', options: ['Distributing data across multiple servers', 'Deleting indexes', 'Encrypting passwords', 'Caching requests'], answer: 0 },
  ],
  node: [
    { question: 'What is Node.js?', options: ['A JavaScript runtime for server-side code', 'A database', 'A CSS framework', 'A Python library'], answer: 0 },
    { question: 'Which module is used to create a server?', options: ['http', 'fs', 'path', 'express'], answer: 0 },
    { question: 'What is npm?', options: ['Node package manager', 'Network performance monitor', 'A test framework', 'A database system'], answer: 0 },
    { question: 'Which package is commonly used to build APIs?', options: ['express', 'bootstrap', 'webpack', 'axios'], answer: 0 },
    { question: 'What does fs do?', options: ['File system operations', 'Form submission', 'Frontend rendering', 'Database connection'], answer: 0 },
    { question: 'Which function is used to read a file in Node?', options: ['fs.readFile()', 'readFile()', 'file.read()', 'openFile()'], answer: 0 },
    { question: 'What is a callback?', options: ['A function passed as an argument', 'A CSS rule', 'A database query', 'A DOM selector'], answer: 0 },
    { question: 'Which statement runs asynchronous operations?', options: ['Promise', 'async/await', 'if', 'for'], answer: 1 },
    { question: 'What does Express provide?', options: ['Web framework for Node', 'UI component library', 'Machine learning model', 'Database migration tool'], answer: 0 },
    { question: 'What is middleware in Express?', options: ['Functions used in request processing chain', 'A CSS file', 'A database record', 'A state variable'], answer: 0 },
  ],
  php: [
    { question: 'What does PHP stand for?', options: ['Hypertext Preprocessor', 'High Performance Programming', 'PHP Hypertext Processor', 'Personal Home Page'], answer: 0 },
    { question: 'Which symbol is used to start a PHP block?', options: ['<?php', '<php>', '<script>', '<?>'], answer: 0 },
    { question: 'Which variable prefix is used in PHP?', options: ['$', '@', '#', '&'], answer: 0 },
    { question: 'Which function prints output?', options: ['echo', 'print_r', 'console.log', 'alert'], answer: 0 },
    { question: 'What is PHP commonly used for?', options: ['Server-side web development', 'Designing CSS', 'Mobile apps', 'Database modeling'], answer: 0 },
    { question: 'Which superglobal stores form data?', options: ['$_GET', '$_POST', '$_SERVER', '$_SESSION'], answer: 1 },
    { question: 'What does mysqli connect to?', options: ['MySQL database', 'MongoDB', 'CSS files', 'REST APIs'], answer: 0 },
    { question: 'Which keyword defines a function in PHP?', options: ['function', 'def', 'fn', 'func'], answer: 0 },
    { question: 'What is an array in PHP?', options: ['A list of values', 'A CSS rule', 'An HTML tag', 'A JSON object'], answer: 0 },
    { question: 'Which function checks if a variable is set?', options: ['isset()', 'defined()', 'type()', 'var_dump()'], answer: 0 },
  ],
  python: [
    { question: 'What is Python?', options: ['A programming language', 'A database', 'An operating system', 'A markup language'], answer: 0 },
    { question: 'Which keyword is used to define a function?', options: ['function', 'def', 'fun', 'lambda'], answer: 1 },
    { question: 'Which data type is used for text?', options: ['str', 'int', 'float', 'bool'], answer: 0 },
    { question: 'What is the output of len("hello")?', options: ['4', '5', '3', '6'], answer: 1 },
    { question: 'Which statement is used for loops?', options: ['for', 'if', 'while', 'switch'], answer: 0 },
    { question: 'What does list.append(x) do?', options: ['Adds x to the list', 'Removes x', 'Sorts the list', 'Copies the list'], answer: 0 },
    { question: 'Which Python library is used for data analysis?', options: ['pandas', 'express', 'flask', 'numpy'], answer: 0 },
    { question: 'What is a dictionary?', options: ['A key-value data structure', 'A loop statement', 'A class', 'A file type'], answer: 0 },
    { question: 'Which operator checks equality?', options: ['==', '=', '!=', '>='], answer: 0 },
    { question: 'Which function reads user input?', options: ['input()', 'print()', 'read()', 'scan()'], answer: 0 },
  ],
  react: [
    { question: 'What is React?', options: ['A JavaScript library for UI', 'A database', 'A CSS framework', 'A server language'], answer: 0 },
    { question: 'What is JSX?', options: ['JavaScript XML syntax', 'A CSS file', 'A backend route', 'A database query'], answer: 0 },
    { question: 'Which hook is used for state in function components?', options: ['useState', 'useEffect', 'useMemo', 'useRef'], answer: 0 },
    { question: 'What does useEffect do?', options: ['Runs side effects after render', 'Defines a component', 'Stores global state', 'Creates CSS classes'], answer: 0 },
    { question: 'Which keyword is used to render elements?', options: ['return', 'render', 'output', 'create'], answer: 1 },
    { question: 'What is a component?', options: ['A reusable UI building block', 'A database table', 'A CSS selector', 'A file path'], answer: 0 },
    { question: 'Which prop is used to pass data to a child component?', options: ['props', 'state', 'context', 'route'], answer: 0 },
    { question: 'What is React Router used for?', options: ['Navigation between pages', 'Database storage', 'Styling components', 'Sending emails'], answer: 0 },
    { question: 'Which command creates a React app?', options: ['npx create-react-app', 'npm init react', 'react start', 'npm run react'], answer: 0 },
    { question: 'What does state represent?', options: ['Data that can change over time', 'Static CSS property', 'A file path', 'A route target'], answer: 0 },
  ],
  spring: [
    { question: 'What is Spring Boot?', options: ['A Java framework for apps', 'A CSS preprocessor', 'A database tool', 'A build tool'], answer: 0 },
    { question: 'What does Dependency Injection do?', options: ['Manages object creation', 'Styles pages', 'Creates tables', 'Handles routes'], answer: 0 },
    { question: 'Which annotation marks a controller class?', options: ['@Controller', '@Component', '@Service', '@Entity'], answer: 0 },
    { question: 'Which annotation maps HTTP requests?', options: ['@RequestMapping', '@Autowired', '@Configuration', '@PathVariable'], answer: 0 },
    { question: 'What is a bean in Spring?', options: ['A managed object instance', 'A CSS class', 'A React hook', 'A JSON property'], answer: 0 },
    { question: 'Which file stores Spring Boot configuration?', options: ['application.properties', 'settings.json', 'routes.js', 'index.html'], answer: 0 },
    { question: 'What is Spring Data?', options: ['A module for data access', 'A UI library', 'A deployment service', 'A CSS framework'], answer: 0 },
    { question: 'Which annotation injects dependencies?', options: ['@Autowired', '@Inject', '@Mapping', '@Controller'], answer: 0 },
    { question: 'What does REST API mean?', options: ['Representational State Transfer', 'Rapid Execution Service Tool', 'Resource Endpoint State Tool', 'Remote Execution Service'], answer: 0 },
    { question: 'Which dependency helps create web APIs?', options: ['spring-boot-starter-web', 'spring-boot-starter-css', 'spring-boot-starter-react', 'spring-boot-starter-db'], answer: 0 },
  ],
  sql: [
    { question: 'What does SQL stand for?', options: ['Structured Query Language', 'Simple Query Language', 'Server Query Logic', 'Structured Question Language'], answer: 0 },
    { question: 'Which command retrieves data from a table?', options: ['SELECT', 'INSERT', 'UPDATE', 'DELETE'], answer: 0 },
    { question: 'Which clause filters rows?', options: ['WHERE', 'SELECT', 'FROM', 'GROUP BY'], answer: 0 },
    { question: 'Which command adds a new row?', options: ['INSERT', 'DELETE', 'DROP', 'ALTER'], answer: 0 },
    { question: 'Which keyword sorts records?', options: ['ORDER BY', 'GROUP BY', 'WHERE', 'HAVING'], answer: 0 },
    { question: 'What is a primary key?', options: ['A unique identifier for a row', 'A foreign key', 'A table name', 'A view'], answer: 0 },
    { question: 'Which join includes all rows from both tables?', options: ['FULL OUTER JOIN', 'INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN'], answer: 0 },
    { question: 'Which command changes table data?', options: ['UPDATE', 'SELECT', 'CREATE', 'ALTER'], answer: 0 },
    { question: 'Which clause groups rows by column values?', options: ['GROUP BY', 'WHERE', 'HAVING', 'ORDER BY'], answer: 0 },
    { question: 'What does DISTINCT do?', options: ['Removes duplicate rows', 'Adds a table', 'Sorts values', 'Updates rows'], answer: 0 },
  ],
  default: [
    { question: 'Which skill is most important for learning technology?', options: ['Consistency', 'Guessing', 'Ignoring errors', 'Avoiding practice'], answer: 0 },
    { question: 'What helps you build confidence in programming?', options: ['Regular practice', 'Copy-pasting only', 'Skipping basics', 'Avoiding review'], answer: 0 },
    { question: 'Why do developers use version control?', options: ['To track changes and collaborate', 'To design CSS', 'To create videos', 'To store images'], answer: 0 },
    { question: 'What is the best way to improve debugging skill?', options: ['Reading errors and testing small steps', 'Guessing randomly', 'Avoiding logs', 'Ignoring warnings'], answer: 0 },
  ],
};

const shuffle = (items) => {
  const cloned = [...items];

  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[randomIndex]] = [cloned[randomIndex], cloned[i]];
  }

  return cloned;
};

export const getAssignmentQuestions = (courseKey, count = 10) => {
  const pool = QUESTION_BANK[courseKey] || QUESTION_BANK.default;
  const uniquePool = shuffle(pool).slice(0, Math.min(count, pool.length));

  return uniquePool.map((question) => ({
    ...question,
    options: [...question.options],
  }));
};

export const fetchAssignmentQuestions = async (courseKey, count = 10, apiUrl) => {
  if (apiUrl) {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch assignment questions: ${response.status}`);
      }

      const data = await response.json();
      const questions = Array.isArray(data) ? data : data.questions;

      if (Array.isArray(questions) && questions.length > 0) {
        return shuffle(questions).slice(0, Math.min(count, questions.length));
      }
    } catch (error) {
      console.warn('Assignment API fallback used:', error);
    }
  }

  return getAssignmentQuestions(courseKey, count);
};
