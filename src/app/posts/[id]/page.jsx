// app/posts/[id]/page.js
import { getPostById } from '@/lib/posts';
import DeleteButton from './deleteButton';

export default async function PostDetail({ params }) {
  // ID 파싱을 확실히 하고 로그 추가
  const id = parseInt(params.id);
  console.log('요청된 게시글 ID:', id);

  const post = getPostById(id);
  console.log('조회된 게시글:', post);

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">게시글을 찾을 수 없습니다</h1>
          <p className="text-gray-600 mb-4">
            요청하신 게시글이 존재하지 않거나 삭제되었습니다.
          </p>
          <a
            href="/posts"
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            목록으로 돌아가기
          </a>
        </div>
      </div>
    );
  }

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

        <div className="flex gap-4 pt-4 border-t">
          <a
            href="/posts"
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            목록으로
          </a>
          <a
            href={`/posts/${id}/edit`}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            수정하기
          </a>
          <DeleteButton postId={id} />
        </div>
      </article>
    </main>
  );
}