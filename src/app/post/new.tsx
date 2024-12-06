import React, { useState } from 'react'
import { addDocument } from '@/firebase/firestore'

const AddPostPage: React.FC = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    // 폼 제출 시 Firestore에 데이터를 추가하는 함수 호출
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // 입력된 데이터 유효성 검사
        if (title.trim() === '' || content.trim() === '') {
            alert('제목과 내용을 입력하세요!')
            return
        }

        // Firestore에 문서 추가
        try {
            await addDocument('posts', { title, content })
            alert('새 게시물이 추가되었습니다!')
            setTitle('')
            setContent('')
        } catch (error) {
            console.error('게시물 추가 중 오류 발생:', error)
            alert('게시물 추가에 실패했습니다.')
        }
    }

    return (
        <div>
            <h1>게시물 추가하기</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">제목:</label>
                    <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="content">내용:</label>
                    <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <button type="submit">추가하기</button>
            </form>
        </div>
    )
}

export default AddPostPage
