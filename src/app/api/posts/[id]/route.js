import { getPostById, updatePost, deletePost } from '@/lib/posts';

export async function GET(request, { params }) {
  console.log('GET 요청 ID:', params.id); // 요청된 ID 확인

  const post = getPostById(params.id);
  if (!post) {
    return new Response(JSON.stringify({ error: '글을 찾을 수 없습니다.' }), {
      status: 404,
    });
  }

  console.log('조회된 게시글:', post); // 조회된 게시글 로그
  return new Response(JSON.stringify(post), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}


export async function PUT(request, { params }) {
  const data = await request.json();
  const updatedPost = updatePost(params.id, data);
  if (!updatedPost) {
    return new Response(JSON.stringify({ error: '수정할 글을 찾을 수 없습니다.' }), {
      status: 404,
    });
  }
  return new Response(JSON.stringify(updatedPost), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function DELETE(request, { params }) {
  const success = deletePost(params.id);
  if (!success) {
    return new Response(JSON.stringify({ error: '삭제할 글을 찾을 수 없습니다.' }), {
      status: 404,
    });
  }
  return new Response(JSON.stringify({ message: '삭제되었습니다.' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
