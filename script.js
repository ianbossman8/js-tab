const apiKey = '9e85a87d-b0ea-4b3f-a3a5-67726e30282c'

function getContents(sections) {
  const url = 'https://content.guardianapis.com'
  const fetchArr = sections.map((section) => fetch(encodeURI(url + `/search?q=${section}&api-key=${apiKey}`)))

  return Promise.all(fetchArr)
}

function idExtrator(htmlId) {
  return htmlId.split('-').slice(-1).join('')
}

function tabs(tabsHeaders, data) {
  const tabsArea = document.getElementsByClassName('tabs popular-content-tabs')[0]

  const tabsHeadersList = document.createElement('ul')
  tabsHeadersList.className = 'tabs__headers'

  tabsHeaders.map((section, index) => {
    const header = document.createElement('li')

    header.setAttribute('id', `tab-${index}`)
    header.setAttribute('role', `tab`)
    header.className = `tab ${index === 0 ? 'active' : ''}`
    header.innerText = section

    header.addEventListener('click', function handleTabHeaderClick(event) {
      const tabId = idExtrator(event.target.id)
      const contents = document.getElementsByClassName('tabs__content-list')
      const tabHeaders = document.getElementsByClassName('tab')

      for (let i = 0; i < tabHeaders.length; i++) {
        const tabHeadersId = idExtrator(tabHeaders[i].id)

        if (tabId === tabHeadersId) {
          tabHeaders[tabHeadersId].className = 'tab active'
        } else {
          tabHeaders[tabHeadersId].className = 'tab'
        }
      }

      for (let i = 0; i < contents.length; i++) {
        const contentId = idExtrator(contents[i].id)
        if (tabId === contentId) {
          contents[contentId].className = 'tabs__content-list active'
        } else {
          contents[contentId].className = 'tabs__content-list'
        }
      }
    })

    const tabLink = document.createElement('a')
    tabLink.setAttribute('href', `#tab__content-list-${index}`)

    header.appendChild(tabLink)
    tabsHeadersList.appendChild(header)
  })

  const tabsContent = document.createElement('div')
  tabsContent.className = 'tab-panel-container'
  tabsContent.setAttribute('role', 'tabpanel')

  tabsArea.appendChild(tabsHeadersList)
  tabsArea.appendChild(tabsContent)

  data.then((contents) => {
    contents.map(({ response: { results } }, index) => {
      const newsList = document.createElement('ul')

      newsList.setAttribute('id', `tab__content-list-${index}`)
      newsList.className = `tabs__content-list ${index === 0 ? 'active' : ''}`

      results.map((result, i) => {
        const newsItem = document.createElement('li')
        newsItem.className = 'list-item'

        const newsNumber = document.createElement('span')
        newsNumber.innerText = i + 1

        const newsLink = document.createElement('a')
        newsLink.setAttribute('href', result.webUrl)
        newsLink.innerText = result.webTitle

        newsItem.appendChild(newsNumber)
        newsItem.appendChild(newsLink)
        newsList.appendChild(newsItem)
      })

      tabsContent.appendChild(newsList)
    })
  })
}

window.onload = function () {
  const listOfSections = ['uk news', 'football', 'travel']

  const newsData = getContents(listOfSections)
    .then((responses) => Promise.all(responses.map((res) => res.json())))
    .then((contents) => contents)
    .catch((error) => error)

  tabs(listOfSections, newsData)
}
