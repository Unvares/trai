<template>
  <v-container class="instructions-section" id="instructions">
    <v-row>
      <v-col cols="12" md="6" class="instructions-images">
        <div class="instructions-header">
          <h2>Instructions</h2>
          <h4>Follow these steps to use the chatbot.</h4>
        </div>
        <img src="/assets/images/instruction1.png" alt="Instruction 1">
        <img src="/assets/images/instruction2.png" alt="Instruction 2">
        <img src="/assets/images/instruction3.png" alt="Instruction 3">
      </v-col>
      <v-col cols="12" md="6" class="instructions-text">
        <br>
        <p><strong>1.</strong> Scan the QR code at the local waste disposal area or visit us online.</p>
        <br>
        <p><strong>2.</strong> Use the text area in the chatbot to ask a question. For best results, ask questions about recycling.</p>
        <br>
        <p><strong>3.</strong> Recieve recycling advice from TRAI. Thank you for helping us reduce polution!</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
br {
  display: block; /* makes it have a width */
  content: ""; /* clears default height */
  margin-top: 60px; /* change this to whatever height you want it */
}

.instructions-section {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  background: #D2B48C;
  border-radius: 10px;
  padding: 20px;
  
  .instructions-images {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    .instructions-header {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      
      h2, h4 {
        margin: 0;
      }
    }
    
    img {
      margin: 10px 0;
      max-width: 60%; /* Adjusted for a cleaner look */
      height: auto;
      object-fit: contain;
      border: 2px solid white; /* Adding a white border */
      border-radius: 8px; /* Slightly curved edges */
    }
  }
  
  .instructions-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
    p {
      margin: 10px 0;
      font-size: 1.2em;
      line-height: 1.5em;
    }
  }
}
</style>
