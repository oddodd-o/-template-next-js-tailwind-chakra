import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore' // Firestore를 위한 import 추가

// Firebase 앱 설정
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig)

// 인증 서비스 인스턴스 생성
export const auth = getAuth(app)

// Firestore 서비스 인스턴스 생성
export const db = getFirestore(app) // Firestore 인스턴스를 추가하고 export합니다.
