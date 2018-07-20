const { desktopCapturer } = require('electron');
const fs = require('fs');

let videoElement = document.querySelector('video');
let listElement = document.querySelector('ul');
let outputElement = document.querySelector('#output');

let Rec = {

}

let ScreenManager = {
	sources: [],
	selectedSource: null,
	listScreens(){
		desktopCapturer.getSources({types: ['window', 'screen']}, function(error, sources){
			var template = '';
			ScreenManager.sources = sources;
			sources.forEach(source => {
				template += `
					<li onclick="ScreenManager.setScreen('${source.id}')" >
						<img src="${source.thumbnail.toDataURL()}" />
						<h3>${source.name}</h3>
					</li>`;
			})
			listElement.innerHTML = template;
		})
	},
	setScreen(sourceId){
		this.selectedSource = this.sources.find(source => source.id === sourceId);
		videoElement.poster = this.selectedSource.thumbnail.toDataURL();
		videoElement.src = '';
		videoElement.controls = false;
	}
}

ScreenManager.listScreens()