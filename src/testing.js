import { modelParameters, Stream, text } from '@marcellejs/core';
import { testSetTable, features } from './data';
import { model } from './model';
import { featureimp } from './components';

const parameters = Object.fromEntries(features.map((s) => [s, new Stream(0, true)]));
const controls = modelParameters({ parameters });
controls.title = 'Choose input values';
const explanation = featureimp();

testSetTable.$selection
  .filter((x) => x.length === 1)
  .subscribe(([x]) => {
    for (const [key, val] of Object.entries(x)) {
      if (key in parameters) {
        console.log(key, val);
        parameters[key].set(val);
        explanation.toggleSelected();
        // if (featureimp.selected) {
        //   this.chart.removeSeries(this.$embedding);
        //   this.$newData = new Stream([4, 6, 7, 8, 7, 2, 3], true);
        //   this.chart.addSeries(this.$newData);
        // } else {
        //   this.chart.addSeries(this.$embedding);
        // }
      } 
    }
    explanation.update();
      // explanation.chart.clear();
      // // explanation.chart.removeSeries(explanation.$embedding);
      // const newData = new Stream([4, 6, 7, 8, 7, 2, 3], true);
      // explanation.chart.addSeries(newData);
    
  });
  
const $features = features.reduce((s, x) => {
  return s.combine((vx, vs) => [...vs, vx], parameters[x]);
}, new Stream([], true));

const $predictions = $features
  .filter(() => model.ready)
  .map(model.predict)
  .awaitPromises();

const result = text('Waiting for predictions...');
result.title = 'Prediction';
$predictions.subscribe((x) => {
  // explanation.update();
  result.$value.set(`Result: ${x}`);
});

const hint = text(
  'To run the prediction pipeline, either enter values in the number inputs below, or select a particular instance from the test set on the right',
);
hint.title = 'hint';


export function setup(dash) {
  dash.page('Testing (Parameters)').sidebar(hint, controls).use(result, testSetTable, explanation);
}
