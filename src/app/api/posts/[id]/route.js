import { getPostById, updatePost, deletePost } from '@/lib/posts';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const id = parseInt(params.id, 10);
  const post = getPostById(id);
  
  if (!post) {
    return new Response(
      JSON.stringify({ message: '게시글을 찾을 수 없습니다.' }), 
      { 
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
  
  return NextResponse.json(post);
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const post = updatePost(params.id, data);
    
    if (!post) {
      return NextResponse.json(
        { error: '게시글을 찾을 수 없습니다.' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: '게시글 수정에 실패했습니다.' },
      { status: 400 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const success = deletePost(params.id);
    if (!success) {
      return NextResponse.json(
        { error: '게시글을 찾을 수 없습니다.' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { message: '게시글이 삭제되었습니다.' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: '게시글 삭제에 실패했습니다.' },
      { status: 500 }
    );
  }
}