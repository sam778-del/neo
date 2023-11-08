
<template>
  <vs-card>
    <div slot="header">
      <h3>Overview</h3>
    </div>
    <p>Following is a brief look at how it works:</p>
    <vx-list :list="list" class="mt-3"></vx-list>
  </vs-card>
</template>

<script>
export default {
  data() {
    return {
      list: [
        "Establish a set of column in the horizontal space defined by row (abbreviated col)",
        "Your content elements should be placed directly in the col, and only col should be placed directly in row",
        "The column grid system is a value from 1-12 to represent its range spans. For example, three columns of equal width can be created by .col-4 (33.3%)",
        "If the sum of col spans in a row are more than 12, then the overflowing col as a whole will start a new line arrangement"
      ]
    };
  }
};
</script>