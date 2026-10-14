import { handleContact } from '../../integrations/contact/handler.mjs';
export const onRequest = ({ request, env }) => handleContact(request, env);
