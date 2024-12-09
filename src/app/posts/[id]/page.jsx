import { getPostById } from '@/lib/posts';
import Link from 'next/link';
import DeleteButton from './deleteButton';

export default function PostDetail({ params }) {
  const post = getPostById(params.id);

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">게시글을 찾을 수 없습니다</h1>
          <p className="text-gray-600 mb-4">
            요청하신 게시글이 존재하지 않거나 삭제되었습니다.
          </p>
          <Link
            href="/posts"
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-8">
      <article className="space-y-8">
        <header>
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="text-sm text-gray-500">
            <time dateTime={post.createdAt}>
              {new Date(post.createdAt).toLocaleString()}
            </time>
            {post.updatedAt && (
              <span className="ml-2">
                (수정됨: {new Date(post.updatedAt).toLocaleString()})
              </span>
            )}
          </p>
        </header>

        <section>
          <p className="whitespace-pre-wrap">{post.content}</p>
        </section>

        <footer className="flex gap-4 pt-4 border-t">
          <Link href="/posts" className="px-4 py-2 border rounded hover:bg-gray-100">
            목록으로
          </Link>
          <Link
            href={`/posts/${params.id}/edit`}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            수정하기
          </Link>
          <DeleteButton postId={params.id} />
        </footer>
      </article>
    </main>
  );
}

// 클라이언트 컴포넌트로 삭제 버튼 분리
