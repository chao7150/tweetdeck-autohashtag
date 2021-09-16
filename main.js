run()

async function run() {
  const sendButton = document.querySelector(".js-send-button");
  if (!sendButton) {
    setTimeout(run, 500);
    return;
  }
  const hashtagInput = document.createElement("input");
  hashtagInput.id = "js-hashtag-form";
  hashtagInput.placeholder = "#hashtag";
  document.querySelector(".js-account-safeguard-checkbox").after(hashtagInput);
  const composeTextArea = document.querySelector(".js-compose-text");

  document.addEventListener("keydown", (e) => {
    if (e.shiftKey && e.key === "Enter") {
      composeTextArea.value = `${composeTextArea.value} ${hashtagInput.value}`;
      composeTextArea.dispatchEvent(new Event('change'));
      sendButton.dispatchEvent(new Event("click"));
    }
  })
}
