import { getPosts, addPost } from '@/lib/posts';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const sort = searchParams.get('sort') || 'desc';
    const posts = getPosts({ sort });
    
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: '게시글 목록을 불러오는데 실패했습니다.' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const newPost = addPost(data);
    
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || '게시글 작성에 실패했습니다.' },
      { status: 400 }
    );
  }
}