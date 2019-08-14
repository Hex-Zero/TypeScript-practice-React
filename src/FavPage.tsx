import React from 'react'
import { Store } from './Store'
import { toggleFavEpisodes } from './Actions'
import { IEpisodeProps } from './interfaces'
const ExpsodeList = React.lazy<any>(() => import('./EpisodesList'))
export default function FavPage(): JSX.Element {
	const { state, dispatch } = React.useContext(Store)
	const props: IEpisodeProps = {
		episodes: state.favourites,
		store: { state, dispatch },
		toggleFavEpisodes,
		favourites: state.favourites
	}
	return (
		<React.Suspense fallback={<div>Loading...</div>}>
			<div className='episode-layout'>
				<ExpsodeList {...props} />
			</div>
		</React.Suspense>
	)
}
