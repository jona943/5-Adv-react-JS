function PostDetail({ post, onBack }) {
    return (
        <div>
            <button onClick={onBack}>&larr; Volver al listado</button>

            <article>
                <h2>Detalles del Post #{post.id}</h2>
                <h3>{post.id}</h3>
                <p>{post.width}px x {post.height}px</p>
                
                <div style={{marginTop:'15px'}}>
                    <img src={post.url} alt={`Gatito ${post.id}`}
                    style={{maxWidth:'100%', maxHeight:'400px',
                        borderRadius: '9px'
                    }}/>

                </div>
            </article>
        </div>
    )
}

export default PostDetail;