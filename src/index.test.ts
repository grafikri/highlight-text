import HighlightText, { QuotationType } from "./index"

describe("Turkish", () => {
  test("case sensitivity", () => {
    const text = new HighlightText()

    // Text letter is uppercase
    // Search letter is upercase
    expect(text.replaceWord("İzmir Bursa İstanbul", "İzmir İstanbul")).toEqual(
      "<span class='highlight-text'>İzmir</span> Bursa <span class='highlight-text'>İstanbul</span>"
    )

    // Text letter is uppercase
    // Search letter is lowercase
    expect(text.replaceWord("İzmir Bursa İstanbul", "izmir istanbul")).toEqual(
      "<span class='highlight-text'>İzmir</span> Bursa <span class='highlight-text'>İstanbul</span>"
    )

    // Text letter is lowercase
    // Search letter is uppercase
    expect(text.replaceWord("izmir Bursa istanbul", "İzmir İstanbul")).toEqual(
      "<span class='highlight-text'>izmir</span> Bursa <span class='highlight-text'>istanbul</span>"
    )

    // Text letter is lowercase
    // Search letter is lowercase
    expect(text.replaceWord("izmir Bursa istanbul", "izmir istanbul")).toEqual(
      "<span class='highlight-text'>izmir</span> Bursa <span class='highlight-text'>istanbul</span>"
    )
  })
})

describe("English", () => {
  test("case sensitivity", () => {
    const text = new HighlightText({
      language: "en"
    })

    // Text letter is uppercase
    // Search letter is upercase
    expect(text.replaceWord("Londra Stockholm ParIs", "Londra ParIs")).toEqual(
      "<span class='highlight-text'>Londra</span> Stockholm <span class='highlight-text'>ParIs</span>"
    )

    // Text letter is uppercase
    // Search letter is lowercase
    expect(text.replaceWord("Londra Stockholm ParIs", "Londra Paris")).toEqual(
      "<span class='highlight-text'>Londra</span> Stockholm <span class='highlight-text'>ParIs</span>"
    )

    // Text letter is lowercase
    // Search letter is uppercase
    expect(text.replaceWord("Londra Stockholm Paris", "Londra ParIs")).toEqual(
      "<span class='highlight-text'>Londra</span> Stockholm <span class='highlight-text'>Paris</span>"
    )

    // Text letter is lowercase
    // Search letter is lowercase
    expect(text.replaceWord("Londra Stockholm Paris", "Londra Paris")).toEqual(
      "<span class='highlight-text'>Londra</span> Stockholm <span class='highlight-text'>Paris</span>"
    )
  })
})

describe("Tag", () => {
  test("Default Tag should be span", () => {
    const highlight = new HighlightText()

    expect(highlight.replaceWord("izmir bursa istanbul", "izmir")).toEqual(
      "<span class='highlight-text'>izmir</span> bursa istanbul"
    )
  })

  test("Tag should be same as given", () => {
    const highlight = new HighlightText({
      tag: "i"
    })

    expect(highlight.replaceWord("izmir bursa istanbul", "izmir")).toEqual(
      "<i class='highlight-text'>izmir</i> bursa istanbul"
    )
  })
})

describe("Quote", () => {
  test("Default quote should be single", () => {
    const highlight = new HighlightText()

    expect(highlight.replaceWord("izmir bursa istanbul", "izmir")).toEqual(
      "<span class='highlight-text'>izmir</span> bursa istanbul"
    )
  })

  test("Quote should be single", () => {
    const highlight = new HighlightText({
      quotation: QuotationType.Single
    })

    expect(highlight.replaceWord("izmir bursa istanbul", "izmir")).toEqual(
      "<span class='highlight-text'>izmir</span> bursa istanbul"
    )
  })

  test("Quote should be double", () => {
    const highlight = new HighlightText({
      quotation: QuotationType.Double
    })

    expect(highlight.replaceWord("izmir bursa istanbul", "izmir")).toEqual(
      '<span class="highlight-text">izmir</span> bursa istanbul'
    )
  })
})

describe("ClassName", () => {
  test("Default className should be highlight-text", () => {
    const highlight = new HighlightText()

    expect(highlight.replaceWord("izmir bursa istanbul", "izmir")).toEqual(
      "<span class='highlight-text'>izmir</span> bursa istanbul"
    )
  })

  test("Default className should be as given", () => {
    const highlight = new HighlightText({
      className: "front-end-developer"
    })

    expect(highlight.replaceWord("izmir bursa istanbul", "izmir")).toEqual(
      "<span class='front-end-developer'>izmir</span> bursa istanbul"
    )
  })
})
