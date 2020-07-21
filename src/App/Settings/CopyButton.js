import React, { useState } from 'react'
import { Icon, Button } from 'semantic-ui-react'

const CopyButton = ({ string }) => {
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    copy2clipboard(string)
    setCopied(true)
    const copyTimeout = window.setTimeout(() => {
      setCopied(false)
      window.clearTimeout(copyTimeout)
    }, 5000)
  }

  return (
    <Button icon onClick={handleClick}>
      <Icon name={copied ? 'green check' : 'copy'} />
    </Button>
  )
}

export default CopyButton

const copy2clipboard = string => {
  const el = document.createElement('textarea')
  el.value = string
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}
