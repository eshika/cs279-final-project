<script>
import { ViewContainer } from '@marcellejs/design-system';
export let title;
// export let options;
// export let chartContainer;
</script>

<ViewContainer {title}>
  <!-- <div>This is a <span class="my-color">custom</span> component with the following options:</div>
  <p>{JSON.stringify(options)}</p> -->
  <!-- <div id="chart-container" bind:this={chartContainer}></div> -->
  <h4>Curious about how your model works?</h4>
  <p> This chart shows the importance of features to the model. 
  The permutation feature importance is defined to be the increase in a model's error when a single feature value is randomly shuffled. 
  This procedure breaks the relationship between the feature and the target, thus the rise in the model's error is indicative of how much the model depends on the feature.</p>
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

  p, ul, h4 {
    margin: 2px;
  }
</style>
