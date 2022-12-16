<script>
import { ViewContainer } from '@marcellejs/design-system';
import { Component, genericChart } from '@marcellejs/core';
export let title;
// export let options;

// let chart;
// let scatterGL;
//   onMount(() => {
//     scatterGL = new genericChart({    
// 			preset: 'bar-fast',
// 			options: {
// 		  xlabel: 'Label',
// 		  ylabel: 'Confidence',
// 		  scales: { y: { suggestedMax: 1 } },
// 		},});

//   });
</script>

<ViewContainer {title} id="chart">
  <!-- <div>This is a <span class="my-color">custom</span> component with the following options:</div> -->
  <!-- <p>{JSON.stringify(options)}</p> -->
  <!-- <div id="chart"></div> -->
  <h4>How did the model reach its prediction?</h4>
  <p>This plot shows which features contributed the most to <b>this specific</b> model prediction. 
  Positive values indicate that the feature value is driving the prediction up, while negative values indicate that the feature value is driving the prediction down.</p>
  <p>The features in this dataset are defined as follows:</p>
  <ul>
    <li>age: age in years</li>
    <li>sex</li>
    <li>bmi: body mass index</li>
    <li>bp: average blood pressure</li>
    <li>s1: tc, T-Cells (a type of white blood cells)</li>
    <li>s2: ldl, low-density lipoproteins</li>
    <li>s3: hdl, high-density lipoproteins</li>
    <li>s4: tch, thyroid stimulating hormone</li>
    <li>s5: ltg, lamotrigine</li>
    <li>s6: glu, blood sugar level</li>
</ViewContainer>

<style>
  .my-color {
    color: seagreen;
  }
</style>
