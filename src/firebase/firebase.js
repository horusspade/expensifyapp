import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };



//console.log(database.ref('expenses').;    
//database.ref('expenses')
//    .on('value', (snapshot) => {
//        const expenses = [];

//        snapshot.forEach((childSnapshot) => {
//            expenses.push({
//                id: childSnapshot.key,
//                ...childSnapshot.val()
//            });
//        });

//        console.log(expenses);
//    });

//// child_removed
//database.ref('expenses').on('child_removed', (snapshot) => {
//    console.log(snapshot.key, snapshot.val());
//});

//// child_changed
//database.ref('expenses').on('child_changed', (snapshot) => {
//    console.log(snapshot.key, snapshot.val(), "changed");
//    });

//// child_added
//database.ref('expenses').on('child_added', (snapshot) => {
//    console.log(snapshot.key, snapshot.val());
//});


 //database.ref('expenses')
 //  .once('value')
 //  .then((snapshot) => {
 //    const expenses = [];

 //    snapshot.forEach((childSnapshot) => {
 //      expenses.push({
 //        id: childSnapshot.key,
 //        ...childSnapshot.val()
 //      });
 //    });

 //    console.log(expenses);
 //  });



//const expense = [
//    {
//   description: '12',
//    note: 'First note',
//   amount: '',
//   createdAt: 'Believe ya granny'
//},
//    {
//        description: '12',
//        note: 'First note',
//        amount: '',
//        createdAt: 'Believe ya granny'
//    },

//    {
//        description: '12',
//        note: 'First note',
//        amount: '',
//        createdAt: 'Believe ya granny'
//    }
//]

//expense.map(obj => {    
//    database.ref('expenses').push(obj)
//});


//database.ref()
//    .once('value')
//    .then((snapshot) => {
//        const name = snapshot.child('name').val();
//        const job = snapshot.child('job/company').val();
//        const jobtitle = snapshot.child('job/title').val();
//        console.log(`${name} is a ${jobtitle} at ${job} `);
//    }).catch((e) => {
//        console.log('error fetching ,', e);
//    });

//database.ref()
//    .on('value', (snapshot) => {
//        console.log(snapshot.val());
//    });

//setTimeout(() => {
//    database.ref('age').set(26);
//}, 3500);

//setTimeout(() => {
//    database.ref().off();
//}, 7000);

//setTimeout(() => {
//    database.ref('age').set(40);
//}, 10500);

//database.ref()
//    .once('value')
//    .then((snapshot) => {
//        const val = snapshot.val();
//        console.log(val);
//    }).catch((e) => {
//        console.log('error fetching ,', e);
//    });

//database.ref().set({
    
//    name: 'spade joseph',
//    age: 31,
//    stressLevel: 6,
//    job: {
//        title: 'software developer',
//        company: 'Google'
//    },
//    location: {
//        city: 'st johns',
//        country: 'antigua'
//    }
//}).then(() => {
//        console.log('data is saved!');
//    }).catch((e) => {
//        console.log('this is failed ,', e);
//    })

//database.ref().update({
//    stressLevel: 9,
//    'job/company': 'Amazon',
//    'location/city': 'Seattle'
//});

//database.ref('isSingle').remove().then(() => {
//        console.log('removed issingle');
//    }).catch((e) => {
//        console.log('error deleting ,', e);
//    });