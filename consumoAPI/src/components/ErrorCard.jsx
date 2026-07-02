function ErrorCard({ message, onRetry}) {
    return (
        <div>
            <h3>Ha ocurrido un error</h3>
            <p>{message}</p>

            {onRetry && (
                <button onClick={onRetry}>Intentar de nuevo</button>
            )}
        </div>
    )
}

export default ErrorCard;