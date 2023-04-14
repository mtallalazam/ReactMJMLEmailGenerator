import { renderToMjml } from '@faire/mjml-react/utils/renderToMjml'
import mjml2html from 'mjml'
import { MJMLParseResults, MJMLParsingOptions } from 'mjml-core'

export function renderReactToMjml(email: React.ReactElement, options:MJMLParsingOptions): MJMLParseResults {
  return mjml2html(renderToMjml(email), options)
}
