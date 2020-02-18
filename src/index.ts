import transpose from "transpose-2d-array"

export enum QuotationType {
  Single,
  Dobule
}

export interface Options {
  language?: string
  tag?: string
  className?: string
  quotation?: QuotationType
}

export default class HighlightText {
  public options: Options

  constructor(options?: Options) {
    const defaultOptions: Options = {
      language: "tr",
      tag: "span",
      className: "highlight-text",
      quotation: QuotationType.Dobule
    }

    this.options = { ...defaultOptions, ...options }
  }

  replace(text: string, search: string) {
    const arr = this.findSearchIndexes(text, search)
    const { arrText, arrSearch } = arr
    const positions = this.detectIndexes(arrText, arrSearch)
    const arrTranspose = transpose(positions)
    const results = this.determinePositions(arrTranspose)
    const modifiedText = this.replacedText(text.split(" "), results)
    return modifiedText.join(" ")
  }

  private findSearchIndexes(text: string, search: string) {
    const language = this.options.language

    const arrText: string[] = text.toLocaleLowerCase(language).split(" ")
    const arrSearch: string[] = search.toLocaleLowerCase(language).split(" ")

    return {
      arrText,
      arrSearch
    }
  }

  private detectIndexes(arrText: string[], arrSearch: string[]) {
    let positions: any[] = []
    for (let i = 0; i < arrSearch.length; i++) {
      const searhingItem = arrSearch[i]
      positions[i] = []
      for (let j = 0; j < arrText.length; j++) {
        let textItem = arrText[j]
        let index = textItem.indexOf(searhingItem)

        if (index !== -1) {
          const firstPosition = index
          const lastPosition = index + searhingItem.length
          positions[i].push([firstPosition, lastPosition])
        } else {
          positions[i].push([0, 0])
        }
      }
    }

    return positions
  }

  private determinePositions(arr: any[]) {
    let positions = []

    for (let i = 0; i < arr.length; i++) {
      const subArr = arr[i]
      for (let j = 0; j < subArr.length; j++) {
        const item = subArr[j]
        const total = item[0] + item[1]

        if (positions[i] !== undefined) break

        if (total > 0) {
          positions[i] = item
          break
        }

        const isLastItem = subArr.length - 1 === j

        if (isLastItem && total === 0) {
          positions[i] = item
          break
        }
      }
    }

    return positions
  }

  private replacedText(
    arrText: any[],
    arrPosition: any[],
    tagName = this.options.tag,
    className = this.options.className
  ) {
    return arrText.map((item, index) => {
      let firstPosition = arrPosition[index][0]
      let lastPosition = arrPosition[index][1]
      if (firstPosition == 0 && lastPosition == 0) {
        return item
      } else {
        const quotation =
          this.options.quotation === QuotationType.Single ? "'" : '"'

        return (
          item.substr(0, firstPosition) +
          `<${tagName} class=` +
          quotation +
          `${className}` +
          quotation +
          `>` +
          item.substr(firstPosition, lastPosition) +
          `</${tagName}>` +
          item.substr(lastPosition, item.length - lastPosition)
        )
      }
    })
  }
}
