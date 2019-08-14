import React from 'react'
import { IEpisodeProps } from './interfaces'
import { Store } from './Store'
import { fetchDataAction, toggleFavEpisodes } from './Actions'
const ExpsodeList = React.lazy<any>(() => import('./EpisodesList'))

const HomePage = () => {
	const { state, dispatch } = React.useContext(Store)
	React.useEffect(() => {
		state.episodes.length === 0 && fetchDataAction(dispatch)
	})
	const props: IEpisodeProps = {
		episodes: state.episodes,
		store: { state, dispatch },
		toggleFavEpisodes,
		favourites: state.favourites
	}
	return (
		<section className='episode-layout'>
			<React.Suspense fallback={<div>Loading...</div>}>
				<ExpsodeList {...props} />
			</React.Suspense>
		</section>
	)
}

export default HomePage
