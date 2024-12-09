'use client';
function DeleteButton({ postId }) {
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
    <button
      onClick={handleDelete}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      삭제하기
    </button>
  );
}

export default DeleteButton;