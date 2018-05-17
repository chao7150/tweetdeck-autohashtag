run()

async function run() {
  const tweetButton = document.querySelector("button.js-send-button");//jqueryオブジェクトにするとobserve出来ない
  if (tweetButton === null) {
      setTimeout(run, 500);
      return;
  }
  const tweetButtonContainer = $(".js-send-button-container")
  const hashtagInput = $('<form><input id="js-hashtag-form"></input></form>',)
  tweetButtonContainer.after(hashtagInput)

  $(document).keydown((e) => {
    if (e.shiftKey && e.keyCode === 13) {
      const tweetTextArea = $("textarea.js-compose-text")[0]
      const hashtag = $("#js-hashtag-form").val()
      tweetTextArea.value = tweetTextArea.value + " " + hashtag
      tweetTextArea.dispatchEvent(new Event('change'))
      $(".js-send-button")[0].dispatchEvent(new Event('click'))
    }
  })
}
