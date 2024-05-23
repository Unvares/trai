<template>
  <v-container class="instructions-section" id="instructions">
    <v-row>
      
      
      <v-col cols="12" md="6" class="instructions-images">
        <h2>Instructions</h2>
        <h4>Follow these steps to use the chatbot.</h4>
        <img src="/assets/images/instruction1.png" alt="Instruction 1">
        <img src="/assets/images/instruction2.png" alt="Instruction 2">
        <img src="/assets/images/instruction3.png" alt="Instruction 3">
      </v-col>
      <v-col cols="12" md="6" class="instructions-text">
        <!-- Add your instruction text here -->
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
  background: #D2B48C;
  border-radius: 10px;
  
  .instructions-images {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    max-height: 100%;
    img {
      margin: 10px;
      max-width: 100%;
      max-height: 100%;
      object-fit: contain; /* Ensures the image maintains its aspect ratio */
      width: 160px; /* Default width */
      height: 100px; /* Default height */
    }
  }
  
  .instructions-text {
    margin-left: 20px;
  }
}
</style>

