let posts = [
  {
    id: 1,
    title: '첫 번째 게시글',
    content: '안녕하세요. 첫 번째 게시글입니다.',
    createdAt: new Date().toISOString(),
  },
];

function generateId() {
  return posts.length > 0 ? Math.max(...posts.map((post) => post.id)) + 1 : 1;
}

export function getPosts() {
  return [...posts];
}

export function getPostById(id) {
  const numId = parseInt(id, 10);
  return posts.find((post) => post.id === numId) || null;
}

export function addPost(post) {
  const newPost = {
    id: generateId(),
    ...post,
    createdAt: new Date().toISOString(),
  };
  posts.unshift(newPost); // 최신글을 맨 앞으로 추가
  console.log('새 게시글 추가:', newPost); // 로그로 확인
  return newPost;
}

export function updatePost(id, updatedData) {
  const numId = parseInt(id, 10);
  const index = posts.findIndex((post) => post.id === numId);
  if (index === -1) return null;

  const updatedPost = {
    ...posts[index],
    ...updatedData,
    updatedAt: new Date().toISOString(),
  };
  posts[index] = updatedPost;
  return updatedPost;
}

export function deletePost(id) {
  const numId = parseInt(id, 10);
  const index = posts.findIndex((post) => post.id === numId);
  if (index === -1) return false;

  posts.splice(index, 1);
  return true;
}
