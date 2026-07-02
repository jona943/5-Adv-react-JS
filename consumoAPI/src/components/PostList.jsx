function PostList({ posts, onSelectPost}) {
    if (posts.length === 0) {
        return <p>No hay gatitos disponibles.</p>
    }
    return (
        <div>
            <h2>
                Lista de gatitos
            </h2>

            <ul>
                {posts.map((cat) => (
                    <li key={cat.id} onClick={() => onSelectPost(cat)} style={{ cursor: 'pointer' }}>
                        Ver gatito #{cat.id}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostList;