**Mini Bank App - React**
This is a simple React web application that allows you to manage your bank transactions. The app displays a table of your recent bank transactions and provides the functionality to add new transactions and filter them based on their description. Additionally, there are bonus features to sort transactions alphabetically by category or description and to delete transactions.

**Project Setup & Data**

Before running the app, make sure you have set up the project and prepared the data.

**Project Setup**

    Clone this repository to your local machine:

bash

git clone https://github.com/your-username/mini-bank-app.git

    Change to the project directory:

bash

cd mini-bank-app

    Install dependencies:

bash

npm install

**Data**

The app fetches data from a local JSON server. To set up the JSON server and provide the data, follow these steps:

    ##Create a file named db.json in the root of your project directory.

   ##Copy and paste the given data into the db.json file:

       Start the JSON server:

npm run json-server

The server will run at  **http://localhost:5000/transactions.**

**Run the App**

Now run the app:


npm start

The app will be accessible at **http://localhost:3000.** You can open this URL in your web browser to use the mini bank app.
Core Deliverables

As a user, you can:

    See a table of all transactions.
    Fill out and submit the form to add a new transaction. The new transaction will be added to the table (the new transaction does not have to be persisted to the backend).
    Filter transactions by typing into the search bar. Only transactions with a description matching the search term will be shown in the transactions table.

**Bonus Deliverables**

As a user, you can:

    Sort transactions alphabetically by category or description.
    Delete a transaction, which will remove it from the table.