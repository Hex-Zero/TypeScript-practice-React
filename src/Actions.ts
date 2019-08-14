import { IState, IEpisode, IAction } from './interfaces'

export const fetchDataAction = async (dispatch: any) => {
	const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
	const data = await fetch(URL)
	const dataJSON = await data.json()
	return dispatch({
		type: 'FETCH_DATA',
		payload: dataJSON._embedded.episodes
	})
}

export const toggleFavEpisodes = (
	state: IState,
	dispatch: any,
	episode: IEpisode | any
): IAction => {
	const episodeInFav = state.favourites.includes(episode)
	let dispatchObj = {
		type: 'ADD_FAV',
		payload: episode
	}
	if (episodeInFav) {
		const favWithoutEpisode = state.favourites.filter((fav: IEpisode) => fav.id !== episode.id)
		dispatchObj = {
			type: 'REMOVE_FAV',
			payload: favWithoutEpisode
		}
	}

	return dispatch(dispatchObj)
}
