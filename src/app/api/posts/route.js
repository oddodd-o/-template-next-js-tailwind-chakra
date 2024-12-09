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
    console.log('받은 데이터:', data); // 디버깅용

    if (!data.title || !data.content) {
      return NextResponse.json(
        { error: '제목과 내용은 필수입니다.' },
        { status: 400 }
      );
    }

    const newPost = addPost(data);
    console.log('생성된 게시글:', newPost); // 디버깅용

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error('게시글 작성 에러:', error); // 디버깅용
    return NextResponse.json(
      { error: '게시글 작성에 실패했습니다.' },
      { status: 500 }
    );
  }
}