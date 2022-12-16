import { Component, genericChart, Stream } from '@marcellejs/core';
import Chart from 'chart.js/auto';

import View from './featureimp.view.svelte';

export class Featureimp extends Component {
	constructor(options = {}) {
		super();
		this.title = "";
		this.options = ['age', 'sex', 'bmi', 'bp', 's1', 's2', 's3', 's4', 's5', 's6'];
		const labels = ["age", "sex", "bmi", "bp", "s1", "s2", "s3", "s4", "s5", "s6"];
		this.selected = false;
		this.$newData;
		// const labels = Utils.months({count: 7});
		const data = {
		  labels: this.options,
		  datasets: [{
			label: 'My First Dataset',
			data: [65, 59, 80, 81, 56, 55, 40, 13, 44, 55],}]};
		this.$embedding = new Stream([65, 59, 80, 81, 56, 55, 40, 13, 44, 55, -10], true);
		Chart.defaults.elements.bar.backgroundColor = "#9BD0F5";
		this.chart = new genericChart({    
			preset: 'bar',
			options: {
		  xlabel: 'Feature',
		  ylabel: 'Importance',
		  scales: { x: {ticks: {
			callback: function(value, index, ticks) {
				return labels[index];
			}}}, 
			y: { suggestedMax: 1 }},
			plugins: {
				legend: {
					display: false,
				},
				colors: {
					enabled: false
				},
			}
		//   data: data,
		},});
		this.chart.title = "Feature Importance";
		// this.chart.addSeries(this.$embedding);
		// this.chart.data.datasets.push(data);
		// this.chart.update();
	}

	mount(target) {
		const t = target || document.querySelector(`#${this.id}`);
		console.log(t, this.id);
		if (!t) return;
		this.chart.mount(t);
		this.destroy();
		this.$$.app = new View({
			target: t,
			props: {
				title: this.title,
				options: this.options,
			}
		});
	}

	update() {
		console.log(this.selected);
		if (this.selected) {
			this.chart.removeSeries(this.$embedding);
			// this.chart.addSeries(new Stream([], true));
			// this.chart.clear();
			// this.chart.updateView();
			// this.chart.clear();
			this.$newData = new Stream([Math.random()*2-1, Math.random()*2-1, Math.random()*2-1, 
				Math.random()*2-1, Math.random()*2-1, Math.random()*2-1, Math.random()*2-1, Math.random()*2-1, 
				Math.random()*2-1, Math.random()*2-1], true);
			console.log(this.$newData);
			this.chart.addSeries(this.$newData);
			// this.chart.setColors(new Stream(["#36A2EB", "#36A2EB", "#36A2EB", "#36A2EB"], true))
		} else {
			// this.chart.removeSeries(this.$embedding);
			this.chart.addSeries(this.$embedding);
		}
	}

	toggleSelected() {
		this.selected = true;
	}
}

