import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
    apiKey: 'AIzaSyAPRlDGrpTdgaGdwjCRLkkMMpK-TuGsRnE',
    authDomain: 'taplify.firebaseapp.com',
    projectId: 'taplify',
    storageBucket: 'taplify.appspot.com',
    messagingSenderId: '173840577291',
    appId: '1:173840577291:web:0760f0f0e7d07bfef2680e',
    databaseURL: 'https://taplify-default-rtdb.asia-southeast1.firebasedatabase.app',
}

const app = initializeApp(firebaseConfig)
export const database = getDatabase(app)
