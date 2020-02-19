import HighlightText from "./index"

test("Basic typescript search", () => {
  const text = new HighlightText()
  const replaceWord = text.replaceWord("Merhaba Dünya", "Merhaba")

  expect(replaceWord).toEqual(
    "<span class='highlight-text'>Merhaba</span> Dünya"
  )
})
