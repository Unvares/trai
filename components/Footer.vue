<template>
  <div class="footer" id="footer">
    <p class="title">Contact us at:</p>
    <div class="emails">
      <a class="email" href="mailto:email@example.com"
        >mm224ys@student.lnu.se</a
      >
      <a class="email" href="mailto:email@example.com"
        >hs223nr@student.lnu.se</a
      >
      <a class="email" href="mailto:email@example.com"
        >ar224ee@student.lnu.se</a
      >
      <a class="email" href="mailto:email@example.com"
        >ig222kd@student.lnu.se</a
      >
      <a class="email" href="mailto:email@example.com"
        >ro222ij@student.lnu.se</a
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  position: relative;
  background: #ffc106;
  padding: 40px 10%;
  width: 100%;
  text-align: center;

  &::before {
    position: absolute;
    content: "";
    top: -40px;
    right: 0px;
    width: 150%;
    height: 40px;
    transform: rotate(180deg);
    background: url("assets/images/footer.svg");
  }
}

.title {
  margin-bottom: 30px;
}

.emails {
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  .email {
    margin: 5px 20px;
  }
}
</style>
