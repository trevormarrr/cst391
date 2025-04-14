import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const OneAlbum = (props) => {
	const navigate = useNavigate();
	const [selectedTrack, setSelectedTrack] = useState(null);

	const handleEditClick = () => {
		navigate(`/edit/${props.album.albumId}`);
	};

	const handleTrackSelect = (track) => {
		setSelectedTrack(track);
	};

	return (
		<div className='container'>
			<h2>Album Details for {props.album.title}</h2>
			<div className='row'>
				<div className='col col-sm-3'>
					<div className='card'>
						<img src={props.album.image} className='card-img-top' alt={props.album.title} />
						<div className='card-body'>
							<h5 className='card-title'>{props.album.title}</h5>
							<p className='card-text'>{props.album.description}</p>
							<div className='list-group'>
								{props.album.tracks && props.album.tracks.map((track, index) => (
									<button 
										key={index}
										className={`list-group-item list-group-item-action ${selectedTrack === track ? 'active' : ''}`}
										onClick={() => handleTrackSelect(track)}
									>
										{track.title}
									</button>
								))}
							</div>
							<button onClick={handleEditClick} className="btn btn-primary">Edit</button>
						</div>
					</div>
				</div>
				<div className='col col-sm-9'>
					<div className='card'>
						{selectedTrack ? (
							<div className="card-body">
								<h5 className="card-title">Lyrics</h5>
								<p className="card-text">{selectedTrack.lyrics || 'No lyrics available'}</p>
							</div>
						) : (
							<div className="card-body">
								<p>Select a track to view lyrics</p>
							</div>
						)}
					</div>
					<div className='card mt-3'>
						{selectedTrack && selectedTrack.video ? (
							<div className="card-body">
								<h5 className="card-title">Video</h5>
								<div className="ratio ratio-16x9">
									<iframe
										src={`https://www.youtube.com/embed/${selectedTrack.video}`}
										title={selectedTrack.title}
										allowFullScreen
									></iframe>
								</div>
							</div>
						) : (
							<div className="card-body">
								<p>Select a track to view video</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default OneAlbum;