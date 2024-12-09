import { notFound } from 'next/navigation';
import ClientButtons from './ClientButtons';

async function PostDetail({ params }) {
  try {
    const response = await fetch(`http://localhost:3000/api/posts/${params.id}`, { 
      cache: 'no-store' 
    });
    
    if (!response.ok) {
      // 404 상태일 경우 Next.js의 notFound 처리
      if (response.status === 404) {
        notFound();
      }
      throw new Error('게시글을 불러오는데 실패했습니다.');
    }

    const post = await response.json();

    return (
      <main className="max-w-4xl mx-auto p-8">
        <article className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <div className="text-sm text-gray-500">
              <time dateTime={post.createdAt}>
                {new Date(post.createdAt).toLocaleDateString()}
              </time>
              {post.updatedAt && (
                <span className="ml-2">
                  (수정됨: {new Date(post.updatedAt).toLocaleDateString()})
                </span>
              )}
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="whitespace-pre-wrap">{post.content}</p>
          </div>

          <ClientButtons postId={params.id} />
        </article>
      </main>
    );
  } catch (error) {
    console.error('게시글 조회 오류:', error);
    return (
      <div className="max-w-4xl mx-auto p-8 text-center">
        <p className="text-red-500 text-lg mb-4">게시글을 찾을 수 없습니다.</p>
        <a 
          href="/posts" 
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          목록으로 돌아가기
        </a>
      </div>
    );
  }
}

export default PostDetail;