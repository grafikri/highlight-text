import HighlightText, { QuotationType } from "./index"

test("Basic typescript search", () => {
  const text = new HighlightText()
  const replaceWord = text.replaceWord("Merhaba Dünya", "Merhaba")

  expect(replaceWord).toEqual(
    "<span class='highlight-text'>Merhaba</span> Dünya"
  )
})

test("Tag should be same as given", () => {
  const highlight = new HighlightText({
    tag: "i"
  })
  const result = highlight.replaceWord("Merhaba Dünya", "Dünya")

  expect(result).toEqual("Merhaba <i class='highlight-text'>Dünya</i>")
})

test("Quote should be double", () => {
  const highlight = new HighlightText({
    quotation: QuotationType.Single
  })
  const result = highlight.replaceWord("Merhaba Dünya", "Dünya")

  expect(result).toEqual("Merhaba <span class='highlight-text'>Dünya</span>")
})
