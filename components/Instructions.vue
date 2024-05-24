<template>
  <div class="instructions" id="instructions">
    <div class="left-column"></div>
    <div class="right-column">
      <div class="text">
        <h1 class="title">Instructions</h1>
        <p>
          Hi! Are you standing in front of a waste bin right now and are unsure
          of where to put your item? We're here to help! This app is an
          AI-powered chatbot to help students properly sort waste on campus. You
          can scroll to the top of this page and click "start" button to start a
          conversation with the chatbot. It will ask questions about the item
          you want to get rid of to narrow down the bin.
        </p>
        <br />
        <p>
          One great thing about this app is that
          <strong>the more you use it, the less you use it!</strong> Every time
          you ask the chatbot for help, it will explain you where to put an item
          and why exactly it goes into that bin.
        </p>
        <br />
        <p class="highlighted-text">Scroll to the top and try it right now!</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.instructions {
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 1080px;
  padding: 40px 10%;
  display: flex;
  flex-flow: row nowrap;
  align-items: space;
  justify-content: space-between;
  background-color: rgb(29, 53, 49);
  color: white;

  &::before,
  &::after {
    pointer-events: none;
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 100%;
  }

  &::before {
    height: 20vh;
    max-height: 650px;
    background: linear-gradient(to top, transparent 0%, rgb(29, 53, 49) 100%);
    z-index: 1;
  }

  &::after {
    height: 100%;
    background: url("assets/images/pinebranch.png");
    z-index: 0;
    filter: opacity(0.1);
  }

  .left-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
  }

  .right-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .text {
    max-width: 500px;
    z-index: 2;
  }

  .title {
    width: 100%;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .subtitle {
    margin-bottom: 20px;
  }
}

.highlighted-text {
  color: red;
}
</style>
