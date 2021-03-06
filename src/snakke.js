(function () {
  'use strict'

  var shouldScroll = true
  var screenHeight = document.documentElement.clientHeight
  var fullHeight = document.body.clientHeight
  var bodyHeight = fullHeight - screenHeight
  var div = document.createElement('div')

  function init () {
    createDiv()
    window.addEventListener('scroll', handleScroll, false)
  }

  function handleScroll () {
    if (window.scrollY < 10 || getPercentageScroll(window.scrollY) > 95) {
      setProgress()
    }
    if (!shouldScroll) {
      return
    }
    blockScroll()
    setProgress()
    setTimeout(allowScroll, 80)
  }

  function setProgress () {
    var total = getPercentageScroll(window.scrollY)
    if (total > 99) {
      total = 100
    }
    if (total < 1) {
      total = 0
    }
    div.style.width = total + '%'
  }

  function createDiv () {
    div.className = 'snakke-bar'
    document.body.insertBefore(div, document.body.firstChild)
  }

  function getPercentageScroll (scrollPos) {
    return Math.round((scrollPos / bodyHeight) * 100)
  }

  function blockScroll () {
    shouldScroll = false
  }

  function allowScroll () {
    shouldScroll = true
  }

  init()
})()
