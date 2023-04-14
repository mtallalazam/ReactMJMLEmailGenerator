import { renderReactToMjml } from '@/utils/renderReactToMjml';
import { generate } from '@/emailTemplates/emailTemp';

export default async function email(req, res) {
  const { html, errors } = renderReactToMjml(
    generate(),
    { validationLevel: 'soft' }
  );
  if (errors && errors.length) {
    return res.status(500).json({
      errors,
    });
  }
  return res.send(html)
}