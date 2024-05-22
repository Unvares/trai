<template>
  <v-container class="instructions-section" id="instructions">
    <v-row>
      <v-col cols="12" md="6" class="instructions-images">
        <img src="/assets/images/instruction1.png" alt="Instruction 1">
        <img src="/assets/images/instruction2.png" alt="Instruction 2">
        <img src="/assets/images/instruction3.png" alt="Instruction 3">
      </v-col>
      <v-col cols="12" md="6" class="instructions-text">
        <h2>Instructions</h2>
        <p>Follow these steps to use the chatbot.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.instructions-section {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;

  .instructions-images {
    display: flex;
    flex-direction: column;
    img {
      margin: 10px;
      width: 100px;
      height: 100px;
    }
  }

  .instructions-text {
    margin-left: 20px;
  }
}
</style>
