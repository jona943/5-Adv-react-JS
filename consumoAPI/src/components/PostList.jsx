function PostList({ posts, onSelectPost}) {
    if (posts.length === 0) {
        return <p>No hay publicaciones disponibles.</p>
    }
    return (
        <div>
            <h2>
                Lista de publicaciones
            </h2>

            <ul>
                {posts.map((post) => (
                    <li key={post.id} onClick={() => onSelectPost(post)} style={{ cursor: 'pointer' }}>
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostList;