import PropTypes from 'prop-types';

const YOUTUBE_ID = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;

const getEmbedUrl = (url) => {
  const match = url.match(YOUTUBE_ID);
  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : url;
};

const VideoPlayer = ({ videos }) => {
  if (!videos || videos.length === 0) {
    return <div className="empty-state">No videos available for this condition yet.</div>;
  }

  return (
    <div className="content-grid">
      {videos.map((video) => (
        <article key={video._id} className="card content-card video-card">
          <div className="video-wrapper">
            <iframe
              src={getEmbedUrl(video.url)}
              title={video.title}
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <h3>{video.title}</h3>
          {video.description && <p>{video.description}</p>}
          {(video.source || video.duration) && (
            <small className="muted">
              {[video.source && `Source: ${video.source}`, video.duration && `Duration: ${video.duration}`]
                .filter(Boolean)
                .join(' · ')}
            </small>
          )}
        </article>
      ))}
    </div>
  );
};

VideoPlayer.propTypes = {
  videos: PropTypes.array
};

export default VideoPlayer;
