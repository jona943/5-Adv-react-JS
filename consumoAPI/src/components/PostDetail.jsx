function PostDetail({ post, onBack }) {
    return (
        <div>
            <button onClick={onBack}>&larr; Volver al listado</button>

            <article>
                <h2>Detalles del Post #{post.id}</h2>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </article>
        </div>
    )
}

export default PostDetail;