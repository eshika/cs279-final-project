import { Component, genericChart, Stream } from '@marcellejs/core';
import View from './lime.view.svelte';

export class Lime extends Component {
	constructor(options = {}) {
		super();
		this.title = '';
		this.options = options;
		let labels = ["age", "sex", "bmi", "bp", "s1", "s2", "s3", "s4", "s5", "s6"];
		for (let i = labels.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1)); 
			[labels[i], labels[j]] = [labels[j], labels[i]];
		}
		this.chart = new genericChart({    
			preset: 'bar',
			options: {
		  xlabel: 'Permutation Importance',
		  ylabel: 'Feature',
		  indexAxis: 'y',
		  scales: { y: {ticks: {
			callback: function(value, index, ticks) {
				return labels[index];
			}}}, 
			x: { suggestedMax: 0.4 }},
			plugins: {
				legend: {
					display: false,
				},
				colors: {
					enabled: false
				},
			}
		},});
		this.chart.title = "Model Permutation Importance";
	}

	mount(target) {
		const t = target || document.querySelector(`#${this.id}`);
		if (!t) return;
		console.log(document.getElementById("#chart-container"));
		this.chart.mount(t);
		this.destroy();
		this.$$.app = new View({
			target: t,
			props: {
				title: this.title,
				options: this.options
			}
		});
	}

	addData() {
		let data = [Math.random()*0.3, Math.random()*0.3, Math.random()*0.3, Math.random()*0.3,
			Math.random()*0.3, Math.random()*0.3, Math.random()*0.3, 
			Math.random()*0.3, Math.random()*0.3, Math.random()*0.3];
		data = data.sort().reverse();
		this.chart.addSeries(new Stream(data, true));
	}
}
