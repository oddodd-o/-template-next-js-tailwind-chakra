// lib/posts.js
let posts = []; // 초기 데이터 배열
let nextId = 1;

export function getPosts() {
  console.log('현재 게시글 목록:', posts); // 디버깅용
  return [...posts];
}

export function getPostById(id) {
  console.log('찾는 ID:', id); // 디버깅용
  console.log('현재 게시글 목록:', posts); // 디버깅용
  const post = posts.find(post => post.id === parseInt(id));
  console.log('찾은 게시글:', post); // 디버깅용
  return post || null;
}

export function addPost(postData) {
  const post = {
    id: nextId++,
    ...postData,
    createdAt: new Date().toISOString(),
  };
  posts.unshift(post); // 최신글을 앞에 추가
  console.log('게시글 추가됨:', post); // 디버깅용
  return post;
}

export function deletePost(id) {
  const index = posts.findIndex(post => post.id === parseInt(id));
  if (index === -1) return false;
  
  const deleted = posts.splice(index, 1);
  console.log('삭제된 게시글:', deleted); // 디버깅용
  return true;
}