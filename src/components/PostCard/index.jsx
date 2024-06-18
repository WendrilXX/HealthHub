import './styles.css';

export const PostCard = (props) => {
    const { post } = props;

    const handleClick = (e) => {
        const url = post.url.trim();
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className='post'>
            <div className='post-content' onClick={handleClick}>
              <img src={post.cover} alt={post.title} />
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
        </div>
    );
}