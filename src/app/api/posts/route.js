// app/api/posts/route.js
import { getPosts, addPost } from '@/lib/posts';
import { NextResponse } from 'next/server';

export async function GET() {
  const posts = getPosts();
  return NextResponse.json(posts);
}

export async function POST(request) {
  try {
    const data = await request.json();
    console.log('POST 요청 데이터:', data); // 요청 데이터 확인

    if (!data.title || !data.content) {
      return NextResponse.json(
        { error: '제목과 내용은 필수입니다.' },
        { status: 400 }
      );
    }

    const newPost = addPost(data);
    console.log('추가된 게시글:', newPost); // 추가된 게시글 확인
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error('게시글 작성 에러:', error);
    return NextResponse.json(
      { error: '게시글 작성에 실패했습니다.' },
      { status: 500 }
    );
  }
}
