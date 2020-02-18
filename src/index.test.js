// Birazdan buralar karışacak
const Highlight = require("../dist")

test("Basic search", () => {
  const highlight = new Highlight()
  const result = highlight.replaceWord("Merhaba Dünya", "Dünya")

  expect(result).toEqual("Merhaba <span class='highlight-text'>Dünya</span>")
})

test("Tag should be same as given", () => {
  const highlight = new Highlight({
    tag: "i"
  })
  const result = highlight.replaceWord("Merhaba Dünya", "Dünya")

  expect(result).toEqual("Merhaba <i class='highlight-text'>Dünya</i>")
})

test("Quote should be double", () => {
  const highlight = new Highlight({
    quotation: "double"
  })
  const result = highlight.replaceWord("Merhaba Dünya", "Dünya")

  expect(result).toEqual('Merhaba <span class="highlight-text">Dünya</span>')
})
