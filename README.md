# Hisaab Kitaab

## Table of Contents

- [Overview](#overview)
- [Future Scope](#future-scope)
- [Watch Demo](#watch-demo)
- [Play with Application](#play-with-application)
- [Technologies Used](#technologies-used)
- [Application Installation](#application-installation)
  - [Frontend](#frontend)
  - [Backend and Database](#backend-and-database)
- [Team Members](#team-members)

## Overview

**Hisaab Kitaab** is a bookkeeping application. It can manage expenses belonging to an individual user for personal uses. It can also manage expenses & income related to a business entity.

Traditionally, the businesses used 'bahi khaata' or ledgers to record their day-to-day transactions. **Hisaab Kitaab** makes it easy to maintain everything at a single place as a finance repository. One can now also view detailed reports time-to-time to get a deeper understanding of their business.

We aim to make the application easy-to-use for even those people who do not understand the financial terminologies. This will help such people to be able to manage their personal/business-related transactions. Therefore, the application ensures that there isn't a learning curve for Finance as a subject.

We provide support for adding different types of accounts. Using these accounts, the user can record a transaction like the way it's typically done in a ledger. For example, a user can add two accounts - A1 and A2. Now, the user is able to record a transaction between these accounts like transfer of X funds from A1 to A2.

Using **Fusion API**, a user can now open a bank account from within the application. Not only this, a user can fetch all the transactions associated with the opened bank account. Once a user has opened a bank account within the application, the user is allowed to link the bank account to any of the accounts existsing within the application. For example, a user can link account X to the newly opened bank account. The most striking feature is that the user can **reconcile** the transactions recorded locally within the application and the transactions associated with the opened bank account. This makes the user get a clear picture of the banking transactions which are too cumbersome to comprehend otherwise. Most of the times, the transactions that a user records in the application and the transactions reflected in the bank statement are not consistent.

Reconciliation is possible by a transactions matching algorithm that provides the best guess to match a bank transaction with one or more transactions existing within the application. The guessing algorithm depends on the timestamp of the transaction, the amount involved and the fact that whether the amount was debited or credited. Lastly, all the transactions are presented to the user who can then provide a consent and confirmation that the guessed transaction mapping is correct. All the correctly mapped transactions are then saved inside the application for future references.

What's better than providing all of these features along with a seemless and rich user experience?

## Future Scope

1. The different modes can help non-finance-savvy people to manage their finances as well as people with sound financial knowledge to use the application for book-keeping.
2. The payments to different accounts can be settled via the application.
3. Rich filters can help users to find exactly what they need.
4. Multi-lingual support can help users use the application in their first language.

## App Screenshots

## Watch Demo

Watch the following video to know more about the application and see the prototype in action.  
**[YouTube Video Link](https://youtu.be/rvnQtCTypDE)**

## Play with Application

Follow the link given below to start using the application:  
**[App Link](https://hisaabkitaab-xcoders.netlify.app)**

## Technologies Used

- React.js
- TypeScript
- SASS
- Google Firebase Cloud Firestore
- Google Firebase Cloud Functions

## Application Installation

Follow the instructions given below to install and run the application.

### Frontend

1.  Clone [this repository](https://github.com/srishti/hisaab-kitaab-frontend/commits/main) on GitHub to your local machine using Git.
2.  Go inside the application's directory on your local machine.
3.  Install all Node packages using the following command:

    ```bash
    npm i
    ```

    Run the application using the following command:

    ```bash
    npm start
    ```

    The application will be run in the development mode.  
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

        The page will reload if you make edits.
        You will also see any lint errors in the console.

    This app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Backend and Database

The REST API endpoints have been created using Google Firebase Cloud Functions and the database used is Google Firebase Cloud Firestore.  
There is no additional setup required to install the backend application and database as they have already been hosted on Google Cloud.

## Team Members

- Srishti Gupta - [LinkedIn Profile](https://www.linkedin.com/in/srishti--gupta/)
- Prateek Grover - [LinkedIn Profile](https://www.linkedin.com/in/prateekgrover/)
- Shrey Gupta - [LinkedIn Profile](https://www.linkedin.com/in/shrey-gupta-04392b133/)
