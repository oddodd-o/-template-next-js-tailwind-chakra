// async function을 사용하여 서버로부터 데이터를 가져오는 페이지
async function PostsPage() {
  const response = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' });
  const posts = await response.json();

  return (
    <main className="max-w-4xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">게시글 목록</h1>
        <a
          href="/posts/write"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          글쓰기
        </a>
      </div>

      {posts.length === 0 ? (
        <p className="text-center text-gray-500 py-8">
          게시글이 없습니다.
        </p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li
              key={post.id}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <a href={`/posts/${post.id}`}>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p className="text-gray-600 line-clamp-2">{post.content}</p>
                  <div className="text-sm text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString()}
                    {post.updatedAt && ' (수정됨)'}
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default PostsPage;