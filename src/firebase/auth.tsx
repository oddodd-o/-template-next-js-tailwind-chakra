// auth.tsx
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { auth } from './firebase'
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    User,
} from 'firebase/auth'

// 컨텍스트 타입 정의
interface AuthContextType {
    user: User | null
    login: (email: string, password: string) => Promise<void>
    register: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
    loginWithGoogle: () => Promise<void>
}

// AuthContext 컨텍스트 생성
const AuthContext = createContext<AuthContextType>({
    user: null,
    login: async () => {},
    register: async () => {},
    logout: async () => {},
    loginWithGoogle: async () => {},
})

// AuthProvider 컴포넌트 정의
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)

    // 사용자 상태 업데이트
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, setUser)
        return () => unsubscribe()
    }, [])

    // 로그인 함수
    const login = async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password)
    }

    // 회원가입 함수
    const register = async (email: string, password: string) => {
        await createUserWithEmailAndPassword(auth, email, password)
    }

    // 로그아웃 함수
    const logout = async () => {
        await signOut(auth)
    }

    // Google 로그인 함수
    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider()
        try {
            await signInWithPopup(auth, provider)
        } catch (error) {
            console.error('Google 로그인 실패:', error)
        }
    }

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loginWithGoogle }}>
            {children}
        </AuthContext.Provider>
    )
}

// 사용자 정의 훅
export const useAuth = () => useContext(AuthContext)
