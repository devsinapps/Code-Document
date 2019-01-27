const musicInfo = [
		{
			id: new Date(),
			band: 'Twenty One Pilots',
			genre: 'Alternative',
			song: 'Ode To Sleep',
			album: 'Divide',
			topsell: '5000'
		},
		{
			id: new Date(),
			band: 'Twenty One Pilots',
			genre: 'Alternative',
			song: 'Lane Boy',
			album: 'Divide',
			topsell: '15000'
		},
		{
			id: new Date(),
			band: 'Ed Sheeran',
			genre: 'Folk Rock',
			song: 'Shape Of You',
			album: 'Best a Year',
			topsell: '7000'
		},
		{
			id: new Date(),
			band: 'Ed Sheeran',
			genre: 'Folk Rock',
			song: 'Perfect',
			album: 'Divide',
			topsell: '70600'
		},
		{
			id: new Date(),
			band: 'Twenty One Pilots',
			genre: 'Alternative',
			song: 'Cancer',
			album: 'Divide',
			topsell: '5000'
		}
	]

const reduxCrudReducer = (state = musicInfo, action) => {
	switch(action.type){
		case "ADD_MUSIC":
			console.log('ADD_MUSIC')
			return state.concat([action.data])
		case "DELETE_MUSIC":
			console.log('DELETE_MUSIC')
			return state.filter((music)=>music.id !== action.id)
		case "UPDATE_MUSIC":
			console.log("UPDATE_MUSIC")
			return state.map((music)=>{
				if(music.id === action.id){
					return{
						...music,
						band: action.data.updateBand,
						genre: action.data.updateGenre,
						song: action.data.updateSong,
						album: action.data.updateAlbum,
						topsell: action.data.updateTopsell
					}
				}else{
					return music
				}
			})
		default:
			return state
	}
}

export default reduxCrudReducer