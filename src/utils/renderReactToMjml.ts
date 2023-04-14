import { renderToMjml } from '@faire/mjml-react/utils/renderToMjml'
import mjml2html from 'mjml'
import { MJMLParseResults } from 'mjml-core'

export function renderReactToMjml(email: React.ReactElement): MJMLParseResults {
  return mjml2html(renderToMjml(email))
}
