// Birazdan buralar karışacak
const Highlight = require("../dist")

test("Basic", () => {
  const highlight = new Highlight()
  const result = highlight.replaceWord("Merhaba Dünya", "Dünya")

  expect(result).toEqual("Merhaba <span class='highlight-text'>Dünya</span>")
})
