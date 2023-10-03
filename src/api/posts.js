const BASE_URL = 'http://localhost:3000/posts';

// Fetch published posts
export const fetchAllPosts = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token}`
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }

    const data = await response.json();
    console.log(data);
    return data;
};

export const fetchPostById = async (id) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token}`
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch post");
    }

    const data = await response.json();
    return data;
};

export const deleteComment = async (postId, commentId) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}/${postId}/comment/${commentId}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token}`
        },
    });

    if (!response.ok) {
        throw new Error("Failed to delete comment");
    }

    const data = await response.json();
    return data;
}

export const addComment = async (postId, commentDetails) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}/${postId}/comments`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token}`
        },
        body: JSON.stringify(commentDetails)
    });

    if (!response.ok) {
        throw new Error("Failed to delete comment");
    }

    const data = await response.json();
    return data;
}