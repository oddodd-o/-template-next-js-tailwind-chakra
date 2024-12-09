// app/posts/[id]/ClientButtons.js
'use client';
import { useRouter } from 'next/navigation';

export default function ClientButtons({ postId }) {
  const router = useRouter();

  async function handleDelete() {
    if (!window.confirm('정말 삭제하시겠습니까?')) {
      return;
    }

    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('삭제에 실패했습니다.');
      }

      router.push('/posts');
      router.refresh();
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="flex gap-4 pt-4 border-t">
      <a
        href="/posts"
        className="px-4 py-2 border rounded hover:bg-gray-100"
      >
        목록으로
      </a>
      <a
        href={`/posts/${postId}/edit`}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        수정하기
      </a>
      <button
        onClick={handleDelete}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        삭제하기
      </button>
    </div>
  );
}