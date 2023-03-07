import firebase_app from './config'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const auth = getAuth(firebase_app)

