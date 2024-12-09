// lib/posts.js
let posts = [];
let nextId = 1;

/**
 * 모든 게시글 목록을 반환합니다.
 * @param {Object} options - 정렬 옵션
 * @returns {Array} 게시글 배열
 */
export function getPosts(options = { sort: 'desc' }) {
  const sortedPosts = [...posts];
  return options.sort === 'desc' 
    ? sortedPosts.reverse() 
    : sortedPosts;
}

/**
 * 새로운 게시글을 추가합니다.
 * @param {Object} post - 게시글 데이터
 * @returns {Object} 생성된 게시글
 */
export function addPost(post) {
  if (!post.title || !post.content) {
    throw new Error('제목과 내용은 필수입니다.');
  }

  const newPost = {
    id: nextId++,
    title: post.title.trim(),
    content: post.content.trim(),
    createdAt: new Date().toISOString(),
    updatedAt: null,
  };
  posts.unshift(newPost); // 최신글을 앞에 추가
  return newPost;
}

/**
 * ID로 게시글을 조회합니다.
 * @param {number|string} id - 게시글 ID
 * @returns {Object|null} 게시글 객체
 */
export function getPostById(id) {
  const numId = parseInt(id, 10);
  return posts.find(post => post.id === numId) || null;
}

/**
 * 게시글을 수정합니다.
 * @param {number|string} id - 게시글 ID
 * @param {Object} updatedData - 수정할 데이터
 * @returns {Object|null} 수정된 게시글
 */
export function updatePost(id, updatedData) {
  const numId = parseInt(id, 10);
  const index = posts.findIndex(post => post.id === numId);
  
  if (index === -1) return null;
  
  const oldPost = posts[index];
  const newPost = {
    ...oldPost,
    ...updatedData,
    id: oldPost.id, // ID는 변경 불가
    updatedAt: new Date().toISOString(),
    createdAt: oldPost.createdAt, // 생성일은 유지
  };
  
  posts[index] = newPost;
  return newPost;
}

/**
 * 게시글을 삭제합니다.
 * @param {number|string} id - 게시글 ID
 * @returns {boolean} 삭제 성공 여부
 */
export function deletePost(id) {
  const numId = parseInt(id, 10);
  const index = posts.findIndex(post => post.id === numId);
  if (index === -1) return false;
  posts.splice(index, 1);
  return true;
}