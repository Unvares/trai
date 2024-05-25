<template>
  <div class="about" id="about">
    <div class="left-column">
      <div class="text">
        <h1 class="title">About Us</h1>
        <br />
        <p>
          Welcome to Trash Recycling AI (TRAI)! We're on a mission to
          revolutionize waste management and promote recycling through education
          and engagement.
        </p>
        <br />
        <p>
          The world faces a critical waste management challenge, with only a
          fraction of global waste being recycled. Our inspiration comes from
          the urgent need highlighted by the United Nations for enhanced waste
          management practices to combat pollution, climate change, and
          financial losses.
        </p>
        <br />
        <p>
          One of the key issues we're addressing is improper waste separation, a
          significant contributor to inefficient recycling. Studies reveal that
          lack of knowledge, accessibility to recycling facilities, and
          perceived inconvenience hinder proper waste sorting. Our goal is to
          make recycling education accessible, engaging, and effortless.
        </p>
        <br />
        <p>
          TRAI is a web-based application powered by AI chatbots, offering rapid
          and interactive education on waste disposal. Through quizzes, playful
          gamification, and informative content, we aim to empower individuals
          with the knowledge and motivation to recycle correctly.
        </p>
        <br />
        <p>
          Unlike traditional solutions, TRAI minimizes deployment and
          maintenance costs while ensuring scalability. By leveraging custom
          GPTs, our platform can adapt to different waste separation rules and
          cater to diverse user needs.
        </p>
        <br />
        <p>
          Join us in our mission to create a world where recycling is second
          nature, and waste becomes a valuable resource. Together, let's build a
          cleaner, greener future with TRAI.
        </p>
        <br />
        <p class="highlighted-text">Scroll to the top and try it right now!</p>
      </div>
    </div>
    <div class="right-column"></div>
    <!-- <img src="/assets/images/about.png" alt="About Us Image" /> -->
  </div>
</template>

<style scoped lang="scss">
.about {
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 1080px;
  padding: 40px 10%;
  display: flex;
  flex-flow: row nowrap;
  align-items: space;
  justify-content: space-between;
  color: white;
  background-color: rgb(115, 200, 210);

  &::after {
    position: absolute;
    content: "";
    width: 150%;
    height: 160px;
    transform: rotate(180deg);
    top: -160px;
    left: 0;
    background: url("assets/images/divider.svg");
  }

  .left-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
  }

  .right-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .text {
    max-width: 500px;
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
</style>
