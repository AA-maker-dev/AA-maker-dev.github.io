// Simplified JS for index page

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Profile data sync
const PROFILE_STORAGE_KEY = 'nexora_profile_v1';
const DEFAULT_AVATAR_URL = 'https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9vuq6HxeSZfhZ7Jit_2HPVLyoajffb7h_SbWssh_bME=';

function loadProfile() {
    try {
        const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch (e) {
        console.error('Error loading profile:', e);
        return null;
    }
}

function saveProfile(profileData) {
    try {
        localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profileData));
    } catch (e) {
        console.error('Error saving profile:', e);
    }
}

function updateProfileDisplay() {
    const profile = loadProfile() || {
        name: 'Tester',
        username: '@admin',
        avatar: DEFAULT_AVATAR_URL,
        followers: '2.5K',
        following: '842',
        posts: '156'
    };

    // Update profile elements
    const profileNameEl = document.getElementById('homeProfileName');
    const profileUsernameEl = document.getElementById('homeProfileUsername');
    const followersEl = document.getElementById('homeFollowersCount');
    const followingEl = document.getElementById('homeFollowingCount');
    const postsEl = document.getElementById('homePostsCount');

    if (profileNameEl) profileNameEl.textContent = profile.name;
    if (profileUsernameEl) profileUsernameEl.textContent = profile.username;
    if (followersEl) followersEl.textContent = profile.followers;
    if (followingEl) followingEl.textContent = profile.following;
    if (postsEl) postsEl.textContent = profile.posts;
}

// Post Management
const POSTS_STORAGE_KEY = 'nexora_posts_v1';

function loadPosts() {
    try {
        const raw = localStorage.getItem(POSTS_STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        console.error('Error loading posts:', e);
        return [];
    }
}

function savePosts(posts) {
    try {
        localStorage.setItem(POSTS_STORAGE_KEY, JSON.stringify(posts));
    } catch (e) {
        console.error('Error saving posts:', e);
    }
}

// Post Creation
const postInput = document.getElementById('postInput');
const postBtn = document.getElementById('post-btn');
const imageInput = document.getElementById('post-image');
const imageThumbs = document.getElementById('image-thumbs');
const postsContainer = document.getElementById('posts-container');

let selectedImages = [];

if (imageInput) {
    imageInput.addEventListener('change', (e) => {
        const files = Array.from(e.target.files);
        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = (event) => {
                selectedImages.push(event.target.result);
                renderThumbnails();
            };
            reader.readAsDataURL(file);
        });
    });
}

function renderThumbnails() {
    imageThumbs.innerHTML = '';
    selectedImages.forEach((img, index) => {
        const div = document.createElement('div');
        div.className = 'thumb-item';
        div.innerHTML = `
            <img src="${img}" alt="Thumbnail ${index + 1}">
            <button class="remove-thumb" onclick="removeImage(${index})">×</button>
        `;
        imageThumbs.appendChild(div);
    });
    imageThumbs.style.display = selectedImages.length > 0 ? 'flex' : 'none';
}

function removeImage(index) {
    selectedImages.splice(index, 1);
    renderThumbnails();
}

if (postBtn) {
    postBtn.addEventListener('click', () => {
        const text = postInput.value.trim();
        if (text || selectedImages.length > 0) {
            const profile = loadProfile();
            const post = {
                id: Date.now(),
                author: profile?.name || 'Anonymous',
                username: profile?.username || '@user',
                avatar: profile?.avatar || DEFAULT_AVATAR_URL,
                text: text,
                images: [...selectedImages],
                timestamp: new Date().toLocaleString(),
                likes: 0,
                replies: 0,
                retweets: 0,
                liked: false
            };

            const posts = loadPosts();
            posts.unshift(post);
            savePosts(posts);

            postInput.value = '';
            selectedImages = [];
            renderThumbnails();
            renderPosts();
        }
    });
}

function renderPosts() {
    const posts = loadPosts();
    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postEl = document.createElement('div');
        postEl.className = 'post-card';
        postEl.innerHTML = `
            <div class="post-header">
                <img src="${post.avatar}" alt="${post.author}" class="avatar-sm">
                <div class="post-author">
                    <div class="post-author-name">${post.author}</div>
                    <div class="post-author-handle">${post.username}</div>
                </div>
                <div class="post-time">${post.timestamp}</div>
            </div>
            <div class="post-text">${post.text}</div>
            ${post.images.length > 0 ? `<div>${post.images.map(img => `<img src="${img}" class="post-image" alt="Post image">`).join('')}</div>` : ''}
            <div class="post-stats">
                <div class="post-stat"><i class="fas fa-comment"></i> ${post.replies}</div>
                <div class="post-stat"><i class="fas fa-retweet"></i> ${post.retweets}</div>
                <div class="post-stat"><i class="fas fa-heart"></i> ${post.likes}</div>
            </div>
            <div class="post-actions">
                <button class="post-action" onclick="toggleLike(${post.id})">
                    <i class="fas fa-heart"></i> Like
                </button>
                <button class="post-action">
                    <i class="fas fa-reply"></i> Reply
                </button>
                <button class="post-action">
                    <i class="fas fa-share"></i> Share
                </button>
            </div>
        `;
        postsContainer.appendChild(postEl);
    });
}

function toggleLike(postId) {
    const posts = loadPosts();
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.liked = !post.liked;
        post.likes += post.liked ? 1 : -1;
        savePosts(posts);
        renderPosts();
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    updateProfileDisplay();
    renderPosts();
});
